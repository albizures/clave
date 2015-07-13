
(function($,_) {

	$['isUndefined'] = function (value) {
		return typeof value === 'undefined';
	};
	$['clave'] = {
		_typeObjects : {},
		typeObjects : function (name,construct,prot) {
			if(isUndefined(construct) && isUndefined(prot)){
				var newObject = new this._typeObjects[name].construct();
				return newObject;
			}else{
				this._typeObjects[name] = {};
				this._typeObjects[name].construct = construct;
				this._typeObjects[name].construct.prototype = prot;
				return this._typeObjects[name];
			}
		}
	};
})(window,document);
