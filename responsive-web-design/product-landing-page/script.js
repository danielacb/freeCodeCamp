window.onscroll = function () {
  this.fixedNav();
};

const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("nav-bar");

function fixedNav() {
  if (window.pageYOffset >= 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

toggle.onclick = function () {
  menu.classList.toggle("on");
  menuIcon.classList.toggle("on");
};

const playVideo = document.getElementById("play-button");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

playVideo.onclick = function () {
  toggleModal();
};

closeModal.onclick = function () {
  toggleModal();
};

function toggleModal() {
  document.body.classList.toggle("modal-open");
  modal.classList.toggle("modal-open");
}
