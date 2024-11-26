let background = document.querySelector(".background");
let count = document.querySelector(".count");

window.addEventListener('load', ()=> {
    background.classList.add("loadImg");
    count.classList.add("loadCount");
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            count.innerText = `${i}%`;
        }, i * 17);
    }
});
