var express = require('express'),
    ovrc = require('./api/ovrc');

var app = express();

app.use(function(req,res,next){
  console.log('%s %s', req.method, req.url);

  next();
});

app.get('/api/ovrc', ovrc.restartAPI);

app.use(express.static('public'));

app.use(function(req, res){
  res.sendFile(__dirname + '/public');
});

app.listen(process.env.port || 8000);
