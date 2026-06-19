FROM node:22-alpine AS build
WORKDIR /app
COPY apps/identity-mfe/package*.json ./apps/identity-mfe/
COPY libs/ ./libs/
COPY tsconfig.base.json ./
RUN cd apps/identity-mfe && npm ci
COPY apps/identity-mfe/ ./apps/identity-mfe/
RUN cd apps/identity-mfe && npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/apps/identity-mfe/dist /usr/share/nginx/html
COPY apps/identity-mfe/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4201
CMD ["nginx", "-g", "daemon off;"]
