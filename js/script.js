var modal = document.querySelector('.modal');
var buttonModalClose = modal.querySelector('.modal-close-button');
var buttonModalOpen = document.querySelector('.contacts-button');
var login = document.querySelector('[name=login]');
var email = document.querySelector('[name=email]');
var input = document.querySelector('.input-field');
var form = document.querySelector('.form');
var map = document.querySelector('.map-popup');
var CloseMapButton = document.querySelector('.close-map-button');
var OpenMapButton = document.querySelector('.contacts-map-button');

buttonModalOpen.addEventListener('click', function(evt) {
 evt.preventDefault();
 modal.classList.add('open-form');
 loginForm.focus();
});

buttonModalClose.addEventListener('click', function(evt) {
 evt.preventDefault();
 modal.classList.remove('open-form');
 form.classList.remove('input-error');
});

form.addEventListener('submit', function (evt) {
  if(!login.value || !email.value) {
     evt.preventDefault();
     input.classList.add('input-error');  
     email.classList.add('input-error'); 
  } 
  
});

OpenMapButton.addEventListener('click', function(evt) {
 evt.preventDefault();
 map.classList.add('open-map-popup');
});

CloseMapButton.addEventListener('click', function(evt) {
 evt.preventDefault();
 map.classList.remove('open-map-popup');
});
