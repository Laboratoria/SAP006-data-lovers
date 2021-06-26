import { filterDirectorSelected} from './data.js';
import { } from './data.js';
import data from './data/ghibli/ghibli.js';
const animations = data.films

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

/* Dia 25/06
function filterDirector() {
    const directorSelected = directorSelect.value
    const selectedDirector = selectDirector(animations, directorSelected)
    showPosterFilms(selectedDirector);
}
/*function showFemale () {
const especieSelecionada = people.filter(personagem => personagem.gender == "Female");
especieSelecionada.forEach(personagem => {showPoster});

} */ 
const selectDirector = document.getElementById("director");
selectDirector.addEventListener("click", filterDirector);

function filterDirector(){
    const valueSelected = selectDirector.value
    const selectedMovies = filterDirectorSelected(animations,valueSelected);
    showPosterFilms(selectedMovies);
}

