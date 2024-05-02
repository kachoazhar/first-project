const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    centeredSlides: true,
    slidesPerView:1,
    grabCursor: true,
    freeMode: false,
    loop: false,
    mousewheel: false,
    keyboard: {
      enabled: true
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: false
    },  
  });
  