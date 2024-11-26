let btns = document.querySelectorAll(".btn");
let circles = document.querySelectorAll(".circle");
let progress = document.querySelector(".progress");
let currActive = 1;

// Next btn
btns[1].addEventListener('click', () => {
    currActive++;

    if (currActive >= circles.length) {
        currActive = circles.length;
    }
    update();
});

btns[0].addEventListener('click', () => {
    currActive--;

    if (currActive <= 1) {
        currActive = 1;
    }
    update();
});

function update() {

    // Updating Btns
    if (currActive === 1) {
        btns[0].disabled = true;
    } else if (currActive === circles.length) {
        btns[1].disabled = true;
    } else {
        btns[0].disabled = false;
        btns[1].disabled = false;
    }

    // Updating circles
    circles.forEach((circle, ind) => {
        if (ind < currActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    // Updating progress line
    progress.style.width = ((currActive - 1) / (circles.length - 1)) * 100 + '%';
}