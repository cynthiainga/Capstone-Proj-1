const html = document.getElementsByTagName('html')[0];
const showBtn = document.querySelector('nav .show-menu-btn');
const closeBtn = document.querySelector('nav .close-menu-btn');
const navMenu = document.querySelector('nav .nav-menu');
const navLinks = document.querySelectorAll('nav .nav-menu li');

function showMenu() {
    navMenu.classList.add('open');
    navMenu.classList.remove('hide');
    setTimeout(() => {
      closeBtn.style.display = 'block';
    }, 1000);
    html.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    navMenu.classList.add('hide');
    setTimeout(() => {
      closeBtn.style.display = 'none';
    }, 500);
    html.style.overflow = 'auto';
  }
  
  function directMenu() {
    navMenu.classList.remove('open');
    closeBtn.style.display = 'none';
    html.style.overflow = 'auto';
  }
  
  navLinks.forEach((link) => {
    link.addEventListener('click', directMenu);
  });
  
  showBtn.addEventListener('click', showMenu);
  closeBtn.addEventListener('click', closeMenu);