FROM node

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

ENV PORT=3001

EXPOSE 3001

CMD ["npm", "run", "start:production"]