FROM node:20-alpine

WORKDIR /app/api/

COPY package-lock.json /app/api/

COPY package.json /app/api/

COPY adapter/database/prisma ./prisma

RUN npm install 

RUN npx prisma generate

COPY . /app/api/

CMD ["npm", "run", "app", "make", "app", "npm", "run", "build", "0.0.0.0:8000"]

