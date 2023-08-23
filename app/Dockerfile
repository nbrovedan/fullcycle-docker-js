FROM node:18-alpine

WORKDIR /app

EXPOSE 3000

RUN apk update && apk add bash

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

COPY wait-for-it.sh wait-for-it.sh

RUN chmod +x wait-for-it.sh

CMD ["./wait-for-it.sh" , "db:3306" , "--strict" , "--timeout=300" , "--" , "node", "app.js"]