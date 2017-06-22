var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs')

  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey I the server finally works')
  })

 app.get('/jaws', function(req, res){
 	var json = {title: "Jaws", year: 1975}
 	res.send(json)
 })

 app.get('/click', function(req, res){
 	var json = {title: "Click", year: 2006}
 	res.send(json)
 })

 app.get('/page1', function(req, res){
 	res.render('page1')
 })

app.get('/page2', function(req, res){
	res.render('page2')
})

app.get('/', function(req, res){
	res.send('this is a message')
})


// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening, but on what port, are you reading the code?')
})
