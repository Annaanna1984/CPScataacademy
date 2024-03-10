const buttonMenu = document.querySelector('.header__button-menu')
const pageMain = document.querySelector('.page--main')

const sideBar = document.querySelector('.page__sidebar')
const sidebarIconClose = document.querySelector('.icon-close')

const buttonsFeedback = document.querySelectorAll('.icon-chat')
const feedback = document.querySelector('.feedback')
const feedbackIconClose = document.querySelector('.btn-close')

const buttonsCall = document.querySelectorAll('.icon-call')
const call = document.querySelector('.call')
const callIconClose = document.querySelector('.call__icon--close')

const closeIcons = document.querySelectorAll('.icon--close')
const openModals = document.getElementsByClassName('modal--open')

function toggleModal(element) {
  console.log(`toggled ${element.className}`)
  element.classList.toggle('modal--open')
  console.log(openModals.length)
  if (openModals.length < 2) {
    pageMain.classList.toggle('main--opacity')
    pageMain.classList.toggle('main-overflow-hidden')
  }
  if (element !== sideBar) {
    sideBar.classList.add('main--opacity')
  }
}

function closeModal(...elements) {
  elements.forEach(e => e.classList.remove('modal--open'))
}

//sidebar
buttonMenu.addEventListener('click', function(e) {
  toggleModal(sideBar)
  closeModal(feedback, call)
  sideBar.classList.remove('main--opacity')
  e.stopPropagation()
})

//feedback
buttonsFeedback.forEach(b => b.addEventListener('click', function(e) {
  toggleModal(feedback)
  closeModal(sideBar, call)
  e.stopPropagation()
}))

//call
buttonsCall.forEach(b => b.addEventListener('click', function(e) {
  toggleModal(call)
  closeModal(sideBar, feedback)
  e.stopPropagation()
}))

closeIcons.forEach(c => c.addEventListener('click', function(e) {
  const target = e.currentTarget
  switch (target) {
    case sidebarIconClose: {
      toggleModal(sideBar)
      break
    }
    case feedbackIconClose : {
      toggleModal(feedback)
      break
    }
    case callIconClose : {
      toggleModal(call)
      break
    }
  }
  sideBar.classList.remove('main--opacity')
}))

document.addEventListener('click', function(e) {
  if (sideBar.matches('.modal--open') && !e.target.matches('.page__sidebar, .page__sidebar *')) {
    toggleModal(sideBar)
    sideBar.classList.remove('main--opacity')
  }
  if (feedback.matches('.modal--open') && !e.target.matches('.feedback, .feedback *')) {
    toggleModal(feedback)
    sideBar.classList.remove('main--opacity')
  }
  if (call.matches('.modal--open') && !e.target.matches('.call, .call *')) {
    toggleModal(call)
    sideBar.classList.remove('main--opacity')
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal(sideBar, call, feedback)
    pageMain.classList.remove('main-overflow-hidden')
    pageMain.classList.remove('main--opacity')
    sideBar.classList.remove('main--opacity')
  }
})