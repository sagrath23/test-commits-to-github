FROM node:current-alpine

RUN apk --no-cache add git

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i

CMD ["node", "src/index.js"]
