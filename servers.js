//Lets require/import the HTTP module
var http = require('http');

//Lets define the ports we want to listen to
var PORTONE=7000;
var PORTTWO=7500;

//We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response){
    response.end("You are a lovely human.");
}

function handleRequestTwo(request, response){
    response.end('You are a loser human.');
}

//Create our servers
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

//Starting our servers
serverOne.listen(PORTONE, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORTTWO);
});

//always note EADDRINUSE error, refers to already listening to something