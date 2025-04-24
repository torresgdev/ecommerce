# Imagem base
FROM node:22

# Diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos
COPY package*.json ./
RUN npm install

# Copiar tudo
COPY . .

# Expor porta
EXPOSE 3000

CMD ["npm", "run", "start:dev"]
