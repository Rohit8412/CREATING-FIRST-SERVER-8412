# CREATING-FIRST-SERVER-8412

const http = require('http');

# package import, "http" is just the name not a protocol, const http is the reference to package and acces is easy, also can write require("http"), keep the name same as package name

# npm(node package manger for managing our packages)

node mon

# will automatically restart my server whenever I change or save any file in my project

const port = 8081;

# creating a variable and assigning a port to it, port number is a 4 digit number which tells where exactly our website needs to be displayed, it's a local port number(only present at our os not on internet)

createServer

# after installing a http package we get a createServer function using which I am capable of creating a server

(request, response) =>{
response.writeHead(200, {'Content-Type':'text/html'});
response.write("<h1>hellow , This is from my server</h1>");
response.end();
}

# call back function, so when my server creation is done, call this function, now it is capable of accepting request and responses

# when we paste the http on the browser, we are actually making a request and to access that request we need a variable request to store the data and when we want to send him back some response we send using response variable, these are just parameters, the name can be anything

listen(port, ()=>{})

# after creating a server I am tellin it where I exactly need to create a server, which port do it want to be accesed by the user

port, ()=>{
console.log(`Nodejs server started on port ${port}`);
}

# call back function, if, when my port is successfully created, then I'll call this function

dependencies

# node server.js

# always required, throughout the project

# 3rd party package, important

dev-dependencies

# nodemon

# only when we are running the project while development, creating the project or server

# 3rd party package,
