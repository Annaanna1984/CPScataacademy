import '../scss/header.scss'
import '../scss/button--menu.scss'
import '../scss/upper-menu.scss'
import '../scss/user-menu.scss'
import '../scss/main.scss'
import '../scss/description.scss'
import '../scss/more--text.scss'
import '../scss/lang.scss'
import '../scss/swiper.scss'
import '../scss/nav.scss'
import '../scss/brands.scss'
import '../scss/read-more.scss'
import '../scss/section__title.scss'
import '../scss/icon.scss'
import '../scss/technique.scss'
import '../scss/order--btn.scss'
import '../scss/price-policy.scss'
import '../scss/form.scss'
import '../scss/container__divider.scss'
import '../scss/price.scss'
import '../scss/footer.scss'
import '../scss/prices--title.scss'
import '../scss/page.scss'
import '../scss/time.scss'
import '../scss/service.scss'
import '../scss/public-rules.scss'
import '../scss/privacy-policy.scss'
import '../scss/logo.scss'
import '../scss/copyright.scss'
import '../scss/email-link.scss'
import '../scss/phone-link.scss'
import '../scss/btn--close.scss'
import '../scss/style.scss'
import '../scss/navigation.scss'
import '../scss/sidebar.scss'
import '../scss/modal.scss'
import '../scss/feedback.scss'
import '../scss/call.scss'
import '../scss/styleJs.scss'


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


const blockContent = document.querySelector('.technique__list');
const buttonBlockContent = document.querySelector('.more-block');
buttonBlockContent.addEventListener('click', function (){
  blockContent.classList.toggle('content-height');
  buttonBlockContent.innerHTML = buttonBlockContent.innerHTML === 'Скрыть' ? 'Показать все': 'Скрыть';
  buttonBlockContent.classList.toggle('read-more--click');
})


const textContent = document.querySelector('.description__text--open');
const buttonTextContent = document.querySelector('.more--text');
const descriptionTextNext = document.querySelector('.description__text--next');
const descriptionTextFull = document.querySelector('.description__text--full');
buttonTextContent.addEventListener('click', function (){
  textContent.classList.toggle('description__text--more');
  descriptionTextNext.classList.toggle('description__text--more');
  descriptionTextFull.classList.toggle('description__text--more');
  buttonTextContent.innerHTML = buttonTextContent.innerHTML === 'Скрыть' ?  'Читать далее': 'Скрыть';
  buttonTextContent.classList.toggle('read-more--click');
})

const buttonMenu = document.querySelector('.button--menu');
const sideBar = document.querySelector('.page__sidebar');
const pageMain =  document.querySelector('.page--main');
buttonMenu.addEventListener('click', function (){
  sideBar.classList.add('modal--open');
  pageMain.classList.add('main--opacity');
  pageMain.classList.add('main-overflow-hidden');
  pageMain.classList.remove('main-overflow-auto');
})

function sidebarClose() {
  sideBar.classList.remove('modal--open');
  pageMain.classList.remove('main--opacity');
  pageMain.classList.remove('main-overflow-hidden');
  pageMain.classList.add('main-overflow-auto');
}

function sidebarCloseClickOutside(e) {
  if(sideBar.classList.contains('modal--open') && !e.target.matches('.page__sidebar, .page__sidebar *')) {
    sidebarClose();
    console.log(1)
  }
}
document.addEventListener('touchstart', sidebarCloseClickOutside);

const iconClose = document.querySelector('.icon--close');
iconClose.addEventListener('click', sidebarClose)

const buttonFeedback = document.querySelector('.icon-feedback');
const feedback = document.querySelector('.feedback');
const btnClose = document.querySelector('.btn--close');
buttonFeedback.addEventListener('click', function (){
  feedback.classList.add('modal--open');
  pageMain.classList.add('main--opacity');
  sideBar.classList.add('main--opacity');
  pageMain.classList.add('main-overflow-hidden');
  sideBar.classList.remove('modal--open');
  pageMain.classList.remove('main-overflow-auto');
})



function feedbackClose() {
  feedback.classList.remove('modal--open');
  pageMain.classList.remove('main--opacity');
  sideBar.classList.remove('main--opacity');
  pageMain.classList.remove('main-overflow-hidden');
  pageMain.classList.add('main-overflow-auto');
}

function feedbackCloseClickOutside(e) {
  if(feedback.classList.contains('modal--open') && !e.target.matches('.feedback, .feedback *')) {
    feedbackClose();
  }
}
document.addEventListener('touchstart', feedbackCloseClickOutside);

btnClose.addEventListener('click', feedbackClose)


const buttonCall = document.querySelector('.icon-call');
const call = document.querySelector('.call');
buttonCall.addEventListener('click', function (){
  call.classList.add('modal--open');
  pageMain.classList.add('main--opacity');
  sideBar.classList.add('main--opacity');
  pageMain.classList.add('main-overflow-hidden');
  sideBar.classList.remove('modal--open');
  pageMain.classList.remove('main-overflow-auto');
})

function callClose() {
  call.classList.remove('modal--open');
  pageMain.classList.remove('main--opacity');
  sideBar.classList.remove('main--opacity');
  pageMain.classList.remove('main-overflow-hidden');
  pageMain.classList.add('main-overflow-auto');
}

function callCloseClickOutside(e) {
  if(call.classList.contains('modal--open') && !e.target.matches('.call, .call *')) {
    callClose();
  }
}
document.addEventListener('touchstart', callCloseClickOutside);

const callIconClose = document.querySelector('.call__icon--close')
callIconClose.addEventListener('click', callClose)




const SidebarIconCall = document.querySelector('.sidebar__icon-call');
SidebarIconCall.addEventListener('click', function (){
  call.classList.add('modal--open');
  pageMain.classList.add('main--opacity');
  sideBar.classList.add('main--opacity');
  pageMain.classList.add('main-overflow-hidden');
  pageMain.classList.remove('main-overflow-auto');
  sideBar.classList.remove('modal--open');
})
const SidebarIconFeedback = document.querySelector('.sidebar__icon-feedback');
SidebarIconFeedback.addEventListener('click', function (){
  feedback.classList.add('modal--open');
  pageMain.classList.add('main--opacity');
  sideBar.classList.add('main--opacity');
  pageMain.classList.add('main-overflow-hidden');
  pageMain.classList.remove('main-overflow-auto');
  sideBar.classList.remove('modal--open');
})
