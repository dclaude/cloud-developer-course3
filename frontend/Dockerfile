# this Dockerfile uses "multi-stage builds" cf https://docs.docker.com/develop/develop-images/multistage-build/
## Build
# on donne le nom "ionic" a ce stage
FROM beevelop/ionic AS ionic
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm ci
# Bundle app source
# ignore node_modules thanks to .dockerignore
COPY . .
RUN ionic build
#
## Run 
FROM nginx:alpine
# on copy le rep www genere dans le previous stage de nom "ionic" dans le container de ce second stage
COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

