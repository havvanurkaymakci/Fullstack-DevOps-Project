# Base image
FROM node:18.18.0-alpine

# Uygulama dizinine geç
WORKDIR /usr/src/app

# Bağımlılık dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm proje dosyalarını kopyala
COPY . .

# Geliştirme sunucusunu çalıştır
EXPOSE 3000

CMD ["npm", "run", "dev"]
