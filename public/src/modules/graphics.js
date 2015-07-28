(function ($,_) {
  'use strict';
  clave.modules('Graphics',function () {
    return function (name) {
      var colors = clave.modules('Colors')();
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
        },
        clear : function (color) {
          color : isUnd(color) ? colors.clean : color;
          this.ctx.save();
          this.ctx.fillStyle = color;
          this.ctx.fillRect(0,0,canvas.width,canvas.height);
          //this.ctx.clearRect(0,0,canvas.width,canvas.height);
          this.ctx.restore();
        }
      }
      return module.init();
    }
  });
})(window,document);
