const content = document.querySelector('.brands__list')
const button = document.querySelector('.read-more')
const blockContent = document.querySelector('.technique__list')
const buttonBlockContent = document.querySelector('.more-block')
const textContent = document.querySelector('.description__text--open')
const buttonTextContent = document.querySelector('.more-text')
const descriptionTextNext = document.querySelector('.description__text--next')
const descriptionTextFull = document.querySelector('.description__text--full')

function toggleClass(toggleClass, ...elementArr) {
  elementArr.forEach(e => e.classList.toggle(toggleClass))
}

button.addEventListener('click', function(event) {
  event.preventDefault()
  const hasClass = content.matches('.content-height')
  toggleClass('content-height', content)
  button.textContent = hasClass ? 'Показать всё' : 'Скрыть'
  toggleClass('read-more--click', button)
})


buttonBlockContent.addEventListener('click', function(event) {
  event.preventDefault()
  const hasClass = blockContent.matches('.content-height')
  toggleClass('content-height', blockContent)
  buttonBlockContent.textContent = hasClass ? 'Показать всё' : 'Скрыть'
  toggleClass('read-more--click', buttonBlockContent)
})


buttonTextContent.addEventListener('click', function(event) {
  event.preventDefault()
  const hasClass = textContent.matches('.description__text--more')
  toggleClass('description__text--more', textContent, descriptionTextFull, descriptionTextNext)
  buttonTextContent.textContent = hasClass ? 'Читать далее' : 'Скрыть'
  toggleClass('read-more--click', buttonTextContent)
})
