#!/bin/bash

docker build --no-cache --target nginx -t redstar504/devjobs-frontend:latest .
docker push redstar504/devjobs-frontend:latest
kubectl rollout restart deployment devjobs-frontend