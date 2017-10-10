
const express  = require('express');
const pug      = require('pug');
const path     = require('path');
const fortune  = require('./libs/fortune.js');
const chat     = require('./data/chatlist.js');
const login    = require('./data/login.js');
const sign     = require('./data/sign.js');
const arc      = require('./data/arc.js');
const chatt    = require('./data/clist.js');

const app = express();

const ip = process.env.PORT || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const port = process.env.IP || process.env.OPENSHIFT_NODEJS_PORT || 8008;

app.set( 'port',process.env.PORT || 8008 );
app.set('view engine','pug');
app.locals.basedir = path.join(__dirname,"views");

app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") res.status(200).send('');
    else next();
})

app.use(function(req,res,next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
})

app.use(function(req,res,next){
    if( !res.locals.partials ) res.locals.partials = {};
    res.locals.partials.weather = getWeatherData();
    next();
})


app.get('/',function(req,res){
    res.render('index/index',{ 
        fortune : fortune.getFortune(),
        pageTestScript : '/qa/test-index.js'
    });
})


app.use(require('body-parser')());

app.get('/login',function(req,res){
    res.render('index/login',{csrf:'CSRF token goes here'});
})

app.post('/process',function(req,res){
    console.log('Form (from queryString):' + req.query.form);
    console.log('CSRF token (from hidden form field):' + req.body._csrf);
    console.log('Name (form visible from field):' + req.body.name);
    console.log('Password (form visible from field):' + req.body.password);
    console.log('Email (form visible from field):' + req.body.email);
    res.redirect(303,'/thank-you.pug');
})

app.get('/sign',function(req,res){
    res.render('index/sign');
})

app.get('/thank-you',function(req,res){
    res.render('thank-you');
})


app.post('/data/chatlist/init', (req ,res) => {
    res.json( chat.getchatList())
})
app.post('/data/chatlist/add', (req ,res) => {
    res.json( chat.addchatmsg(req.body))
})
app.post('/data/chatlist/delete', (req ,res) => {
    res.json( chat.deletechatmsg(req.body))
})
app.post('/data/login', login.login);
app.get('/data/signout',sign.out);
app.post('/data/arclist', arc.list);
app.post('/data/arc', arc.arc);
app.post('/data/arcchange', arc.change);
app.post('/data/arcpublish', arc.publish);
app.post('/data/arcdel', arc.del);
app.post('/data/arcloadmore', arc.loadmore);
app.post('/data/chatlist', chatt.list);
app.post('/data/chat', chatt.chat);

app.use(function(req,res){
    res.status(404);
    res.render('404');

})

app.use(function(err,req,res,next){
    res.status(500);
    res.render('500');

})

app.listen(port,ip,function(){
    console.log("服务启动:" + ip + ':' + port);
})




function getWeatherData(){
    return {
        locations : [
            {
                name : 'Portland',
                forecasUrl : 'http://www.baidu.com',
                iconUrl : '/img/ren.jpg',
                weather : '晴天',
                temp : '32°C'
            },
            {
                name : '北京',
                forecasUrl : 'http://www.baidu.com',
                iconUrl : '/img/ren.jpg',
                weather : '雪',
                temp : '36°C'
            },
            {
                name : '上海',
                forecasUrl : 'http://www.baidu.com',
                iconUrl : '/img/ren.jpg',
                weather : '小雨',
                temp : '24°C'
            }
        ]
    }
}