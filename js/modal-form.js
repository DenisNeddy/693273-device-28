var modal = document.querySelector('.modal');
var buttonModalClose = modal.querySelector('.modal-close-button');
var buttonModalOpen = document.querySelector('.contacts-button');
var loginForm = document.querySelector('.login-input');

buttonModalOpen.addEventListener('click', function(evt) {
 evt.preventDefault();
 modal.classList.add('open-form');
 loginForm.focus();
});

buttonModalClose.addEventListener('click', function(evt) {
 evt.preventDefault();
 modal.classList.remove('open-form');
});

