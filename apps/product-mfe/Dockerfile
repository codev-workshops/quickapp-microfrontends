FROM node:22-alpine AS build
WORKDIR /app
COPY apps/product-mfe/package*.json ./apps/product-mfe/
COPY libs/ ./libs/
COPY tsconfig.base.json ./
RUN cd apps/product-mfe && npm ci
COPY apps/product-mfe/ ./apps/product-mfe/
RUN cd apps/product-mfe && npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/apps/product-mfe/dist /usr/share/nginx/html
COPY apps/product-mfe/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4204
CMD ["nginx", "-g", "daemon off;"]
