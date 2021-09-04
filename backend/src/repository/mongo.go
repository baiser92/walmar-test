//Package repository provides all the methods to persit data in a slice
package repository

import (
	"context"
	"fmt"
	"os"
	"strconv"
	"strings"
	"walmar-test-api/walmart-golang-api/src/entity"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// mongoRepository is a struct for mongodb
type mongoRepository struct {
	db *mongo.Database
}

// ReadAll get all products from DB
func (r *mongoRepository) ReadAll(query string, ctx context.Context) ([]*entity.Product, error) {
	var products []*entity.Product

	intQuery, _ := strconv.Atoi(query)
	collection := r.db.Collection("products")
	orQuery := []bson.D{}
	idQuery := bson.M{"id": intQuery}
	brandQuery := bson.D{{"brand", primitive.Regex{Pattern: query, Options: ""}}}
	descriptionQuery := bson.D{{"description", primitive.Regex{Pattern: query, Options: ""}}}
	orQuery = append(orQuery, brandQuery, descriptionQuery)
	orqueryM := []bson.M{}
	machQuery := bson.M{"$or": orQuery}
	orqueryM = append(orqueryM, idQuery, machQuery)
	filter := bson.M{"$or": orqueryM}
	cursor, err := collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	err = cursor.All(ctx, &products)
	if err != nil {
		return nil, err
	}

	return products, nil
}

// getDBConnection returns the connection strings
func getDBConnection() (string, string, string, string) {
	usr := os.Getenv("DB_USER")
	if len(strings.TrimSpace(usr)) == 0 {
		usr = "productListUser"
	}
	pwd := os.Getenv("DB_PWD")
	if len(strings.TrimSpace(pwd)) == 0 {
		pwd = "productListPassword"
	}
	host := os.Getenv("DB_HOST")
	if len(strings.TrimSpace(host)) == 0 {
		host = "localhost"
	}
	port := os.Getenv("DB_PORT")
	if len(strings.TrimSpace(port)) == 0 {
		port = "27017"
	}
	return usr, pwd, host, port
}

// NewMongoRepository creates a new instance of a MongoRepository
func NewMongoRepository(ctx context.Context) (Repository, *mongo.Client) {
	usr, pwd, host, port := getDBConnection()
	uri := fmt.Sprintf("mongodb://%s:%s@%s:%s", usr, pwd, host, port)
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		panic(err)
	}

	database := client.Database("promotions")
	return &mongoRepository{db: database}, client
}
