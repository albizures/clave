
(function ($,_) {
  'use strict';
  clave.modules('Main',function () {
    return function () {
      var raf = (function () {
        return $.requestAnimationFrame ||
          $.webkitRequestAnimationFrame ||
          $.mozRequestAnimationFrame ||
          $.msRequestAnimationFrame ||
          $.oRequestAnimationFrame ||
          function (n) {$.setTimeout(n, 1000 / 60);}
        }()),
        graphics = clave.modules('Graphics')('canvas');
        var module = {
          resize : function (event) {

          },
          mainLoop : function () {
            raf(module.mainLoop);
            graphics.clear();
          },
          init : function () {
            $.addEventListener('resize',this.resize);
            this.mainLoop();
            this.states = clave.modules('States')(this);
            console.timeEnd('init');
            return this;
          }
        }
        return module.init();
    }
  });

})(window,document);
