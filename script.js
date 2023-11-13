const burger = document.querySelector('#adaptive-menu')
const menu = document.querySelector('#heaer-menu')
const cross = document.querySelector('#cross')

burger.addEventListener('click', () => {
  menu.classList.add('heaer-menu__active')
})

cross.addEventListener('click', () => {
  menu.classList.remove('heaer-menu__active')
})