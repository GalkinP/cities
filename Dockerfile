FROM node:20.11.0
ENV NODE_ENV production
WORKDIR /application
COPY ./client/dist ./dist
COPY ./server/package.json .
COPY ./server/package-lock.json .
RUN npm ci
COPY ./server .
EXPOSE 3000
CMD [ "npm", "start"]