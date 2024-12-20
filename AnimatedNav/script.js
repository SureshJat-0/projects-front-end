let btn = document.querySelector('#toggle');
let nav = document.querySelector('.navbar');

btn.addEventListener('click', () => {
    if (nav.classList.contains('collaps')) {
        nav.classList.remove('collaps');
    } else {
        nav.classList.add('collaps');
    }
    display();
});

function display() {
    let ul = document.querySelector('.navbar ul');
    if (ul.style.display !== 'none') {
        setTimeout(() => {
            ul.style.display = 'none';
        }, 600);
    }
    
    if (ul.style.display === "none") {
        ul.style.display = 'flex';
    }
}
