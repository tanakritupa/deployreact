FROM node:18-alpine as build-stage
WORKDIR /app
ENV NODE_OPTIONS=--max_old_space_size=4000
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build
CMD ["npm", "start"]
