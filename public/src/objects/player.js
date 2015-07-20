

(function($,_) {
	var player = function (player) {
		player = isUndefined(player)? {} : player;
		clave.typeObjects('$Object').call(this,'player',player.width,player.height,player.postX,player.postY,player.anchor);
		this.name = player.name || 'player' + this.id;
		this.live = player.live || 10;
		this.shield = player.shield || 0;
	}
	player.prototype = {
		constructor : player,
		move : function	(x,y) {
			console.log(x,y);
		}
	}
	clave.typeObjects('player',player);
})(window,document);
