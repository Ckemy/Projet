let ColorPalette = function()
{
	this.canvas = document.getElementById('color-palette');
	this.context = this.canvas.getContext('2d');
	this.pickedColor = { red: 0, green : 0, blue: 0};


	this.canvas.addEventListener('click', this.onClick.bind(this));
	this.build();
};

ColorPalette.prototype.build = function()
{

	let gradient;

	gradient.addColorStop(0, 'rgba(255, 0, 0,');
	gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
    gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
    gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
    gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
    gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
    gradient.addColorStop(1,    'rgb(255,   0,   0)');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.createLinearGradient(0, 0, 0, this.canvas.height);
    gradient.addColorStop(0,   'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
    gradient.addColorStop(1,   'rgba(0,     0,   0, 1)');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

};

ColorPalette.prototype.getPickedColor = function()
{
	let palette;
	let rectangle;
	let x, y;

	rectangle = this.canvas.getBoundingClientRect();

	x = event.clientX - rectangle.left;
	y = event.clientY - rectangle.right;

	this.pickedColor.red = palette.data[0];
	this.pickedColor.green = palette.data[1];
	this.pickedColor.blue = palette.data[2];

	$.event.trigger('magical-slate:pick-color');
};