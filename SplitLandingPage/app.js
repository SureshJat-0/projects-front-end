let container = document.querySelector(".container");
let splitLeft = document.querySelector('.split.left');
let splitRight = document.querySelector('.split.right');

splitLeft.addEventListener("mouseenter", () => container.classList.add('split-left'));
splitLeft.addEventListener("mouseleave", () => container.classList.remove('split-left'));

splitRight.addEventListener("mouseenter", () => container.classList.add('split-right'));
splitRight.addEventListener("mouseleave", () => container.classList.remove('split-right'));
