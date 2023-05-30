FROM node:18.14.2
WORKDIR /usr/src/forkway-test
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]