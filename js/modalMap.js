var map = document.querySelector('.map-popup');
var CloseMapButton = document.querySelector('.close-map-button');
var OpenMapButton = document.querySelector('.contacts-map-button');

OpenMapButton.addEventListener('click', function(evt) {
 evt.preventDefault();
 map.classList.add('open-map-popup');
});

CloseMapButton.addEventListener('click', function(evt) {
 evt.preventDefault();
 map.classList.remove('open-map-popup');
});