FROM node:10

WORKDIR /app

COPY ./app/package*.json ./

RUN npm install

COPY ./app .

ENTRYPOINT [ "npm","run", "start:dev" ]