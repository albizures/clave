(function ($,_) {
	clave.modules('States',function () {
		return function (parent) {
			var states = {},
					currentState;
			var module = {
				parent : parent,
				add : function (state) {
					if(isUnd(state) && state.isState()){
						if(state.isArray()){
							for(index in state){
								if(!states[state[index]._name]){
									states[state[index]._name] = state;
								}else{
									throw new Error("The state "+ name +" already exist");
								}
							}
						}else if(!states[state._name]){
							states[state._name] = state;
						}else{
							throw new Error("The state "+ name +" already exist");
						}

					}else{
						throw new Error("It's not a type State");
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
