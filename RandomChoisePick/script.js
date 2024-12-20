let input = document.querySelector('#input');
let output = document.querySelector('.output');
let index;

function getRandomNum() {
    let numSpan = output.children.length;
    return Math.floor(Math.random() * numSpan) + 1;
}

input.addEventListener('input', (e) => {
    let val = e.target.value;
    let array = val.split(',').map((el) => {
        return `<span class="span">${el.replaceAll(' ', '')}</span>`;
    }).join('');

    output.innerHTML = array;

});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        index = 0;
        getRandomSpan();
        input.blur();
        e.target.value = null;
    }
});

function getRandomSpan() {

    let currSpan = document.querySelector(`.output .span:nth-child(${getRandomNum()})`);
    currSpan.classList.add('highlight');

    setTimeout(() => {
        index++;
        if (index < 30) {
            currSpan.classList.remove('highlight');
            getRandomSpan();
        }
    }, 100);
}
