import { filterDirectorSelected, releaseYear, order} from './data.js';
import { } from './data.js';
import data from './data/ghibli/ghibli.js';
const animations = data.films
const characters = data.films.reduce(function(chars, film){ 
            
    // [...chars, ...film.people]
    return chars.concat(film.people)

}, [])

var counter = 1;
       setInterval(function(){
           document.getElementById('radio' + counter).checked = true;
           counter++;
           if(counter >6){
               counter = 1;
           }
       },4500);

//console.log(characters)
const alphabeticOrderAz = document.querySelector('[data-az-order]');
const alphabeticOrderZa = document.querySelector('[data-za-order]');

const orderAz = (evento) => {
    evento.preventDefault();
    const valueSelected = alphabeticOrderAz.value;
    const azSelected = order(characters, valueSelected);
    console.log(azSelected);//aqui no lugar de console.log chamar showCharacters;
}

const orderZa = (evento) => {
    evento.preventDefault();
    const valueSelected = alphabeticOrderZa.value;
    const zaSelected = order(characters, valueSelected).reverse();
    console.log(zaSelected);
    
}
alphabeticOrderAz.addEventListener("click", orderAz);
alphabeticOrderZa.addEventListener("click", orderZa); 

const newestFilms = (evento) => {

    evento.preventDefault();
        const valueSelected = filmesNovos.value;
        const filmesNovosSelecionados = releaseYear(animations,valueSelected).reverse();
        showPosterFilms(filmesNovosSelecionados);
};



/*
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
};
//showCharacters(characters);

const alphabeticOrder = document.querySelector('[menu-order]');
const personagensFemininos = document.querySelector('[data-female-character]');    
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

const femaleCharacters = () => {

    
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


melhoresFilmes.addEventListener('click', bestScore);
filmesAntigos.addEventListener('click', oldestFilms);
filmesNovos.addEventListener('click', newestFilms);
selectDirector.addEventListener("click", filterDirector);





Aqui tentando dia 27/06:
function filmesCrescent(animations, valueSelected){
    if(valueSelected =filmesAntigos.value) {
        const filmesVelhosSelecionados = releaseYear(animations, valueSelected);
         return showPosterFilms(filmesVelhosSelecionados);
    } else if(valueSelected =filmesNovos.value ) {
        const filmesNovosSelecionados = releaseYear(animations, valueSelected).reverse();
        return showPosterFilms(filmesNovosSelecionados);
    }
}

 Dia 25/06
function filterDirector() {
    const directorSelected = directorSelect.value
    const selectedDirector = selectDirector(animations, directorSelected)
    showPosterFilms(selectedDirector);
}

//testar para gênero :
function showFemale () {
const especieSelecionada = people.filter(personagem => personagem.gender == "Female");
especieSelecionada.forEach(personagem => {showPoster});

} 

console.log(animations.sort((a,b)=>(a.rt_score > b.rt_score ? 1:-1)))

animations.forEach(function(date){
  console.log(date.release_date);
}); */ 