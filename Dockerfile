FROM node:8

# Install responsible pid 1 process, that listens to signals and take care of orphans
RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.0.2/dumb-init_1.0.2_amd64 \
    && chmod +x /usr/local/bin/dumb-init

COPY package.json /app/
COPY package-lock.json /app/

WORKDIR /app

RUN npm install

COPY ./lib /app/lib
COPY ./pages /app/pages
COPY ./static /app/static
COPY ./next.config.js /app/

ENTRYPOINT ["dumb-init"]

EXPOSE 80

CMD npm run server
