# Use uma imagem Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package.json yarn.lock ./

# Instala as dependências
RUN yarn install

# Copia o restante do código da aplicação
COPY . .

# Compila o projeto Vite
RUN yarn build

# Instala o servidor HTTP para servir os arquivos estáticos
RUN yarn global add serve

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar o servidor e servir a aplicação
CMD ["serve", "-s", "dist"]
