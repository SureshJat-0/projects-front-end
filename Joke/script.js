const URL = "https://official-joke-api.appspot.com/random_joke";
let jokes = document.querySelector('.jokes');
let btn = document.querySelector('.btn');

async function getJoke() {
    let req = await fetch(URL);
    let data = await req.json();

    let setup = data["setup"];
    let punch = data["punchline"];

    jokes.innerHTML = `${setup}<br>${punch}`;
}

getJoke();

btn.addEventListener('click', () => {
    getJoke();
})
