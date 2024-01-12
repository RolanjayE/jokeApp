
import { URL } from './url.js';

const btn = document.getElementById('btn');

async function jokeRandom() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const jokeElement = document.getElementById('joke');
        jokeElement.textContent = ` ${data.joke}`;
    } catch (error) {
        console.log('error ----------------');
        console.log(error);
    }
}

btn.addEventListener('click', jokeRandom);
jokeRandom();
