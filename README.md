# cloud-developer-course3

## Travis CI/CD

The pipeline defined in `.travis.yaml` is meant to be used with https://travis-ci.org

## Docker Hub images

https://cloud.docker.com/u/benclaude/repository/docker/benclaude/udacity-restapi-feed

https://cloud.docker.com/u/benclaude/repository/docker/benclaude/udacity-restapi-user

https://cloud.docker.com/u/benclaude/repository/docker/benclaude/reverseproxy

https://cloud.docker.com/u/benclaude/repository/docker/benclaude/udacity-frontend


## App URLs

- restapi
  
  https://restapi.udagram.com/

- frontend (cloudfront)
  
  https://udagram.com/

- frontend (nginx)

  https://www.udagram.com/


## Creating Infrastructure

```
cd deployment/terraform/
rm -rf .terraform .terraform.tfstate.lock.info terraform.tfstate terraform.tfstate.backup tf.json
terraform init
terraform plan
terraform apply
terraform output -json > tf.json
```

## Installing Kubernetes

```
cd deployment/k8s/
AWS_ACCESS_KEY_ID=... AWS_SECRET_ACCESS_KEY=... kubeone install config.yaml --tfjson ../terraform/tf.json
#
kubectl apply -f env-configmap.yaml
kubectl apply -f env-secret.yaml
kubectl apply -f aws-secret.yaml
#
kubectl apply -f backend-user-deployment.yaml
kubectl apply -f backend-feed-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f reverseproxy-deployment.yaml
#
kubectl apply -f backend-feed-service.yaml
kubectl apply -f backend-user-service.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f reverseproxy-service.yaml
```
