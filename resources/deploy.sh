#!/bin/bash

set -e

echo "Build Docker"
docker build -t gcr.io/${PROJECT_NAME}/pw-survey:$TRAVIS_COMMIT .
docker tag gcr.io/${PROJECT_NAME}/pw-survey:$TRAVIS_COMMIT gcr.io/${PROJECT_NAME}/pw-survey:latest

echo "Authenticate Google Cloud Engine"
echo $GCLOUD_SERVICE_KEY | base64 --decode -i > ${HOME}/gcloud-service-key.json
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json

echo "Configure Google Cloud Engine Environment Variables"
gcloud --quiet config set project $PROJECT_NAME
gcloud --quiet config set container/cluster $CLUSTER_NAME
gcloud --quiet config set compute/zone ${CLOUDSDK_COMPUTE_ZONE}
gcloud --quiet container clusters get-credentials $CLUSTER_NAME

echo "Push Docker Image"
gcloud docker -- push gcr.io/${PROJECT_NAME}/pw-survey

yes | gcloud beta container images add-tag gcr.io/${PROJECT_NAME}/pw-survey:$TRAVIS_COMMIT gcr.io/${PROJECT_NAME}/pw-survey:latest

echo "Configure Kubernetes"
kubectl config view
kubectl config current-context

echo "Deploy"
kubectl set image deployment/pw-survey pw-survey=gcr.io/${PROJECT_NAME}/pw-survey:$TRAVIS_COMMIT

# echo "Post deploy installation" # WORK AROUND.. node-sass env bug
# POD=$(kubectl get pods | grep pw-survey | sed 's/ .*//')
# echo ${POD}
# kubectl exec -it ${POD} -c pw-survey bash
# npm run build
