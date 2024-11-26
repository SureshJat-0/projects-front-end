let labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, ind) => { return `<span style="transition-delay: ${ind * 50}ms">${letter}</span>` })
        .join('')
});
