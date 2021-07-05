import { filterData } from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films
const selectMovies = document.querySelector(".select-films")
const selectCharacter = document.querySelector(".select-character")
const selectSpecie = document.querySelector(".select-specie")
const selectProducer = document.querySelector(".select-producer")
const selectDirector = document.querySelector(".select-director")


function displayCards(movies) {
    document.querySelector(".container").innerHTML = movies.map((film) => `     
        <h3>Título: ${film.title}</h3>
        <p>Produtor: ${film.producer}</p>
        <p>Diretor: ${film.director}</p> 
    `).join('')
}

function getPeople() {
    let people = [];
    for (let film of movies) {
        for (let char of film.people) {
            people.push(char);
        }
    }
    return people;
}


function displayCardsChar(character) {
    document.querySelector(".container").innerHTML = character.map((char) => `
        <h3>Título: ${char.name}</h3>
        <p>Produtor: ${char.gender}</p>
        <p>Diretor: ${char.specie}</p>     
    `).join('')
}

function printMovies() {
    return displayCards(movies)
}
function printCharacter() {
    return displayCardsChar(filterData(getPeople(), "gender", selectCharacter.value))
}

function printSpecie(){
    return displayCardsChar(filterData(getPeople(), "specie", selectSpecie.value))
}

function printDirector() {
    return displayCards(filterData(movies, "director", selectDirector.value))
}

function printProducer() {
    return displayCards(filterData(movies, "producer", selectProducer.value))
}

selectMovies.addEventListener("change", printMovies)
selectCharacter.addEventListener("change", printCharacter)
selectDirector.addEventListener("change", printDirector)
selectProducer.addEventListener("change", printProducer)
selectSpecie.addEventListener("change", printSpecie)