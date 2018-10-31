FROM node:8.11.1
LABEL maintainer = "Nick Marucci <nmarucci@overstock.com>"
LABEL ostk.app.name = "room-ideas-rooms"
LABEL ostk.app.type webservice

COPY . /app
WORKDIR /app

EXPOSE 8080

ENV PORT=8080
ENV NODE_ENV=production
CMD node build/index.js
