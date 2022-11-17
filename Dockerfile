# CUrrent LTS node image to build from
FROM node:18

# App directory inside the container
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Bind to port
EXPOSE 8080

CMD [ "node", "server.js" ]