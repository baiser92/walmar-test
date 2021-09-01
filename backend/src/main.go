package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
	"walmar-test-api/walmart-golang-api/src/httpServer"
	"walmar-test-api/walmart-golang-api/src/repository"

	"walmar-test-api/walmart-golang-api/src/controller"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	port := os.Getenv("PORT")
	if len(strings.TrimSpace(port)) == 0 {
		port = ":5000"
	}
	ctx := context.Background()
	repo, client := repository.NewMongoRepository(ctx)
	defer client.Disconnect(ctx)

	ctrl := controller.NewController(repo)
	http_server := httpServer.NewHTTPServer(ctrl, ctx)

	router := mux.NewRouter().StrictSlash(true)
	router.Use(commonMiddleware)
	router.HandleFunc("/health", http_server.Health)
	router.HandleFunc("/getAll/{value}", http_server.GetAll)

	credentials := handlers.AllowCredentials()
	methods := handlers.AllowedMethods([]string{"POST", "GET", "PUT", "DELETE"})
	origins := handlers.AllowedMethods([]string{"*"})

	fmt.Printf("server runing in port %v", port)
	fmt.Println()
	log.Fatal(http.ListenAndServe(port, handlers.CORS(credentials, methods, origins)(router)))

}

func commonMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		next.ServeHTTP(w, r)
	})
}
