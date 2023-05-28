# syntax=docker/dockerfile:1

FROM node:18-alpine

# change work directory to /app
WORKDIR /app

# copy all file to /app
COPY . .

RUN npm install

CMD [ "npm", "start" ]

EXPOSE 3000