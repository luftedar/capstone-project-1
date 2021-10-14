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

const desktopNavLinkArray = [...document.querySelectorAll('.normal-elements a')]
const desktopAbout = desktopNavLinkArray[0];
const desktopProgram = desktopNavLinkArray[1];
const desktopJoin = desktopNavLinkArray[2];
const desktopSponsor = desktopNavLinkArray[3];
const desktopNews = desktopNavLinkArray[4];

const mobileNavLinkArray = [...document.querySelectorAll('#mobile-nav li a')];
const mobileAbout = mobileNavLinkArray[1];
const mobileProgram = mobileNavLinkArray[2];
const mobileJoin = mobileNavLinkArray[3];
const mobileSponsor = mobileNavLinkArray[4];
const mobileNews = mobileNavLinkArray[5];
const urlChecker = window.location.href.split("").splice(52,5).join("");

function linkStyler(x){
  x.style.color = '#ec5242';
  x.style.fontWeight = '800';
  x.style.pointerEvents = 'none';
  x.style.cursor = 'default';
}

if(urlChecker==='about'){
  linkStyler(desktopAbout);
  linkStyler(mobileAbout);
}

if(urlChecker==='join.'){
  linkStyler(desktopJoin);
  linkStyler(mobileJoin);
}

if(urlChecker==='news.'){
  linkStyler(desktopNews);
  linkStyler(mobileNews);
}

if(urlChecker==='index'){
  linkStyler(mobileHome);
}