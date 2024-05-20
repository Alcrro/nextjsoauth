FROM node:20-alpine

WORKDIR /.

COPY package.json .

RUN npm install 


COPY . .

CMD [ "npm", "run", "start" ]


EXPOSE 3000