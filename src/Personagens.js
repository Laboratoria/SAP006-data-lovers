import data from "./data/ghibli/ghibli.js";

//Personagens

const charactersList = document.getElementById("Characters")
const exibitionPeople = (cardsPersonagens) => {
  cardsPersonagens.forEach(people => {
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