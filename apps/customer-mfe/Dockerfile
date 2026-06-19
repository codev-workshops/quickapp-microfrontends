FROM node:22-alpine AS build
WORKDIR /app
COPY apps/customer-mfe/package*.json ./apps/customer-mfe/
COPY libs/ ./libs/
COPY tsconfig.base.json ./
RUN cd apps/customer-mfe && npm ci
COPY apps/customer-mfe/ ./apps/customer-mfe/
RUN cd apps/customer-mfe && npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/apps/customer-mfe/dist /usr/share/nginx/html
COPY apps/customer-mfe/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4202
CMD ["nginx", "-g", "daemon off;"]
