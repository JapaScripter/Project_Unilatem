# Etapa 1: build da aplicação
FROM node:18 AS builder

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia arquivos necessários para instalar dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Build do projeto (Next.js faz isso com o comando abaixo)
RUN npm run build

# Etapa 2: imagem final para produção
FROM node:18

WORKDIR /app

# Copia apenas o build da imagem anterior
COPY --from=builder /app ./

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para rodar o servidor Next.js
CMD ["npm", "start"]
