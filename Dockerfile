# Nodejs Base image
FROM node
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# install and app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli
# add app
COPY . /app
# start appp
CMD ng serve --host 0.0.0.0