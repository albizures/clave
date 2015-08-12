
(function ($,_) {
  'use strict';
  clave.modules('Main',function () {
    return function () {
        var graphics = clave.modules('Graphics')('canvas');
        var module = {
          resize : function (event) {

          },
          mainLoop : function () {

            //graphics.clear();
          },
          preInit : function () {
            $.addEventListener('resize',this.resize);
            this.mainLoop();
            this.states = clave.modules('States')(this);
            console.timeEnd('init');
            return this;
          },
          init : function () {
            MainLoop.setUpdate(this.states.update).setDraw(this.states.draw).setEnd(this.states.end).start();
            return this;
          }
        }
        return module.preInit();
    }
  });

})(window,document);
