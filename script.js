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
    name: 'Volkan Öktem',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  },
  {
    image: 'img/CengizTural.jpg',
    name: 'Mert Işılay',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  },
  {
    image: 'img/CengizTural.jpg',
    name: 'Arıkan Sırakaya',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  },
  {
    image: 'img/CengizTural.jpg',
    name: 'Burak Gürpınar',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  },
  {
    image: 'img/AlenKonakoglu.jpg',
    name: 'Alen Konakoğlu',
    resume: 'Resume',
    description: 'Drummer of bla bla'
  }
]

const seeMoreButton = document.querySelector('#see-more');
const cardSpeakers = [...document.querySelectorAll('.card-speaker')];
const moreSpeakers = cardSpeakers.splice(2,cardSpeakers.length);

seeMoreButton.addEventListener('click', () => {
  for(let i = 0; i < moreSpeakers.length;i+=1){
    if(moreSpeakers[i].classList[3] === 'hide-menu2') {
      moreSpeakers[i].classList.remove('hide-menu2');
      moreSpeakers[i].classList.add('show-menu2');
      seeMoreButton.style.transform = 'translateY(0)'
    }else {
      moreSpeakers[i].classList.add('hide-menu2');
      moreSpeakers[i].classList.remove('show-menu2');
      seeMoreButton.style.transform = 'translateY(-4800%)'
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  for ( let i = 0; i < speakerArray.length ; i += 1) {
    const speakerImage = document.querySelector('.speaker-image');
    const speakerName = document.querySelector('.speaker-name');
    const speakerResume = document.querySelector('.speaker-resume');
    const speakerDescription = dcoument.querySelector('.speaker-description');

    speakerImage.src = speakerArray[i].image;
    speakerName.textContent = speakerArray[i].name;
    speakerResume.textContent = speakerArray[i].resume;
    speakerDescription.textContent = speakerArray[i].description;
  }
});