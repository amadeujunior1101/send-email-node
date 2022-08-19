FROM node:14.15

WORKDIR /home/app

COPY package*.json ./

RUN npm install

RUN npm i -g nodemon -D

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev"]