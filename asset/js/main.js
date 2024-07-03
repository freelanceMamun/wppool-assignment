// NavMenu Sticky

const navElement = document.querySelector('.header-main');

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
