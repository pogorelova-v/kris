//-----------------------------income block

let demo = document.querySelector('.demo');
let demoActive = document.querySelector('.demo-active');
let elHeight = demoActive.offsetHeight;

demo.addEventListener('mouseover', ()=> {
    demoActive.style.transform = 'translateY(' + elHeight + 'px)'
});
demo.addEventListener('mouseout', ()=> {
    demoActive.style.transform = 'translateY(0px)'
});

//---------------------------------slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });