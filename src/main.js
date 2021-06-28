import { example } from './data.js';
import {  } from './data.js';
import data from './data/ghibli/ghibli.js';
const animations = data.films
const characters = data.films.people

//console.log(animations.sort((a,b)=>(a.rt_score > b.rt_score? 1:-1)))

function showPosterFilms(animations) {
    let photo = "";
    for (let item of animations) {
        photo += `
        <div class="flip-card">
        <div class="flip-card-inner">
         <div class="flip-card-front">
          <p class="title-of-film"><strong>${item.title}</strong></p>
          <img src="${item.poster}"class="poster-card"><p><br></p>
         </div>
        <div class="flip-card-back">
          <p class="info"><strong>Diretor: ${item.director}</p></strong>
          <p><strong>Lançamento: ${item.release_date}</p></strong>
          <p><strong>Avaliação: ${item.rt_score}</p></strong>
          </div>
          </div>
        </div> `
    }
    document.getElementById("poster-cards").innerHTML = photo;
}

showPosterFilms(animations);

function showCharacters(a) {
    let people = "";
    for (let item of a) {
        people += `
        <div class="flip-card">
        <div class="flip-card-inner">
         <div class="flip-card-front">
          <p class="title-of-film"><strong>${item.name}</strong></p>
          <img src="${item.img}"class="poster-card"><p><br></p>
         </div>
        <div class="flip-card-back">
          <p class="title-of-film"><strong>Nome:${item.name}</strong></p>
          <p class="info"><strong>Idade: ${item.age}</p></strong>
          <p><strong>Gênero: ${item.gender}</p></strong>
          <p><strong>Espécie: ${item.specie}</p></strong>
          </div>
          </div>
        </div> `
    }
    document.getElementById("poster-people").innerHTML = people;
}

const oldestFilms = (evento) => {

    evento.preventDefault();
    //chamar a funçao sort(com filmes mais antigos)
};

const newestFilms = (evento) => {


    evento.preventDefault();
    
    //chamar a funçao ordenaFilmes filmes mais antigos usando reverse
};

const bestScore = (evento) => {

    evento.preventDefault();

    //const bestFilmes = filtraScore(data, 90);

    //chamar a funçao filter( como as melhores notas)
    //return console.log(bestFilmes)
};

const femaleCharacters = () => {

    showCharacters(characters);
}

/*
const filmesScores = rattingScore();

const bestFilmes = showPosterFilms(filmesScores);


const filtrando = filtraScore(animations, 70);

const bestFilmes = showPosterFilms(filtrando);

//ordenar

//const filtro = filtraScore(showPosterFilmes())
//const apresentaFilmes = showPosterFilms(bestFilmes)

//chamar a funçao filter( como as melhores notas)

document.getElementById("poster-cards").innerHTML = bestFilmes;

//return console.log(bestFilmes)
const selectDirector = () => {
    
    let diretorSelecionado = "";

    for( let i = 0; i == a; i++) {
        if (diretorSelecionado === a){

        }
    
    
    }

 const selecionaDiretor = document.querySelector('[data-director]');
 selecionaDiretor.addEventListener('click', selectDirector);
};
*/

const personagensFemininos = document.querySelector('[data-female-character]')
const melhoresFilmes = document.querySelector('[data-best-score]');
const filmesAntigos = document.querySelector('[data-film-olders]');
const filmesNovos = document.querySelector('[data-films-newest]');


personagensFemininos.addEventListener('click', femaleCharacters);
melhoresFilmes.addEventListener('click', bestScore);
filmesAntigos.addEventListener('click', oldestFilms);
filmesNovos.addEventListener('click', newestFilms);
