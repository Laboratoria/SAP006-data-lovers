import { filterDirectorSelected, releaseYear} from './data.js';
import { } from './data.js';
import data from './data/ghibli/ghibli.js';
const animations = data.films

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
  
const melhoresFilmes = document.querySelector('[data-best-score]');
const filmesAntigos = document.querySelector('[data-film-olders]');
const filmesNovos = document.querySelector('[data-films-newest]');
const selectDirector = document.getElementById("director");

function filterDirector(){
    const valueSelected = selectDirector.value
    const selectedMovies = filterDirectorSelected(animations,valueSelected);
    showPosterFilms(selectedMovies);
}

const oldestFilms = (evento) => {

    evento.preventDefault();
        const valueSelected = filmesAntigos.value;
        const filmesVelhosSelecionados = releaseYear(animations, valueSelected);
        showPosterFilms(filmesVelhosSelecionados);
};

const newestFilms = (evento) => {

    evento.preventDefault();
        const valueSelected = filmesNovos.value;
        const filmesNovosSelecionados = releaseYear(animations,valueSelected).reverse();
        showPosterFilms(filmesNovosSelecionados);
};

const bestScore = (evento) => {

    evento.preventDefault();

    //const bestFilmes = filtraScore(data, 90);

    //chamar a funçao filter( como as melhores notas)
    //return console.log(bestFilmes)
};

melhoresFilmes.addEventListener('click', bestScore);
filmesAntigos.addEventListener('click', oldestFilms);
filmesNovos.addEventListener('click', newestFilms);
selectDirector.addEventListener("click", filterDirector);
