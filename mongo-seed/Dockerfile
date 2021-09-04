FROM mongo:4.1.8-xenial

#COPY seed.json /seed.json
#CMD mongoimport --username productListUser --password productListPassword --host mongodb --db promotions --collection products --type json --file /seed.json --jsonArray
COPY . .
CMD ["./import.sh"]
