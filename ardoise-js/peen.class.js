let Pen = function()
{
	this.color = 'black';
	this.size = 1;
};

Pen.prototype.configure = function(slateCanvasContext)
{
	slateCanvasContext.strokeStyle = this.color;
	slateCanvasContext.lineWidth = this.size;
};

Pen.prototype.setColor = function(color)
{
	this.color =color;
};

Pen.prototype.setColorAsRgb =function(red, green, blue)
{
	this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
};

Pen.prototype.setSize = function(size)
{
	this.size = size;
};