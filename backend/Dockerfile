FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src

EXPOSE 4000

# ts-node-devで開発サーバを起動
CMD ["npm", "run", "dev"]
