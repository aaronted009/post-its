FROM node:latest

WORKDIR /my-post-it-project

COPY . .

RUN npm install

EXPOSE 5174

CMD ["npm", "run", "dev"]
