package controller

import (
	"context"
	"walmar-test-api/walmart-golang-api/src/entity"
	"walmar-test-api/walmart-golang-api/src/repository"
)

type Controller interface {
	ReadAll(value string, ctx context.Context) ([]*entity.Product, error)
}

type controller struct {
	repo repository.Repository
}

// NewController creates a new instance of a Controller
func NewController(rep repository.Repository) Controller {
	return &controller{
		repo: rep,
	}
}
func (s *controller) ReadAll(value string, ctx context.Context) ([]*entity.Product, error) {
	products, err := s.repo.ReadAll(value, ctx)
	if err != nil {
		return nil, err
	}
	return products, nil
}
