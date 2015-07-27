//'use strict';

const http = require('http');
const router = require('./router');
const server = http.createServer();
const port  = process.env.PORT || 9001;
const io = require('socket.io')(server);

server.on('request',router);
server.on('listening', onListening);

server.listen(port);

io.on('connection', function(socket){
  console.log('a user connected');
});


function onListening() {
  console.log(`Server runnig in port ${port}`);
}
