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
			ID:            1,
			Brand:         "ooy eqrceli",
			Description:   "rlñlw brhrka",
			Image:         "https://www.lider.cl/catalogo/images/whiteLineIcon.svg",
			Price:         498724,
			DiscountPrice: 28000,
			IsDiscount:    true,
		},
		{
			ID:            2,
			Brand:         "dsaasd",
			Description:   "zlrwax bñyrh",
			Image:         "https://www.lider.cl/catalogo/images/babyIcon.svg",
			Price:         130173,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
		{
			ID:            3,
			Brand:         "weñxoab",
			Description:   "hqhoy qacirk",
			Image:         "https://www.lider.cl/catalogo/images/homeIcon.svg",
			Price:         171740,
			DiscountPrice: 10000,
			IsDiscount:    true,
		},
		{
			ID:            4,
			Brand:         "sjlzxeo",
			Description:   "pnyn rlxbewnk",
			Image:         "https://www.lider.cl/catalogo/images/computerIcon.svg",
			Price:         890348,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
		{
			ID:            5,
			Brand:         "peuoooypt",
			Description:   "trcwl iagxxh",
			Image:         "https://www.lider.cl/catalogo/images/whiteLineIcon.svg",
			Price:         814893,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
		{
			ID:            6,
			Brand:         "ñuo onfbtya",
			Description:   "vangde oswss",
			Image:         "https://www.lider.cl/catalogo/images/homeIcon.svg",
			Price:         468750,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
		{
			ID:            7,
			Brand:         "wiñ nvnactr",
			Description:   "nkhux ztdnct",
			Image:         "https://www.lider.cl/catalogo/images/bicycleIcon.svg",
			Price:         472543,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
		{
			ID:            8,
			Brand:         "sfzkvoñ",
			Description:   "hdvt tbrdeiñl",
			Image:         "https://www.lider.cl/catalogo/images/tvIcon.svg",
			Price:         428894,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
		{
			ID:            9,
			Brand:         "nzo acrrñvh",
			Description:   "ahelf lxhñep",
			Image:         "https://www.lider.cl/catalogo/images/tvIcon.svg",
			Price:         29530,
			DiscountPrice: 10000,
			IsDiscount:    true,
		},
		{
			ID:            10,
			Brand:         "adsfsda",
			Description:   "dñqy ipvukesh",
			Image:         "https://www.lider.cl/catalogo/images/smartphoneIcon.svg",
			Price:         691504,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
		{
			ID:            11,
			Brand:         "iñmfdpd",
			Description:   "fqfwt ikpxov",
			Image:         "https://www.lider.cl/catalogo/images/gamesIcon.svg",
			Price:         533752,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
		{
			ID:            12,
			Brand:         "vfbjgpt",
			Description:   "iwpazñ ltxsh",
			Image:         "https://www.lider.cl/catalogo/images/tvIcon.svg",
			Price:         647307,
			DiscountPrice: 30000,
			IsDiscount:    true,
		},
		{
			ID:            13,
			Brand:         "breizhf",
			Description:   "dquyja crdgj",
			Image:         "https://www.lider.cl/catalogo/images/computerIcon.svg",
			Price:         918745,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
		{
			ID:            14,
			Brand:         "dcc gdodkñg",
			Description:   "odrnuh ixdta",
			Image:         "https://www.lider.cl/catalogo/images/smartphoneIcon.svg",
			Price:         643123,
			DiscountPrice: 25000,
			IsDiscount:    true,
		},
		{
			ID:            15,
			Brand:         "ckyprmg",
			Description:   "ñlagjl rnkmt",
			Image:         "https://www.lider.cl/catalogo/images/bedRoomIcon.svg",
			Price:         953318,
			DiscountPrice: 0,
			IsDiscount:    false,
		},
	}

	return &repository{}
}

func (r *repository) GetAll() []*entity.Product {
	return productList
}
