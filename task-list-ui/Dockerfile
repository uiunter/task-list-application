FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve
EXPOSE 3000

# Команда для запуска приложения
CMD ["serve", "-s", "build", "-l", "3000"]
