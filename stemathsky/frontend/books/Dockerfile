
# which opreation system and node version we shell use...
FROM node:20-alpine

#Create Application directory (destination)
WORKDIR /usr/src/reactapp

#Install application dependencies (node_modules)
COPY package.json ./

#Run the commands for proper installtion
#update npm version
RUN npm install -g npm@10.8.1

#copy all files from source to destination where . is current directory
COPY . .

RUN npm run build

RUN npm install -g serve

#which port we want to expose
EXPOSE 5000

CMD ["serve", "-s", "build"]

#for bulding the docker, just run the command => docker build . -t cars-api
#for running the docker, just run the command => docker run -p 5050:8080 cars-api
