var modal = document.querySelector('.modal');
var buttonModalClose = modal.querySelector('.modal-close-button');
var buttonModalOpen = document.querySelector('.contacts-button');
var login = document.querySelector('[name=login]');
var email = document.querySelector('[name=email]');
var input = document.querySelector('.input-field');

buttonModalOpen.addEventListener('click', function(evt) {
 evt.preventDefault();
 modal.classList.add('open-form');
 loginForm.focus();
});

buttonModalClose.addEventListener('click', function(evt) {
 evt.preventDefault();
 modal.classList.remove('open-form');
});

form.addEventListener('submit', function (evt) {
  if(!login.value || !email.value) {
     evt.preventDefault();
     input.classList.remove('input-error');
     
     input.classList.add('input-error');   
  }   
 
});
