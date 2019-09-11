 var express = require('express');
 var app = express();
 var path = require('path');
 var bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({ extended: true }));

 app.get('/',function(req,res){
 	res.sendFile(path.join( __dirname + '/form.html'));
 });


 app.post('/',function(req,res){

 	var Email = req.body.email;
 	var Password = req.body.password;
  res.send("Email Address is" + Email + "& Password is" + Password);

 });

 app.listen('8080',function(err){
 	if(err){
 		throw err;
 	}
 	console.log("Server run on port 8080");
 });