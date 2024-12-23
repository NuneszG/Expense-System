FROM node:20-alpine

WORKDIR /src/app/

COPY package-lock.json /src/app/

COPY package.json /src/app/

COPY src/adapter/database/prisma ./prisma

RUN npm install 

RUN npx prisma generate

COPY . /src/app/

EXPOSE 8000

CMD ["npm", "run", "build", "npm", "run", "app"]
