import { filterDirectorSelected, releaseYear, decrescentReleaseYear, rattingScore, filterMovie } from './data.js';
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
          <p class="title-of-film-front"><strong>${item.title}</strong></p>
          <img src="${item.poster}"class="poster-card"><p><br></p>
         </div>
        <div class="flip-card-back">
          <p class="title-of-film"><strong>${item.title}</strong></p>
          <p class="info1"><strong>Director: ${item.director}</p></strong>
          <p class="info2"><strong>Release year: ${item.release_date}</p></strong>
          <p class="info2"><strong>Rating score: ${item.rt_score}</p></strong>
          </div>
          </div>
        </div> `
    }
    document.getElementById("poster-cards").innerHTML = photo;
}
showPosterFilms(animations);

function filterDirector() {
    const valueSelected = selectDirector.value
    const selectedMovies = filterDirectorSelected(animations, valueSelected);
    showPosterFilms(selectedMovies);
}

const oldestFilms = (evento) => {

    evento.preventDefault();
    const valueSelected = oldest.value;
    const oldestSelected = releaseYear(animations, valueSelected);
    showPosterFilms(oldestSelected);
};

const newestFilms = (evento) => {

    evento.preventDefault();
    const valueSelected = newest.value;
    const newestSelected = decrescentReleaseYear(animations, valueSelected);
    showPosterFilms(newestSelected);
};

const bestScore = (evento) => {

    evento.preventDefault();
    const valueSelected = bestFilms.value;
    const bestMoviesSelected = rattingScore(animations, valueSelected);
    showPosterFilms(bestMoviesSelected);
};

const filterByMovie = () => {
    const valueSelected = searchMovie.value
    const movieSelected = filterMovie(animations, valueSelected);
    showPosterFilms(movieSelected)
}

const bestFilms = document.querySelector('[data-best-score]');
const oldest = document.querySelector('[data-film-olders]');
const newest = document.querySelector('[data-films-newest]');
const selectDirector = document.getElementById("director");
const searchMovie = document.getElementById("film-search")

bestFilms.addEventListener('click', bestScore);
oldest.addEventListener('click', oldestFilms);
newest.addEventListener('click', newestFilms);
selectDirector.addEventListener("change", filterDirector);
searchMovie.addEventListener('keypress', filterByMovie);



