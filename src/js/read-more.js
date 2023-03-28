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
