FROM node:latest
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY ./src .
VOLUME ./src:/app
RUN yarn install
CMD ["yarn", "start"]
EXPOSE $PORT