FROM node:18-alpine

WORKDIR /app

EXPOSE 3000

RUN apk update && apk add bash
RUN npm install nodemon -g

ENTRYPOINT ["/usr/local/bin/npm", "start"]
