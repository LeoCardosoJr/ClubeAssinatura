FROM node:latest

EXPOSE 4200

WORKDIR /home/app/ui

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

CMD ["npm", "start"]