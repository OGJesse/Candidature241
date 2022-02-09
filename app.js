
// Modal ::::::::::::::::::::::::::::::::::::

const btnmodal = document.querySelector('.btn');
const modalview = document.querySelector('.modal-container');
const close = document.querySelector('.close-modal')


btnmodal.addEventListener('click',() => {

    modalview.classList.toggle('active')
})

close.addEventListener('click',() => {

    modalview.classList.remove('active')
})

