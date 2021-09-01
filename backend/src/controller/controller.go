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

	if isPalindrome(value) {
		products = getDiscount(products)
	}
	if err != nil {
		return nil, err
	}
	return products, nil
}

//IsPalindrome function validate is Palindrome
func isPalindrome(input string) bool {
	for i := 0; i < len(input)/2; i++ {
		if input[i] != input[len(input)-i-1] {
			return false
		}
	}
	return true
}

func getDiscount(products []*entity.Product) []*entity.Product {

	for _, product := range products {

		product.DiscountPrice = product.Price
		product.Price = product.DiscountPrice / 2
		product.IsDiscount = true
	}

	return products

}
