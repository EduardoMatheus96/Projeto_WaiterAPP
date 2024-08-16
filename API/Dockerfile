# Use uma imagem base do Node.js
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o arquivo package.json e yarn.lock para o diretório de trabalho
COPY package*.json ./
COPY yarn.lock ./

# Instala as dependências
RUN yarn install

# Copia o restante do código da aplicação
COPY . .

# Compila o projeto (caso tenha um script build no package.json)
RUN yarn build

# Define a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
