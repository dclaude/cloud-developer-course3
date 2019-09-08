FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied                                                                            
# where available (npm@5+)
COPY package*.json ./
# install the dependencies on the guest OS (container OS)
RUN npm ci
# copy the output of our build (the ./www folder) into the container (the build will be done on a CI)
COPY . .
RUN apt-get update
RUN apt-get install zip
RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "prod" ]
