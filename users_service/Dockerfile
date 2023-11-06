FROM node

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

ENV PORT=3002

EXPOSE 3002

CMD ["npm", "run", "start:production"]