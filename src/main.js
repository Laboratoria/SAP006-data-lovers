import { order, decreasingOrder, DirectorSelected } from './data.js';
import data from './data/ghibli/ghibli.js';


const listFilms = document.getElementById("Films")
const clean = () => {
     listFilms.innerHTML = "";
}
const films = data.films

const exibitionFilms = (films) => {
     clean()
     films.forEach(film => {
          listFilms.innerHTML +=

               `<li class= "exibitionFilms">
    <img class="card-poster" src="${film.poster}">
    <p class= "card-titulo"> title:${film.title}</p>
    <p class= "card-descrição"> description:${film.description}</p> 
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

// const clean= ()=>{
//      cards.innerHTML="";
// }

const orderAZ = (evento) => {
     evento.preventDefault();
const filmsAZ = order(films);
exibitionFilms(filmsAZ);

};

const orderZA = (evento) => {
     evento.preventDefault();
 const filmsZA = decreasingOrder(films);
exibitionFilms(filmsZA);

};



function filterDirector() {
     const valueSelected = selectDirector.value
     const selectedFilms = DirectorSelected(films, valueSelected);
     exibitionFilms(selectedFilms);
}
const sortByAZ = document.querySelector('[data-az-order]');
const sortByZA = document.querySelector('[data-za-order]');

sortByAZ.addEventListener('click', orderAZ);

sortByZA.addEventListener('click', orderZA);

const selectDirector = document.getElementById("director");

selectDirector.addEventListener("change", filterDirector);