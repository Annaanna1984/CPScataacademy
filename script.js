let swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            initialSlide: 0,
            spaceBetween: 0,
            enabled: false
        }
    }
});