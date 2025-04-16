FROM node:20-alpine AS build-env
WORKDIR /app
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY --from=build-env /app/build/client /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80