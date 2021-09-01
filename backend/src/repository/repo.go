//Package repository provides all the methods to persit data in a slice
package repository

import (
	"context"
	"walmar-test-api/walmart-golang-api/src/entity"
)

type Repository interface {
	ReadAll(vale string, ctx context.Context) ([]*entity.Product, error)
}
