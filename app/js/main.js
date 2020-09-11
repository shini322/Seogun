$('.select').niceSelect();

// Открытие бургер-меню

const burgetButton = document.querySelector('.nav-toggle'),
      menu = document.querySelector('.menu');
burgetButton.addEventListener('click', (e)=>{
  burgetButton.classList.toggle('opened');
  menu.classList.toggle('active');
});


