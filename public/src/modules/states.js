(function ($,_) {
	clave.modules('States',function () {
		return function (parent) {
			var states = {},
					currentState;
					function State (){
						this._elements = {};
					}
					State.prototype.add = function (element) {
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
					};
					State.prototype.delete = function (element) {

					};
					State.prototype.update = function () {

					};
					State.prototype.draw = function () {

					}
					State.prototype.reset = function () {
						
					};
			var module = {
				parent : parent,
				add : function (name,state) {
					if(!states[name]){
						states[name] = state;
					}else{
						throw new Error("The state "+ name +" already exist");
					}
					return this.parent;
				},
				update : function () {
					states[currentState].update();
				},
				setCurrent : function (name) {
					if(states[name]){
						currentState = name;
					}else {
						throw new Error("The state "+ name +" doesn't exist yet");
					}
				},
				getCurrent : function () {
					return currentState;
				},
				draw : function () {
					states[currentState].draw();
				}
			};
			return module;
		}
	});
})(window,document);
