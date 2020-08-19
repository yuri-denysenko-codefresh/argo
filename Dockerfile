FROM node:12.13.0-alpine
COPY server.js server.js
COPY package.json package.json

EXPOSE 1700
CMD node ./server.js
