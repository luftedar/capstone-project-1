const mobileMenuButton = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-nav');
const mobileLeft = document.querySelector('#mobile-menu-left');
const mobileMenuLink = document.querySelectorAll('#mobile-nav li a');
let menuOpen = false;
function toggleMenu() {
  if (mobileMenu.classList.contains('show-menu')) {
    mobileMenu.classList.remove('show-menu');
    mobileLeft.classList.remove('show-menu2');
  } else {
    mobileMenu.classList.add('show-menu');
    mobileLeft.classList.add('show-menu2');
  }
}

function hamburgerAnimation() {
  if (!menuOpen) {
    mobileMenuButton.classList.add('open');
    menuOpen = true;
  } else {
    mobileMenuButton.classList.remove('open');
    menuOpen = false;
  }
}

mobileMenuLink.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
  menuItem.addEventListener('click', hamburgerAnimation);
});
mobileMenuButton.addEventListener('click', toggleMenu);

mobileMenuButton.addEventListener('click', hamburgerAnimation);