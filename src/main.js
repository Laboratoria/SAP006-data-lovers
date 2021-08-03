import { order, decreasingOrder, DirectorSelected, orderCharacters, decreasingOrderCharacters, computeGender, filterBy } from './data.js';
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






function filterCharacter(f) {
     charactersList.innerHTML = ""
     const calculos = document.getElementById("calcGender")
     const value = f.target.value;
     const people = myFilterPeople();

     if (value === "Male" || value === "Female" || value === "NA") {
          const filter = filterBy(people, "gender", value);
          exibitionPeople(filter);
          calculos.innerHTML = `A porcentagem de personagens desta categoria é ${computeGender(filter, people)} %`
     } else if (value === "Filters") {
          calculos.innerHTML = ""
          exibitionPeople(people);
          calculos.innerHTML = `Todos os personagens`
     } else {
          calculos.innerHTML = ""

     }
}
document.getElementById("gender").addEventListener("change", filterCharacter);