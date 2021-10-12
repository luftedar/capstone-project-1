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
    resume: 'Drummer of Voice of Turkey and Gülşen',
    description: 'Studio drummer, played with many singers and bands',
  },
  {
    image: 'img/VolkanOktem.jpg',
    name: 'Volkan Öktem',
    resume: 'Drummer of Tarkan',
    description: 'Studio drummer, loves playing Jazz. Also records video sessions on YouTube',
  },
  {
    image: 'img/MertIsilay.jpg',
    name: 'Mert Işılay',
    resume: 'Drummer of Mehmet Erdem',
    description: 'Gives drum lessons, played many singers and bands',
  },
  {
    image: 'img/ArikanSirakaya.jpeg',
    name: 'Arikan Sırakaya',
    resume: 'Drummer of Hande Yener',
    description: 'Music producer, recorder, studio drummer. Played many singers and bands',
  },
  {
    image: 'img/BurakGurpinar.jpg',
    name: 'Burak Gürpınar',
    resume: 'Currently not playing with a specific band',
    description: 'Legendary drummer of the Kurban. After disband of the Kurban played with various rock bands',
  },
  {
    image: 'img/AlenKonakoglu.jpg',
    name: 'Alen Konakoğlu',
    resume: 'Currently not playing with a specific band',
    description: 'Music producer, recorder, studio drummer. Former drummer of Duman',
  },
];

const seeMoreButton = document.querySelector('#see-more');
const cardSpeakers = [...document.querySelectorAll('.card-speaker')];
const moreSpeakers = cardSpeakers.splice(2, cardSpeakers.length);
const footer = document.querySelector('footer');
const arrow = document.querySelector('#see-more span')

seeMoreButton.addEventListener('click', () => {
  for (let i = 0; i < moreSpeakers.length; i += 1) {
    if (moreSpeakers[i].classList[moreSpeakers.length] === 'hide-menu2') {
      moreSpeakers[i].classList.remove('p-fixed')
      moreSpeakers[i].classList.remove('hide-menu2');
      moreSpeakers[i].classList.add('show-menu2');
      seeMoreButton.style.transform = 'translateY(0)';
      seeMoreButton.innerHTML = 'Less<span>&UpArrow;</span>'
    } else {
      moreSpeakers[i].classList.add('p-fixed');
      moreSpeakers[i].classList.add('hide-menu2');
      moreSpeakers[i].classList.remove('show-menu2');
      seeMoreButton.style.transform = 'translateY(-50%)';
      seeMoreButton.innerHTML = 'More<span>&DownArrow;</span>'
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