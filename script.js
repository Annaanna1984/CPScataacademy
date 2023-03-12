let swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
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


const content = document.querySelector('.brands__list');
const button = document.querySelector('.read-more');
button.addEventListener('click', function () {
    content.classList.toggle('content-height');
    button.innerHTML = (button.innerHTML === 'Показать все') ? button.innerHTML = 'Скрыть' : button.innerHTML = 'Показать все';
    button.classList.toggle('read-more--click');
})

