FROM node

WORKDIR /app

COPY package*.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]