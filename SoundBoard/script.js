let sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let container = document.querySelector('.container');
let buttons = document.querySelector('.buttons');

sounds.forEach((sound) => {
    let newBtn = document.createElement('button');
    newBtn.innerText = sound;
    newBtn.classList.add('btn');
    buttons.append(newBtn);

    newBtn.addEventListener('click', () => {
        let currSound = document.getElementById(sound);

        stopOtherSounds();
        currSound.play();
    })
})

function stopOtherSounds() {
    sounds.forEach((sound) => {
        let currSound = document.getElementById(sound);
        currSound.pause();
        currSound.currentTime = 0;
    })
}