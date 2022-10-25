const button = document.querySelector(".modale-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOpen = document.querySelector(".open-modale");
const modalClose = document.querySelector(".part-modale");

button.addEventListener("click", function () {
  modalOpen.classList.add("open-modale");
});
closeBtn.addEventListener("click", function () {
  modalClose.classList.remove("open-modale");
});
