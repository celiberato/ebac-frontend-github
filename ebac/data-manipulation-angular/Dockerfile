### Multi Stage Build ###

### Estágio 1 - Obter o source e gerar o build ###
FROM node:16.13.1 AS ng-builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm update
RUN npm install -g npm@8.3.0
RUN npm install -g @angular/cli
RUN ng update --all --force

COPY . /app
RUN ng build #--configuration production

### Estágio 2 - Subir o source para o servidor NGINX com a app Angular ###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=ng-builder /app/dist/data-manipulation-angular /usr/share/nginx/html

EXPOSE 80
