FROM node:12
WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install

ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true \
NEW_RELIC_LOG=stdout

CMD npm run app
EXPOSE 9999