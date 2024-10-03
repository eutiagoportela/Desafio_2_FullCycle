FROM node:17

WORKDIR /usr/src/app

# Instala as dependências necessárias
RUN apt-get update && apt-get install -y wget

# Instala o Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz && \
    tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz && \
    rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copie o package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta que o Node.js estará escutando
EXPOSE 3000

# Usar Dockerize para aguardar o banco de dados antes de iniciar o aplicativo
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "20s", "node", "index.js"]
