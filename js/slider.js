var paginationButtons = document.querySelectorAll(".pagination-button");
var slider = document.querySelectorAll(".slider-item")



paginationButton[0].addEventListener("click", function(evt) {
  for(let slader of sliders) {
  evt.preventDefault();
  slider.classList.toggle("open-slider");
  }
});

paginationButton[1].addEventListener("click", function(evt) {
  evt.preventDefault();
  slider[0].classList.remove("open-slider");
  slider[1].classList.add("open-slider");
});

paginationButton[2].addEventListener("click", function(evt) {
  evt.preventDefault();
  slider[1].classList.remove("open-slider");
  slider[2].classList.add("open-slider");
});
