(function ($,_) {
  'use strict';
  clave.modules('Graphics',function () {
    return function (name) {
      module = {
        canvas : _.getElementById(name),
        ctx : canvas.getContext('2d'),
        init : function () {
          context.fillStyle = context.strokeStyle = color;
          context.imageSmoothingEnabled = false;
          context.oImageSmoothingEnabled = false;
          context.mozImageSmoothingEnabled = false;
          context.webkitImageSmoothingEnabled = false;
          return this;
        }
      }
      return module.init();
    }
  });
})(window,document);
