

var newCanvas = function (width,height,color) {
	var canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;

	var context = e.getContent('2d');
	context.canvas = canvas;
	context.fillStyle = color;
	return {
		canvas : canvas,
		context : context
	}
}
