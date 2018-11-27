'use strict'

let index;
let photos;
let total;

function onClick(){
	let selectedPhotos;

	this.classList.toggle('selected');

	selectedPhotos = document.querySelectorAll('.photo-list li.selected');

	total.textContent = selectedPhotos.length;
}

photo = document.querySelectorAll('.photo-list li');
total = document.querySelector('#total em');

for(index = 0; index < photos.length; index++)
{
	photo[index]addEventListener('click', onClick);
}