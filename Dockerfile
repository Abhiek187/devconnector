# Fetch the latest LTS version of node
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install client & server dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY client/package*.json ./client/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
RUN npm install --prefix client

# Bundle app source
COPY . .

# Run the node client on port 3000 & server on port 5000 and open the connections
EXPOSE 3000 5000
CMD [ "npm", "run", "dev" ]
