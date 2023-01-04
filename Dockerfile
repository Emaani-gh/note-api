FROM node:17-alpine

WORKDIR /note-api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]

