//import ghibli  from './data/ghibli.js';

//let studioGhibli = ghibli.films;
//console.log(studioGhibli);

//const primeirofilme[]= ghibli.films[0]
//console.log(primeirofilme);

import data from './data/ghibli/ghibli.js';

/////////////////// Importar Filmes ////////////////////

const films = data.films

const listFilms = document.getElementById("Films")
let exibitionFilms = (cards) => { 
    cards.forEach(film => {
    listFilms.innerHTML +=
 
    `<li class="exibitionFilms"> 
    <img class="card-poster" src=" ${film.poster}">
    <p class="card-titulo"> Title: ${film.title} </p> 
    <p class="card-lançamento"> Release date: ${film.release_date} </p>
    <p class="card-descrição"> Description: ${film.description} </p>    
    <p class="card-diretor"> Director: ${film.director} </p>
    <p class="card-producer"> Producer: ${film.producer} </p>
    <p class="card-avaliação"> Score: ${film.rt_score} </p>
</li>`}

    )

}
exibitionFilms(films)