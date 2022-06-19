FROM node:16

COPY package*.json ./

WORKDIR /usr/src/app

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]