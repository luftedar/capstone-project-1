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

const speakerArray = [
  {
    image: 'img/CengizTural.jpg',
    name: 'Cengiz Tural',
    resume: 'Resume',
    description: 'Drummer of bla bla',
  },
  {
    image: 'img/VolkanOktem.jpg',
    name: 'Volkan Öktem',
    resume: 'Resume',
    description: 'Drummer of bla bla',
  },
  {
    image: 'img/MertIsilay.jpg',
    name: 'Mert Işılay',
    resume: 'Resume',
    description: 'Drummer of bla bla',
  },
  {
    image: 'img/ArikanSirakaya.jpeg',
    name: 'Arikan Sırakaya',
    resume: 'Resume',
    description: 'Drummer of bla bla',
  },
  {
    image: 'img/BurakGurpinar.jpg',
    name: 'Burak Gürpınar',
    resume: 'Resume',
    description: 'Drummer of bla bla',
  },
  {
    image: 'img/AlenKonakoglu.jpg',
    name: 'Alen Konakoğlu',
    resume: 'Bune',
    description: 'Drummer of bla bla',
  },
];

const seeMoreButton = document.querySelector('#see-more');
const cardSpeakers = [...document.querySelectorAll('.card-speaker')];
const moreSpeakers = cardSpeakers.splice(2, cardSpeakers.length);
const footer = document.querySelector('footer');

seeMoreButton.addEventListener('click', () => {
  for (let i = 0; i < moreSpeakers.length; i += 1) {
    if (moreSpeakers[i].classList[3] === 'hide-menu2') {
      moreSpeakers[i].classList.remove('hide-menu2');
      moreSpeakers[i].classList.add('show-menu2');
      seeMoreButton.style.transform = 'translateY(0)';
      footer.style.transform = 'translateY(0)';
    } else {
      moreSpeakers[i].classList.add('hide-menu2');
      moreSpeakers[i].classList.remove('show-menu2');
      seeMoreButton.style.transform = 'translateY(-1800%)';
      footer.style.transform = 'translateY(-180%)'
    }
  }
});

for (let i = 0; i < speakerArray.length; i += 1) {
  window.addEventListener('DOMContentLoaded', () => {
    const speakerImage = document.getElementsByClassName('speaker-image');
    const speakerName = document.getElementsByClassName('speaker-name');
    const speakerResume = document.getElementsByClassName('speaker-resume');
    const speakerDescription = document.getElementsByClassName('speaker-description');

    speakerImage[i].src = speakerArray[i].image;
    speakerName[i].textContent = speakerArray[i].name;
    speakerResume[i].textContent = speakerArray[i].resume;
    speakerDescription[i].textContent = speakerArray[i].description;
  });
}