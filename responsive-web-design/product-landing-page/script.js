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
