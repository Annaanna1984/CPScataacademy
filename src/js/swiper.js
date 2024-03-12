import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      initialSlide: 0,
      spaceBetween: 0,
      enabled: false
    }
  }
})