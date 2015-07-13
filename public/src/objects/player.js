

(function($,_) {
	var construct = function (name,live,shield,type) {
		clave._typeObjects['$Object'].call(this,type);
		this.name = name || 'player' + this.id;
		this.live = live || 10;
		this.shield = shield || 0;
	}
	construct.prototype = {
		constructor : construct,
		move : function	(x,y) {
			console.log(x,y);
		}
	}
	clave.typeObjects('player',construct);
})(window,document);
