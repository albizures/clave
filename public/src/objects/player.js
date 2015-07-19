

(function($,_) {
	var construct = function (player) {
		player = isUndefined(player)? {} : player;
		clave.typeObjects('$Object').call(this,'player',player.width,player.height,player.postX,player.postY,player.anchor);
		this.name = player.name || 'player' + this.id;
		this.live = player.live || 10;
		this.shield = player.shield || 0;
	}
	construct.prototype = {
		constructor : construct,
		move : function	(x,y) {
			console.log(x,y);
		}
	}
	clave.typeObjects('player',construct);
})(window,document);
