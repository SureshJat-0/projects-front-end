let boxs = document.querySelectorAll(".box");

function checkBox() {

    const windowHeight = window.innerHeight * 4 / 5;
    boxs.forEach((box) => {
        if (box.getBoundingClientRect().top < windowHeight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// Run first time without scroll
checkBox();

window.addEventListener('scroll', checkBox);
