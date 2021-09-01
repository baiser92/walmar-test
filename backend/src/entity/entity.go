package entity

import "go.mongodb.org/mongo-driver/bson/primitive"

// Message
type Message struct {
	MSG string `json:"msg"`
}

type Product struct {
	ID            primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	IDProduct     int                `bson:"id,omitempty" json:"idProduct"`
	Brand         string             `bson:"brand,omitempty" json:"brand"`
	Description   string             `bson:"description,omitempty" json:"description"`
	Image         string             `bson:"image,omitempty" json:"image"`
	Price         int                `bson:"price,omitempty" json:"price"`
	DiscountPrice int                `json:"discountPrice"`
	IsDiscount    bool               `json:"IsDiscount"`
}
