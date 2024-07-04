FROM node:21-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

FROM base as prod

RUN npm run build

FROM nginx:latest as nginx

COPY --from=prod /app/dist /usr/share/nginx/html

EXPOSE 80

FROM base as dev

CMD ["npx", "vite", "--host", "0.0.0.0"]

EXPOSE 5173