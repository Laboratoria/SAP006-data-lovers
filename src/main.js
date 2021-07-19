//import ghibli  from './data/ghibli.js';

//let studioGhibli = ghibli.films;
//console.log(studioGhibli);

//const primeirofilme[]= ghibli.films[0]
//console.log(primeirofilme);

import data from "./data/ghibli/ghibli.js";

/////////////////// Importar Filmes ////////////////////

const films = data.films;
const listFilms = document.getElementById("Films")
let exibitionFilms = (cards) => {
    cards.forEach(film => {
    listFilms.innerHTML +=

    `<li class="exibitionFilms"> 
    <img class="card-poster" src="${film.poster}">
    <p class="card-titulo"> title:${film.title}</p> 
    <p class="card-descrição"> description:${film.description}</p>
    <p class="card-diretor"> director:${film.director}</p>
    <p class="card-produtor"> Producer:${film.producer}</p> 
    <p class="card-date"> Release date:${film.release_date}</p>
    <p class="card-score"> rtscore:${film.rt_score}</p>
 </li>`}

      )
}
exibitionFilms(films)

//Personagens

 const charactersList = document.getElementById("Characters")
 const exibitionPeople = (cards) => {
   cards.forEach(people => {
         charactersList.innerHTML +=

    `<li class="cardCharacter">
           <img src=${people.img} class="card-img" alt="ImagemDoPersonagem">
          <p class="card-name"> character:${people.name}<p>
          <p class="card-gender"> Gender:${people.gender}</p>
         <p class="card-age"> Age:${people.age}</p>
         <p class="card-specie"> Specie: ${people.specie}</p>
     </li> `}

     )
 }

for(let film of films){
      let charactersList = film.people
      exibitionPeople(charactersList , film.title)
 }