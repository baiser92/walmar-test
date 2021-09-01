package entity

// Message
type Message struct {
	MSG string `json:"msg"`
}

type Product struct {
	ID            int    `json:"id"`
	Brand         string `json:"brand"`
	Description   string `json:"description"`
	Image         string `json:"image"`
	Price         int    `json:"price"`
	DiscountPrice int    `json:"discountPrice"`
	IsDiscount    bool   `json:"IsDiscount"`
}
