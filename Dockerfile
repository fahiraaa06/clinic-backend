FROM node:lts-alpine3.12

ENV NODE_ENV=production

WORKDIR /app
 
# COPY package*.json ./

# RUN npm install -g npm && npm ci --only=production

# COPY . .

COPY dist .
 
EXPOSE 9000

CMD [ "node", "main.js" ]
