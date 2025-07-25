# comandos e imagens que ele usa pra construir o container.
# backend/Dockerfile
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de configuração
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Compila TypeScript para JavaScript
RUN npm run build

# Inicia o servidor
CMD ["npm", "run", "start"]


