const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    //close menu
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fadeElems.forEach(function (el) {
      el.classList.remove('fade-in')
      el.classList.add('fade-out')
    })
  } else {
    //open menu
    header.classList.add('open')
    body.classList.add('noscroll')
    fadeElems.forEach(function (el) {
      el.classList.remove('fade-out')
      el.classList.add('fade-in')
    })
  }
})
