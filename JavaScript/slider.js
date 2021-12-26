var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  autoHeight: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2500
  },
  
});
