

(function($,_) {
	'use strict';
	var $state = function (player) {
	
	}
	player.prototype = {
		constructor : player,
		move : function	(x,y) {
			console.log(x,y);
		}
	}
	clave.typeObjects('player',player);
})(window,document);
