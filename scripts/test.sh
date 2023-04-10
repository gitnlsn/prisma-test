#!/bin/bash

setup() {
    npm i
    docker compose up -d
    sleep 1
    npx prisma migrate dev
}

cleanup() {
    docker compose down
}

test() {
    npx jest --runInBand --detectOpenHandles sum*
    npx jest --runInBand --detectOpenHandles
}

trap cleanup EXIT
setup
test
cleanup
