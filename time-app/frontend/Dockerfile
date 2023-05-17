FROM node:alpine

LABEL authors="dev"

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]