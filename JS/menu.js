
const header = document.querySelector('.header')
const body = document.querySelector('body')
const btn = document.querySelector('.menu-span')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btn.addEventListener('click', () => {
    if(header.classList.contains('open')) { // Abre o menu
        body.classList.remove('nonscroll')
        header.classList.remove('open')
        fadeElems.forEach((element) => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
        
    }
    else { // Fecha o menu
        body.classList.add('nonscroll')
        header.classList.add('open')
        fadeElems.forEach((element) => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })

}})