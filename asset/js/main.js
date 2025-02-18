// NavMenu Sticky

const navElement = document.querySelector('.header-main ');

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 200) {
    navElement.classList.add('sticky-nav');
  } else {
    navElement.classList.remove('sticky-nav');
  }
});

// ==== Toggle Nav

const navtoggle = document.querySelector('.add-toggle');
const menuTogglee = document.querySelector('.menu-toogle');
const closeElement = document.querySelector('.closeElement');

navtoggle.addEventListener('click', (e) => {
  e.preventDefault();
  menuTogglee.classList.add('active');
});

closeElement.addEventListener('click', (e) => {
  e.preventDefault();
  menuTogglee.classList.remove('active');
});

$('.center').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 3,
  arrows: true,
  nextArrow:
    '<button class="nextArrow"><i class="bi bi-arrow-right-short"></i></button>',
  prevArrow:
    '<button class="prevArrow"><i class="bi bi-arrow-left-short"></i></button>',
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});
