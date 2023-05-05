# Define a imagem base que será utilizada
FROM node:16-alpine3.14

# Define o diretório de trabalho na imagem
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do diretório do projeto para o diretório de trabalho
COPY . .

# Expõe a porta 3000 do container
EXPOSE 3000

# Inicia o servidor web
CMD ["npm", "start"]
