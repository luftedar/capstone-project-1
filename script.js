const mobileMenuButton = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-nav');
const body = document.querySelector('body');
const mobileLeft = document.querySelector('#mobile-menu-left')
let menuOpen = false;
function toggleMenu(){
  if(mobileMenu.classList.contains('show-menu')) {
  mobileMenu.classList.remove('show-menu');
  mobileLeft.classList.remove('show-menu2');
  }else{  
  mobileMenu.classList.add('show-menu');
  mobileLeft.classList.add('show-menu2');
  }
};

mobileMenuButton.addEventListener('click', toggleMenu);
mobileMenuButton.addEventListener('click', () => {
  if(!menuOpen){
    mobileMenuButton.classList.add('open');
    menuOpen = true;
  }else {
    mobileMenuButton.classList.remove('open');
    menuOpen = false;
  }
});