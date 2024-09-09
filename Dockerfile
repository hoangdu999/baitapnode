FROM node:20.17.0

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .

CMD npm start