import data from './data/ghibli/ghibli.js';

const films = data.films
const listFilms = document.getElementById("Films")
let exibitionFilms = (cards) => {
     cards.forEach(film => {
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




//Personagens//

const listCharacter = document.getElementById("Characters")
const exibitionCharacters = (characters,films)=>{
     CharactersList.forEach(characters => {
     listCharacters.innerHTML +=

     `<li class= "cardCharacter">
     <img src=$(characters.img) class="card-img" alt="ImagemPersonagem" >
     <p class="card-name"> Character: ${people.name}</p>
     <p class="card-film"> Film: ${film} </p>
     <p class="card-gender"> Gender: ${character.gender}</p>
     <p class="card-age"> Age: ${character.age} </p>
     <p class="card-specie"> Specie: ${character.specie}</p>
</li>`}

     )
}

for(let film of films) {
     let listCharacter = film.character
     exibitionCharacters(characters , film.title)

}



....testando

















































