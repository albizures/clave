const objects = require('../Objects');
module.exports = function (io) {

	io.on('connection', function(socket){
	  console.log('a user connected');
		var currentPlayer = objects.newPlayer({id : socket.id});
		socket.on('gotit',function (player) {
			console.log('gotit');
			socket.broadcast.emit('playerJoin',player);
		});
		socket.on('respawn',function () {
			console.log('respawn');
			socket.emit('welcomen');
		})
		socket.emit('welcome',currentPlayer);
	});

}
