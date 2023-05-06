# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy local files to the current local directory of our docker image (/app)
COPY ./public ./public
COPY ./src ./src
COPY index.html ./
COPY package.json ./
COPY package-lock.json ./
COPY vite.config.js ./

# Install node packages, install serve globally, build the app, then clean up node_modules
RUN npm ci \
    && npm install -g serve \
    && npm run build \
    && rm -rf node_modules

# Expose the port used by serve below
EXPOSE 3001

# Start the app using serve command
CMD [ "serve", "-l", "3001", "-s", "build" ]
