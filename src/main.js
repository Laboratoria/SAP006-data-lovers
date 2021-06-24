import { example, filtraScore } from './data.js';
import data from './data/ghibli/ghibli.js';
console.log(example, data);


// Seçao para trabalhar com a aba Filmes
const oldestFilms = (evento) => {

    evento.preventDefault(); 
    //chamar a funçao ordenaFilmes com filmes mais antigos
};

const newestFilms = (evento) => {
    
    evento.preventDefault();
    //chamar a funçao ordenaFilmes filmes mais antigos usando reverse
};

const bestScore = (evento) => {

    evento.preventDefault();

    const bestFilmes = filtraScore(data, 90);

    //chamar a funçao filter( como as melhores notas)
    return console.log(bestFilmes)
};

const melhoresFilmes = document.querySelector('[data-best-score]');
const filmesAntigos = document.querySelector('[data-film-olders]');
const filmesNovos = document.querySelector('[data-films-newest]');


melhoresFilmes.addEventListener('click', bestScore);
filmesAntigos.addEventListener('click', oldestFilms);
filmesNovos.addEventListener('click', newestFilms);