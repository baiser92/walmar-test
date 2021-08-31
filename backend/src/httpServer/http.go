package httpServer

import (
	"encoding/json"
	"net/http"

	"walmar-test-api/walmart-golang-api/src/controller"

	"walmar-test-api/walmart-golang-api/src/entity"
)

type HTTPServer interface {
	Health(res http.ResponseWriter, _ *http.Request)
	GetAll(res http.ResponseWriter, _ *http.Request)
}

type httpServer struct {
	ctrl controller.Controller
}

//NewHTTPServer initialice a new http server
func NewHTTPServer(c controller.Controller) HTTPServer {
	return &httpServer{
		ctrl: c,
	}
}

// Health verify if the api is up and running
func (h *httpServer) Health(res http.ResponseWriter, _ *http.Request) {
	json.NewEncoder(res).Encode(entity.Message{MSG: "status up"})
}

func (h *httpServer) GetAll(res http.ResponseWriter, _ *http.Request) {
	products := h.ctrl.GetAll()
	json.NewEncoder(res).Encode(products)
}
