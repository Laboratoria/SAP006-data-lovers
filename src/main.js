import { filterData } from './data.js';
import data from './data/ghibli/ghibli.js';


const selectProducer = document.querySelector(".select-producer")
const selectDirector = document.querySelector(".select-director")
const selectCharacter = document.querySelector(".select-character")

const movies = data.films

function getPeople() {
  let people = [];
  for (let film of movies) {
    for (let char of film.people) {
      people.push(char);
    }
  }
  return people;
}

function displayCards(movies){
    document.querySelector(".container").innerHTML = movies.map((film) => `     
        <h3>Título: ${film.title}</h3>
        <p>Produtor: ${film.producer}</p>
        <p>Diretor: ${film.director}</p> 
    `).join('')
}

function displayCardsChar(character){
    document.querySelector(".container").innerHTML = character.map((char) => `
        <h3>Título: ${char.name}</h3>
        <p>Produtor: ${char.gender}</p>
        <p>Diretor: ${char.specie}</p>     
    `).join('')  
}


function printProducer(){
    return displayCards(filterData(movies, "producer",selectProducer.value))
}

function printDirector(){
    return displayCards(filterData(movies, "director", selectDirector.value))
}

function printCharacter(){
    return displayCardsChar(filterData(getPeople(), "gender", selectCharacter.value))
}

selectProducer.addEventListener("change", printProducer)
selectDirector.addEventListener("change", printDirector)
selectCharacter.addEventListener("change", printCharacter)  