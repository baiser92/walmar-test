//Package repository provides all the methods to persit data in a slice
package repository

import "walmar-test-api/walmart-golang-api/src/entity"

var productList []*entity.Product

type Repository interface {
	GetAll() []*entity.Product
}

type repository struct{}

func NewRepository() Repository {
	productList = []*entity.Product{
		{
			ID:          1,
			Brand:       "ooy eqrceli",
			Description: "rlñlw brhrka",
			Image:       "www.lider.cl/catalogo/images/whiteLineIcon.svg",
			Price:       498724,
		},
		{
			ID:          2,
			Brand:       "dsaasd",
			Description: "zlrwax bñyrh",
			Image:       "www.lider.cl/catalogo/images/babyIcon.svg",
			Price:       130173,
		},
		{
			ID:          3,
			Brand:       "weñxoab",
			Description: "hqhoy qacirk",
			Image:       "www.lider.cl/catalogo/images/homeIcon.svg",
			Price:       171740,
		},
		{
			ID:          4,
			Brand:       "sjlzxeo",
			Description: "pnyn rlxbewnk",
			Image:       "www.lider.cl/catalogo/images/computerIcon.svg",
			Price:       890348,
		},
		{
			ID:          5,
			Brand:       "peuoooypt",
			Description: "trcwl iagxxh",
			Image:       "www.lider.cl/catalogo/images/whiteLineIcon.svg",
			Price:       814893,
		},
		{
			ID:          6,
			Brand:       "ñuo onfbtya",
			Description: "vangde oswss",
			Image:       "www.lider.cl/catalogo/images/homeIcon.svg",
			Price:       468750,
		},
		{
			ID:          7,
			Brand:       "wiñ nvnactr",
			Description: "nkhux ztdnct",
			Image:       "www.lider.cl/catalogo/images/bicycleIcon.svg",
			Price:       472543,
		},
		{
			ID:          8,
			Brand:       "sfzkvoñ",
			Description: "hdvt tbrdeiñl",
			Image:       "www.lider.cl/catalogo/images/tvIcon.svg",
			Price:       428894,
		},
		{
			ID:          9,
			Brand:       "nzo acrrñvh",
			Description: "ahelf lxhñep",
			Image:       "www.lider.cl/catalogo/images/tvIcon.svg",
			Price:       29530,
		},
		{
			ID:          10,
			Brand:       "adsfsda",
			Description: "dñqy ipvukesh",
			Image:       "www.lider.cl/catalogo/images/smartphoneIcon.svg",
			Price:       691504,
		},
		{
			ID:          11,
			Brand:       "iñmfdpd",
			Description: "fqfwt ikpxov",
			Image:       "www.lider.cl/catalogo/images/gamesIcon.svg",
			Price:       533752,
		},
		{
			ID:          12,
			Brand:       "vfbjgpt",
			Description: "iwpazñ ltxsh",
			Image:       "www.lider.cl/catalogo/images/tvIcon.svg",
			Price:       647307,
		},
		{
			ID:          13,
			Brand:       "breizhf",
			Description: "dquyja crdgj",
			Image:       "www.lider.cl/catalogo/images/computerIcon.svg",
			Price:       918745,
		},
		{
			ID:          14,
			Brand:       "dcc gdodkñg",
			Description: "odrnuh ixdta",
			Image:       "www.lider.cl/catalogo/images/smartphoneIcon.svg",
			Price:       643123,
		},
		{
			ID:          15,
			Brand:       "ckyprmg",
			Description: "ñlagjl rnkmt",
			Image:       "www.lider.cl/catalogo/images/bedRoomIcon.svg",
			Price:       953318,
		},
	}

	return &repository{}
}

func (r *repository) GetAll() []*entity.Product {
	return productList
}
