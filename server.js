var express = require('express');

var api = express();
var www = express();

api.configure(function(){
    api.use(function(req, res, next){
        res.set('Access-Control-Allow-Origin', '*');
        next();
    })
});

api.all('*', function(req, res){
    res.json(req.headers);
});

api.put('/put', function(req, res){
    res.json({response: "success"})
});

api.get('/get', function(req, res){
    res.send('ok');
});

api.put('/post', function(req, res){
    res.json({response: "success"})
});


www.get('/', function(req, res){
    res.sendfile("index.html");
});

api.listen(8000);
www.listen(8080);