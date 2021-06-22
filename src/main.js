import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
console.log(example, data);



const oldestFilms = (evento) => {

    evento.preventDefault(); 
    //chamar a funçao sort(com filmes mais antigos)
};

const newestFilms = (evento) => {
    
    evento.preventDefault();
    //chamar a funçao sort( com filmes mais recentes)
};

const bestScore = (evento) => {

    evento.preventDefault();
    //chamar a funçao filter( como as melhores notas)
};

const melhoresFilmes = document.querySelector('[data-best-score]');
const filmesAntigos = document.querySelector('[data-film-olders]');
const filmesNovos = document.querySelector('[data-films-newest]');


melhoresFilmes = document.querySelector('click', bestScore);
filmesAntigos.addEventListener('click', oldestFilms);
filmesNovos.addEventListener('click', newestFilms);