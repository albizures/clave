
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
        module = {
          resize : function (event) {

          },
          mainLoop : function () {
            raf(mainLoop);
          },
          init : function () {
            $.addEventListener('resize',resize);
            return this;
          }
        }
        return module.init();
    }
  });

})(window,document);
