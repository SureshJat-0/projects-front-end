let openBtn = document.querySelector("#open");
let closeBtn = document.querySelector("#close");
let container = document.querySelector(".container");

openBtn.addEventListener('click', ()=> {
    container.classList.add("show-nav");
});

closeBtn.addEventListener('click', ()=> {
    container.classList.remove('show-nav');
})