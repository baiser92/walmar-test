package httpServer

import (
	"context"
	"encoding/json"
	"net/http"

	"walmar-test-api/walmart-golang-api/src/controller"

	"walmar-test-api/walmart-golang-api/src/entity"

	"github.com/gorilla/mux"
)

type HTTPServer interface {
	Health(res http.ResponseWriter, _ *http.Request)
	GetAll(res http.ResponseWriter, req *http.Request)
}

type httpServer struct {
	ctrl controller.Controller
	ctx  context.Context
}

//NewHTTPServer initialice a new http server
func NewHTTPServer(c controller.Controller, ctx context.Context) HTTPServer {
	return &httpServer{
		ctrl: c,
		ctx:  ctx,
	}
}

// Health verify if the api is up and running
func (h *httpServer) Health(res http.ResponseWriter, _ *http.Request) {
	json.NewEncoder(res).Encode(entity.Message{MSG: "status up"})
}

func (h *httpServer) GetAll(res http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	//hero, err := h.ctrl.GetByID(vars["value"], h.ctx)
	products, err := h.ctrl.ReadAll(vars["value"], h.ctx)
	if err != nil {
		res.WriteHeader(500)
		json.NewEncoder(res).Encode(err)
		return
	}
	json.NewEncoder(res).Encode(products)
}
