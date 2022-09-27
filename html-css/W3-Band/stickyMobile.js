function closeMenu() {
    var headerNav = document.querySelector('.header__navbar');
    headerNav.classList.toggle('header__navbar--toggle');
    
  }
  
  const menuMobile = document.querySelector('.js-mobile-menu');
  
  if (menuMobile) {
    menuMobile.addEventListener("click", closeMenu);
  };
  