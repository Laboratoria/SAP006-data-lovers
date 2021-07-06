import { filterData } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const movies = data.films;
const selectMovies = document.querySelector(".select-films");
const selectCharacter = document.querySelector(".select-character");
const selectSpecie = document.querySelector(".select-specie");
const selectProducer = document.querySelector(".select-producer");
const selectDirector = document.querySelector(".select-director");

function displayCards(movies) {
  document.querySelector(".container").innerHTML = movies.map((film) => `     
    <div class="card">
        <div class="img" style="background-image: url(${film.poster})">
        </div>                
        <div class="info">
            <h3 id="title">${film.title}</h3>                
            <div class="info_list">
                <ul>
                    <li>Diretor: ${film.director}</li>
                    <li>Produtor: ${film.producer}</li>
                    <li>Lançamento: ${film.release_date}</li>
                    <li>Nota: ${film.rt_score}</li>
                </ul>
            </div>
        </div>
    </div>  
    `).join("");
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
    <div class="card">
        <div class="img" style="background-image: url(${char.img})">               
        </div>            
        <div class="info">
            <h2 id="title">${char.name}</h2>
            <p>Genero: ${char.gender}</p>       
        </div>
  </div>      
    `).join("");
}

function printMovies() {
  return displayCards(movies);
}
function printCharacter() {
  return displayCardsChar(filterData(getPeople(), "gender", selectCharacter.value)
  );
}

function printSpecie() {
  return displayCardsChar(filterData(getPeople(), "specie", selectSpecie.value));
}

function printDirector() {
  return displayCards(filterData(movies, "director", selectDirector.value));
}

function printProducer() {
  return displayCards(filterData(movies, "producer", selectProducer.value));
}

selectMovies.addEventListener("change", printMovies);
selectCharacter.addEventListener("change", printCharacter);
selectDirector.addEventListener("change", printDirector);
selectProducer.addEventListener("change", printProducer);
selectSpecie.addEventListener("change", printSpecie);
