var buttonWarranty = document.querySelector(".button-warranty");

buttonWarranty.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonWarranty.classList.add("services-button-active");
})