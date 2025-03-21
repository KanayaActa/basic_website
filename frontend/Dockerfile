# frontend/Dockerfile
FROM node:18-bullseye

WORKDIR /app

# package.json, package-lock.json を先にコピーして依存関係インストール
COPY package*.json ./
RUN npm install

# 残りのソースをコピー
COPY . .

# Vite はデフォルト 5173 ポート
EXPOSE 5173

# ホットリロード用に起動
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
