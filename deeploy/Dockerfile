FROM node:9.5

RUN apt-get update
RUN npm install

WORKDIR /opt/node/app
ADD $PWD /opt/node/app

# USAGE
# docker build -f deeploy/Dockerfile -t shopping/node:v1 .
# docker run -t -i -v $PWD:/opt/node/app -u $UID --name shopping-node-env shopping/node:v1 /bin/bash
