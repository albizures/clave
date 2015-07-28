
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
	$['stateInit'] = [];
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
	Object.prototype.isArray = function () {
		return !isUnd(this.length);
	};
	Object.prototype.is$Object = function () {
		return this instanceof clave.typeObjects('$Object');
	};
	Object.prototype.isState = function () {
		return this instanceof clave.typeObjects('State');
	};
	$['isUnd'] = function (value) {
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
			if(!isUnd(name)){
				if(isUnd(module)){
					return this._modules[name];
				}else if(module.isFunc()){
					this._modules[name] = module();
				}
			}
		},
		objects : function (obj) {
			if(!isUnd(obj)){
				if(obj instanceof this.typeObjects('$Object')){
					this._objets[obj.getId()] = obj;
				}else if(isUnd(obj.name)){
					return this._objets[obj.id];
				}
			}
		},
		init : function() {
			function $Object (type,width,height,postX,postY,anchor) {
				this.width = isUnd(width) ? 0 : width;
				this.height = isUnd(height) ? this.width : height;
				this.postX = isUnd(postX) ? 0 : postX;
				this.postY = isUnd(postY) ? this.postX : postY;
				if(isUnd(anchor)){
					this.anchor = {};
					this.anchor.x = 0;
					this.anchor.y = 0;
				}else{
					this.anchor.x = isUnd(anchor.x) ? 0 : anchor.x;
					this.anchor.y = isUnd(anchor.x) ? this.anchor.y : anchor.y;
				}
				this.setId();
				this.setType(type);
			}
			$Object.prototype = {
				construct : $Object,
				setId : function() {
					if(isUnd(this.id)){
						this.id = clave.getId();
					}
				},
				getId : function () {
					return this.id;
				},
				setType : function (type) {
					if(isUnd(this.type)){
						this.type = type
					}
				},
				getType : function () {
					return this.type;
				}
			}


			function State (name){
				this._elements = {};
				this._name = name;
			}
			State.prototype = {
				add : function (element) {
					if(element.isArray()){
						for(index in element){
							if(element[index].is$Object()){
								this._elements[element[index].getId()] = element[index];
							}else{
								throw new Error('Invalid type element');
							}
						}
					}else if{
						this._elements[element.getId()] = element;
					}else {
						throw new Error('Invalid type element');
					}
				},
				delete : function (elementID) {

				},
				update : function () {

				},
				draw : function () {

				},
				reset : function () {

				},
			};
			this._typeObjects['$Object'] = $Object;
			this._typeObjects['State'] = $Object;
		},
		typeObjects : function (object,construct) {
			if(isUnd(construct)){
				if(object.isString()){
					return this._typeObjects[object];
				}else{
					var obj = new this._typeObjects[object.name](object.props);
					//this.objects(obj);
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
		clave.modules('Main')()
			.states.setCurrent('basicMultiplayer');

		var socket = io.connect();
		socket.on('news', function (data) {
        console.log(data);
    });
	}
})(window,document);
