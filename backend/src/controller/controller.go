package controller

import (
	"walmar-test-api/walmart-golang-api/src/entity"
	"walmar-test-api/walmart-golang-api/src/repository"
)

type Controller interface {
	GetAll() []*entity.Product
}

type controller struct {
	repo repository.Repository
}

func NewController(rep repository.Repository) Controller {

	return &controller{
		repo: rep,
	}
}
func (s *controller) GetAll() []*entity.Product {

	return s.repo.GetAll()
	//return entity.Product{ID: 181, Price: 5000, Description: "Esta es una prueba description", Brand: "Toyota", Image: "Carro"}
}
