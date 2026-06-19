FROM node:22-alpine AS build
WORKDIR /app
COPY apps/order-mfe/package*.json ./apps/order-mfe/
COPY libs/ ./libs/
COPY tsconfig.base.json ./
RUN cd apps/order-mfe && npm ci
COPY apps/order-mfe/ ./apps/order-mfe/
RUN cd apps/order-mfe && npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/apps/order-mfe/dist /usr/share/nginx/html
COPY apps/order-mfe/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4203
CMD ["nginx", "-g", "daemon off;"]
