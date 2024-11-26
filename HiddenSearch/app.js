let input = document.querySelector(".input");
let btn = document.querySelector(".input button");

let currState = 0;

btn.addEventListener('click', ()=> {
    if (currState === 0) {
        input.classList.add('active');
        currState = 1;
    } else {
        input.classList.remove('active');
        currState = 0;
    }
})
