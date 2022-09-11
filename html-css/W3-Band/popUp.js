function popUpShow() {
  var popup = document.getElementById('modal');
  popup.classList.toggle("modal--open");
  if (popup.classList.contains("modal--open")) {
    console.log("Close)")
  } else {
    console.log("Open");
  }
}

const btns = document.querySelectorAll(".js-btn-modal"); 
const modal = document.querySelector('.js-modal');
const modal_body = document.querySelector('.js-modal-body');
const modal_close = document.querySelectorAll('.js-popup-close');

if (btns) {
  for (btn of btns) {
    btn.addEventListener("click", popUpShow());
  }
};

for (close of modal_close) {
  close.addEventListener("click", popUpShow());
}

modal.addEventListener("click", popUpShow());


modal_body.addEventListener("click", function (e) {
  e.stopPropagation();
});