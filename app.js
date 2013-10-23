
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , db = require('./db/getlight')
  , http = require('http')
  , path = require('path')
  , io = require('socket.io');

var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/deviceinfo', db.getDeviceInfo);
//app.get('/lightinfo/:net', db.getLightInfo);
app.get('/epidentify/:net/:ep',db.identifyLight);
app.get('/groupinfo', db.getGroupInfo);
app.get('/epinfo/:net', db.getEpInfo);
app.get('/epinfo/:net/:ep', db.getLightInfo);
app.get('/upepname/:net/:ep/:name', db.updateEpName);
app.get('/ligbygrp/:addr', db.getLigByGrp);
app.get('/toggle/:net/:ep', db.toggleLight);
app.get('/lvlabs/:net/:ep/:lvl', db.levelLight);
app.get('/savelvl/:net/:ep/:lvl', db.saveLevel);
app.get('/loadlvl/:net/:ep', db.loadLevel);
app.get('/oper', db.getOperList);
app.post('/epinfo/:net/:ep', db.updateLightInfo);

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var socket = io.listen(server);
socket.on('connection',function(socket) {
    socket.on('message',function (msg) {
        console.log('Message Received: ', msg);
        socket.broadcast.emit('message', msg);
    });
});

