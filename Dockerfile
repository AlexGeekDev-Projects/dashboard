FROM node:16.10.0
ARG BUILD
WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install
COPY . .

RUN npm run ${BUILD}
RUN npm install serve -g

# Copy the local code to the container
COPY . .


# Start the service
CMD [ "serve", "-s", "build"]
