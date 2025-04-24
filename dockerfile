# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /usr/src/app

# Copia apenas os arquivos de dependências primeiro
COPY package*.json ./

# Instala dependências (essa camada será cacheada se package.json não mudar)
RUN npm install

# Agora sim, copia o restante do código
COPY . .

# Expor porta
EXPOSE 3000

# Comando para iniciar a aplicação em modo dev
CMD ["npm", "run", "start:dev"]
