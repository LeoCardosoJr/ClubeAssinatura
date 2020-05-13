FROM node:latest

EXPOSE 3000

WORKDIR /home/app/api

COPY package*.json ./

RUN npm install

COPY . /home/app/api

CMD ["npm", "run", "dev"]