let Slate = function(pen)
{
	this.canvas = document.getElementById('slate');
	this.context = this.canvas.getContext('2d');
	this.currentLocation = null;
	this.isDrawing = false;
	this.pen = pen;

	this.canvas.addEventListener('mousedown',  this.onMouseDown.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    this.canvas.addEventListener('mousemove',  this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup',    this.onMouseUp.bind(this));
};


Salte.protoype.clear = function()
{
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};


Slate.prototype.getMouseLocation = function(event)
{
	let location;
	let rectangle;

	rectangle = this.canvas.getBoundingClientRect();

	location = 
	{
		x: event.clientX - rectangle.left,
		y: event.clientY - rectangle.top
	};

	return location;
};


Slate.prototype.onMouseLeave = function()
{
	this.isDrawing = false;
};

Slate.prototype.onMouseMove = function(event)
{
	let location;
	location = this.getMouseLocation(event);

	if(this.isDrawing == true)
	{
		this.pen.configure(this.context);
		this.context.beginPath();
		this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
        this.context.lineTo(location.x, location.y);
        this.context.stroke();
        this.currentLocation = location;
	}
};

Slate.prototype.onMouseUp = function()
{
	this.isDrawing = false;
};
