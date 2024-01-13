import generateJoke from "./generateJoke";
import './styles/main.scss';
import dadJoke from './assets/dad-joke.jpg';

generateJoke();
const dadJokePic = document.querySelector('.dad-joke');
dadJokePic.src = dadJoke;

const jokeBtn = document.querySelector('#jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
