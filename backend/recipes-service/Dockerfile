FROM node:23.1.0
WORKDIR /app
COPY package*.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4002
CMD ["node", "index.js"]
