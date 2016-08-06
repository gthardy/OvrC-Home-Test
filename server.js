var express = require('express');

var app = express();

app.use(function(req,res,next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(express.static('public'));

app.use(function(req, res){
  res.sendfile(__dirname + '/public');
});

app.listen(process.env.port || 8000);
