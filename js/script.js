// -----------------header section start here---------------------
const header = document.querySelector("[js-header]");
window.addEventListener("scroll", scrollHandler);
function scrollHandler() {
  if (window.screenY > 20) {
    header.classList.add("dddddddddddd")
  } else {
    header.classList.remove("dddddddddddd")
  }
}
// -----------------header section end here---------------------
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
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
