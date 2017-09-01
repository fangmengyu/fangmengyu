
const express = require('express');
const pug     = require('pug');
const path    = require('path');
const fortune = require('./libs/fortune.js');

const app = express();


app.set( 'port',process.env.PORT || 3000 );
app.set('view engine','pug');
app.locals.basedir = path.join(__dirname,"views");

app.use(express.static(__dirname + '/public'));

app.use(function(req,res,next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
})

app.get('/',function(req,res){
    res.render('index/index',{ 
        fortune : fortune.getFortune(),
        pageTestScript : '/qa/test-index.js'
    });
})
app.get('/login',function(req,res){
    res.render('index/login');
})
app.get('/sign',function(req,res){
    res.render('index/sign');
})

app.use(function(req,res){
    res.status(404);
    res.render('404');

})

app.use(function(err,req,res,next){
    res.status(500);
    res.render('500');

})

app.listen(app.get('port'),function(){
    console.log("服务启动")
})