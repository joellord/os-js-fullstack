FROM node:12-alpine

WORKDIR /app

COPY package*.json .
COPY index.js .

RUN npm install
CMD ["npm", "start"]