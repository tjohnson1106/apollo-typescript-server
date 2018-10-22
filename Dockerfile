# stage 1 build the code
FROM node as builder
# Create app directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./]
# RUN npm install --only=production
RUN npm install
# Bundle app source
COPY . .
RUN npm run build

# stage 2
FROM node
WORKDIR /usr/app
COPY package*.json ./]
RUN npm install --production

COPY  --from=builder /usr/app/dist ./dist

COPY . .

COPY ormconfig.json .
COPY .env .

EXPOSE 4000
CMD node dist/src/index.js
