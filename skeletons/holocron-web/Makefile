SERVICE := holocron-web
REGISTRY := eu.gcr.io/es-platform-dev-447a
REVISION := $(shell git describe --always --dirty='-dirty')
BRANCH := $(shell git symbolic-ref --short HEAD)
IMAGE := $(SERVICE):$(subst /,-,$(BRANCH))-$(REVISION)
IMAGE_TAG := $(REGISTRY)/$(IMAGE)

run: build
	docker run --rm -it -p 3000:3000 $(IMAGE_TAG)

all: ## do we need this?
	make help

build: check-env ## build docker image for the current version of the service
	docker build --build-arg ENVIRONMENT=$(ENV) --build-arg NODE_AUTH_TOKEN=$(NODE_AUTH_TOKEN) --build-arg SENTRY_AUTH_TOKEN=$(SENTRY_AUTH_TOKEN) -t $(IMAGE_TAG) .
	@echo "$(SERVICE) built with tag: $(IMAGE_TAG)"

check-env:
# ifndef ENV
# 	@echo "ENV is undefined."
# 	@echo "Usage: make [TARGET] ENV=[development|production]"
# 	@exit 1
# endif
ifndef NODE_AUTH_TOKEN
	@echo "NODE_AUTH_TOKEN is undefined."
	@echo "Usage: make [TARGET] NODE_AUTH_TOKEN=[your_token]"
	@exit 1
endif

.PHONY: help
help: ## shows this help information
	@sed -ne '/@sed/!s/## //p' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":."}; {printf "\033[36m%-50s\033[97m %s\n", $$1, $$2}'
