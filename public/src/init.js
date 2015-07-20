
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
	Object.prototype.isNumber = function(){
		return typeof this.valueOf() === "number";
	}
	Object.prototype.isFunc = function () {
		return typeof this.valueOf() === 'function';
	}
	Object.prototype.isString = function () {
		return typeof this.valueOf() === 'string';
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
				}else if(module.isFunc()){
					this._modules[name] = module();
				}
			}
		},
		objects : function (obj) {
			if(!isUndefined(obj)){
				if(obj instanceof this.typeObjects('$Object')){	
					this._objets[obj.getId()] = obj;
				}else if(isUndefined(obj.name)){
					return this._objets[obj.id];
				}
			}
		},
		init : function() {
			function $Object (type,width,height,postX,postY,anchor) {
				this.width = isUndefined(width) ? 0 : width;
				this.height = isUndefined(height) ? this.width : height;
				this.postX = isUndefined(postX) ? 0 : postX;
				this.postY = isUndefined(postY) ? this.postX : postY;
				if(isUndefined(anchor)){
					this.anchor = {};
					this.anchor.x = 0;
					this.anchor.y = 0;
				}else{
					this.anchor.x = isUndefined(anchor.x) ? 0 : anchor.x;
					this.anchor.y = isUndefined(anchor.x) ? this.anchor.y : anchor.y;
				}
				this.setId();
				this.setType(type);
			}
			$Object.prototype = {
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
						this.type = type
					}
				},
				getType : function () {
					return this.type;
				}
			}
			this._typeObjects['$Object'] = $Object;
		},
		typeObjects : function (object,construct) {
			if(isUndefined(construct)){
				if(object.isString()){
					return this._typeObjects[object];
				}else{
					var obj = new this._typeObjects[object.name](object.props);
					this.objects(obj);
					return obj
				}
			}else{
				this._typeObjects[object] = construct;
				inheritPrototype(this._typeObjects[object],this._typeObjects['$Object']);
				//this._typeObjects[name].construct.prototype = prot;
				return this._typeObjects[object];
			}
		}
	};
	clave.init();
	$.onload = function () {
		clave.modules('Main')();
	}
})(window,document);
