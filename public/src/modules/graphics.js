(function ($,_) {
  'use strict';
  clave.modules('Graphics',function () {
    return function (name) {
      var module = {
        canvas : _.getElementById(name),
        ctx : canvas.getContext('2d'),
        init : function () {
          this.ctx.fillStyle = this.ctx.strokeStyle = "#fff";
          this.ctx.imageSmoothingEnabled = false;
          this.ctx.oImageSmoothingEnabled = false;
          this.ctx.mozImageSmoothingEnabled = false;
          //this.ctx.webkitImageSmoothingEnabled = false;
          return this;
        }
      }
      return module.init();
    }
  });
})(window,document);
