import {order, decreasingOrder, DirectorSelected , orderCharacters , decreasingOrderCharacters ,filterByGender} from './data.js';
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

const charactersList = document.getElementById("Characters")

const exibitionPeople = (people) => {

     people.forEach(people => {
          charactersList.innerHTML +=

               `<li class="cardCharacter">
     <img src=${people.img} class="card-img" alt=ImagemDoPersonagem">
     <p class="card-name"> Character:${people.name}<p>
     <p class="card-gender"> Gender:${people.gender}</p>
     <p class="card-age"> Age:${people.age}</p>
     <p class="card-specie"> Specie:${people.specie}</p>
     </li>`}

     )
}

for (let film of films) {
     let charactersList = film.people
     exibitionPeople(charactersList, film.title)
}



//Ordenar filmes de AZ-ZA

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

//Filtro Diretor

const selectDirector = document.getElementById("director");

selectDirector.addEventListener("change", filterDirector);



//Ordenar personagens de AZ-ZA

const orderAZCharacters = (evento) => {
     evento.preventDefault();
     // const valueSelected = charactersOrganizedByAZ.value;
const charactersAZ = orderCharacters(characters);

exibitionPeople(charactersAZ);

};

const orderZACharacters = (evento) => {
     evento.preventDefault();
     // const valueSelected = charactersOrganizedByZA.value;
 const charactersZA = decreasingOrderCharacters(characters);
 
exibitionPeople(charactersZA);

};


const charactersOrganizedByAZ = document.querySelector('[data-az-order-characters]');
const charactersOrganizedByZA= document.querySelector('[data-za-order-characters]');

charactersOrganizedByAZ.addEventListener('click', orderAZCharacters);

charactersOrganizedByZA.addEventListener('click', orderZACharacters);



//Filtrar personagem por gênero
const selectGender = (evento) => {
     evento.preventDefault();
 
    const valueSelected = genderSelected.value;
    const charactersGender = filterByGender(characters, valueSelected);
    const resultByGender = charactersGender.length;
    exibitionPeople(charactersGender,resultByGender);

};



const genderSelected = document.getElementById("gender");

genderSelected.addEventListener("change", selectGender);











// Filtro Filmes ou Personagens

// const selectOption = document.getElementById("Films or Characters")
// selectOption.addEventListener("change", function (event) {
//   let optionFilm = event.target.value
//   if (optionFilm === "Films") {
//     listFilms.innerHTML = ""
//     exibitionFilme(films)
//   }
//   else if (optionFilm === "Characters") {
//     charactersList.innerHTML = ""
//     exibitionPeople(people)
//   }
//   else {
//     listFilms.innerHTML = ""
//     charactersList.innerHTML = ""
//     exibitionFilms(films)
//     exibitionPeople(charactersList,film.title)
//   }
// })
