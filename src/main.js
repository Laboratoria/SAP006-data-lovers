//import ghibli  from './data/ghibli.js';

//let studioGhibli = ghibli.films;
//console.log(studioGhibli);

//const primeirofilme[]= ghibli.films[0]
//console.log(primeirofilme);

import { order, decreasingOrder, DirectorSelected, orderCharacters, decreasingOrderCharacters,filterByGender,computeStatsGender} from './data.js';
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
const cleanChars = () => {
     charactersList.innerHTML = "";
}
const exibitionPeople = (people) => {
     cleanChars()
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



// Ordenar filmes de AZ-ZA

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

// Filtro Diretor

const selectDirector = document.getElementById("director");

selectDirector.addEventListener("change", filterDirector);



//Ordenar personagens de AZ-ZA

const orderAZCharacters = (evento) => {
     evento.preventDefault();
     const valueSelected = charactersOrganizedByAZ.value;
     const people = myFilterPeople();

     const charactersAZ = orderCharacters(people);
     
     exibitionPeople(charactersAZ, valueSelected);
}

const myFilterPeople = () => {
     const arrayOfAllPeople = [];
     for (let film of data.films) {
          for (let people of film.people) {
               arrayOfAllPeople.push(people);
          }
     }


     return arrayOfAllPeople
}




const orderZACharacters = (evento) => {
     evento.preventDefault();
     const valueSelected = charactersOrganizedByZA.value;
     const people = myFilterPeople();
     const charactersZA = decreasingOrderCharacters(people);

     exibitionPeople(charactersZA, valueSelected);

};


const charactersOrganizedByAZ = document.querySelector('[data-az-order-characters]');
const charactersOrganizedByZA = document.querySelector('[data-za-order-characters]');

charactersOrganizedByAZ.addEventListener('click', orderAZCharacters);

charactersOrganizedByZA.addEventListener('click', orderZACharacters);




   
// Filtrar personagem por gênero

const selectGender = (evento) => {
     evento.preventDefault();

     const valueSelected = genderSelected.value;
     const people = myFilterPeople();
     const charactersGender = filterByGender(people, valueSelected);
     const totalGender = gender.length;
     const selectAges = averageAge(gender)

     printCuriosity(selectAges, valueSelected, totalGender);
  
     showCharacters(gender);
  

  

     exibitionPeople(charactersGender);

};

const genderSelected = document.getElementById("gender");

genderSelected.addEventListener("change", selectGender);



const people = myFilterPeople();

computeStatsGender(people,"Male")