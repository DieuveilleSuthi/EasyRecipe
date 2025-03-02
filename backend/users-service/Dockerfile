FROM node:23.1.0
WORKDIR /app
COPY package.json .
COPY . .
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force
RUN npm install bcryptjs
EXPOSE 4001
CMD ["node", "index.js"]
