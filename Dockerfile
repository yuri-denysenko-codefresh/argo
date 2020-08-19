FROM node:12.13.0-alpine
COPY server.js server.js

EXPOSE 1700
CMD node ./server.js
