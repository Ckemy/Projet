'use strict'

let button;
let rectangle;

function onClickButton()
{

rectangle.classList.toggle('hide');

}

function OnDoubleClick()
{
rectangle.classList.toggle('good');
}

function onMoutOut()
{
	rectangle.classList.remove('good');
	rectangle.classList.remove('important');
}

function onMouseOver()
{
	rectangle.classList.add('important');
}

document.addEventListener('DOMContentLoaded', function()
{
/*CODE PRINCIPAL*/

button = document.getElementById('toggle-rectangle');
rectangle = document.querySelector('.rectangle');

button.addEventListener('click', onClickButton);

rectangle.addEventListener('mouseout', onMoutOut);
rectangle.addEventListener('mouseover', onMouseOver);

rectangle.addEventListener('dblclick', OnDoubleClick);
});