
const player = require('./player.js');

module.exports = {
	newPlayer : function (data) {
		return new player(data);
	}
}
