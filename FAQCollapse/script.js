let boxes = document.querySelectorAll('.box');
let btnOpen = document.querySelectorAll('.btn.open');
let btnClose = document.querySelectorAll('.btn.close');

btnOpen.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let currBox = e.target.parentNode.parentNode;
        currBox.classList.add('active');
    })
})

btnClose.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let currBox = e.target.parentNode.parentNode;
        currBox.classList.remove('active');
    })
})