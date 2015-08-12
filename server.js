//'use strict';
const config = require('./config.json');
const http = require('http');
const router = require('./router');
const server = http.createServer();
const port  = process.env.PORT || config.port;
const io = require('socket.io')(server);

server.on('request',router);
server.on('listening', onListening);

server.listen(port);

require('./socket')(io);



function onListening() {
  console.log(`Server runnig in port ${port}`);
}
