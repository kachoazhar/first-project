// -----------------header section start here---------------------
const header = document.querySelector("[js-header]");
window.addEventListener("scroll", scrollHandler);
function scrollHandler() {
  window.pageYOffset > 20 ? header.classList.add("postion-sticky") : header.classList.remove("postion-sticky")
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
