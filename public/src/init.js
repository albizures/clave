
(function($,_) {
	'use strict';
	if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {
        }
        F.prototype = o;
        return new F();
    };
	}
	$['inheritPrototype'] = function(child, parent) {
    var copyParent = Object.create(parent.prototype);
    copyParent.constructor = child;
    child.prototype = copyParent;
	}
	$['time'] = function () {
        return new Date().getTime();
  };
	$['rnd'] = function (min, max) {
		return min + Math.random() * (max - min);
  };
	$['isFunc'] = function (value) {
		return typeof value === 'function';
	};
	$['isNumber'] = function (value) {
		return typeof value === 'number';
	};
	$['isUndefined'] = function (value) {
		return typeof value === 'undefined';
	};
	$['clave'] = {
		_typeObjects : {},
		_modules : {},
		_objets : {},
		countId : 0,
		getId : function () {
			return this.countId++;
		},
		modules : function (name,module) {
			if(!isUndefined(name)){
				if(isUndefined(module)){
					return this._modules[name];
				}else if(isFunc(module)){
					this._modules[name] = module();
				}
			}
		},
		init : function() {
			function $Object (type) {
				this.setId();
				this.setType(type);
			}
			$Object.prototype ={
				construct : $Object,
				setId : function() {
					if(isUndefined(this.id)){
						this.id = clave.getId();
					}
				},
				getId : function () {
					return this.id;
				},
				setType : function (type) {
					if(isUndefined(this.type)){
						this.id = type
					}
				},
				getType : function () {
					return this.type;
				}
			}
			this._typeObjects['$Object'] = $Object;
		},
		typeObjects : function (name,construct) {
			if(isUndefined(construct)){
				return function () {
					 Object.create(this._typeObjects[name]);
				}
			}else{
				this._typeObjects[name] = construct;
				inheritPrototype(this._typeObjects[name],clave._typeObjects['$Object']);
				//this._typeObjects[name].construct.prototype = prot;
				return this._typeObjects[name];
			}
		}
	};
	clave.init();
	$.onload = function () {
		clave.modules('Main')();
	}
})(window,document);
