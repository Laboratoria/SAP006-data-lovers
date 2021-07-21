import {order} from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films
const listFilms = document.getElementById("Films")
let exibitionFilms = (cards) => {
     cards.forEach(film => {
          listFilms.innerHTML +=

               `<li class= "exibitionFilms">
    <img class="card-poster" src="${film.poster}">
    <p class= "card-titulo"> title:${film.title}</p>
    <p class= "card-descrição"> description:${film.description}</p> n  nM
    <p class= "card-diretor"> director:${film.director}</p>
    <p class= "card-produtor"> producer:${film.producer}</p>
    <p class= "card-date"> release date:${film.release_date}</p>
    <p class= "card-score"> rtscore:${film.rt_score}</p>
</li>`}

     )
}
exibitionFilms(films)





// Personagens//

// const charactersList = document.getElementById("Characters")
// const exibitionPeople = (cards) => {
//      cards.forEach(people => {
//           charactersList.innerHTML +=

//                `<li class="cardCharacter">
//      <img src=${people.img} class="card-img" alt=ImagemDoPersonagem">
//      <p class="card-name"> Character:${people.name}<p>
//      <p class="card-gender"> Gender:${people.gender}</p>
//      <p class="card-age"> Age:${people.age}</p>
//      <p class="card-specie"> Specie:${people.specie}</p>
//      </li>`}

//      )
// }

// for (let film of films) {
//      let charactersList = film.people
//      exibitionPeople(charactersList, film.title)

// }


//Ordenar AZ-ZA



const orderAZ = (evento) => {
     evento.preventDefault();

     const valueSelected = sortByAZ.value;
     console.log(films)
     const filmsAZ = order(films);
     console.log(filmsAZ)
     exibitionFilms(filmsAZ);

};

const orderZA = (evento) => {
     evento.preventDefault();

     const valueSelected = sortByZA.value;
     
     const filmsZA = order(films);
     
     exibitionFilms(filmsZA);

};
const sortByAZ = document.querySelector('[data-az-order]');
const sortByZA = document.querySelector('[data-za-order]');

sortByAZ.addEventListener('click', orderAZ);
sortByZA.addEventListener('click', orderZA);




