# Dockerfile for custom deployment
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . .
RUN npm install --silent

# expose port 3000 to mount it to another port in local machine 
EXPOSE 3000 

# start app
CMD ["npm", "start"]