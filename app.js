 var express = require('express');
 var app = express();
 var path = require('path');
 var bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({ extended: true }));
 app.set('view engine','ejs');

 var myname = "Soykot"

 app.get('/',function(req,res){
 	res.render('student',{name : myname });
 });


 app.listen('8080',function(err){
 	if(err){
 		throw err;
 	}
 	console.log("Server run on port 8080");
 });