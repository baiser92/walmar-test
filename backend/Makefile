BUILDPATH=$(CURDIR)
BINARY=walmart-golang-backend

test: 
	@echo "Ejecutando tests..."
	@go test ./... -v

mod:
	@echo "Vendoring..."
	@go mod vendor

build: 
	@echo "Compilando..."
	@go build -mod vendor -ldflags "-s -w" -o $(BUILDPATH)/build/bin/${BINARY} src/main.go
	@echo "Binario generado en build/bin/"${BINARY}
