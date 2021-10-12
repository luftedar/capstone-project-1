const mobileMenuButton = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-nav');
const body = document.querySelector('body');
const mobileLeft = document.querySelector('#mobile-menu-left');
const mobileMenuLink = document.querySelectorAll('#mobile-nav li a');
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

function hamburgerAnimation(){
  if(!menuOpen){
    mobileMenuButton.classList.add('open');
    menuOpen = true;
  }else {
    mobileMenuButton.classList.remove('open');
    menuOpen = false;
  }
}

mobileMenuLink.forEach((menuItem) => {
  menuItem.addEventListener('click',toggleMenu);
  menuItem.addEventListener('click',hamburgerAnimation)
});
mobileMenuButton.addEventListener('click', toggleMenu);

mobileMenuButton.addEventListener('click', hamburgerAnimation);

let speakerArray = [
  {
    image: 'img/CengizTural.jpg',
    name: 'Cengiz Tural',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  },
  {
    image: 'img/CengizTural.jpg',
    name: 'Cengiz Tural',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  },
  {
    image: 'img/CengizTural.jpg',
    name: 'Cengiz Tural',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  },
  {
    image: 'img/CengizTural.jpg',
    name: 'Cengiz Tural',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  },
  {
    image: 'img/CengizTural.jpg',
    name: 'Cengiz Tural',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  },
  {
    image: 'img/AlenKonakoglu.jpg',
    name: 'Deneme',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  }
]

const seeMoreButton = document.querySelector('#see-more');
const cardSpeakers = [...document.querySelectorAll('.card-speaker')];
const moreSpeakers = cardSpeakers.splice(2,cardSpeakers.length);
console.log(moreSpeakers[0].classList);

seeMoreButton.addEventListener('click', () => {
  for(let i = 0; i < moreSpeakers.length;i+=1){
    if(moreSpeakers[i].classList[1] === 'd-none') {
      moreSpeakers[i].classList.remove('d-none');
      moreSpeakers[i].classList.add('d-flex');
    }else {
      moreSpeakers[i].classList.add('d-none');
      moreSpeakers[i].classList.remove('d-flex');
    }
  }
});