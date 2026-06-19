FROM node:22-alpine AS build
WORKDIR /app
COPY apps/shell/package*.json ./apps/shell/
COPY libs/ ./libs/
COPY tsconfig.base.json ./
RUN cd apps/shell && npm ci
COPY apps/shell/ ./apps/shell/
RUN cd apps/shell && npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/apps/shell/dist /usr/share/nginx/html
COPY apps/shell/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
