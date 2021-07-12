import { filterData, orderAz , computeStatsGender, avarageScore } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const movies = data.films;
let orderMovies = movies

const selectMovies = document.querySelector(".select-films");
const selectCharacter = document.querySelector(".select-character");
const selectSpecie = document.querySelector(".select-specie");
const selectProducer = document.querySelector(".select-producer");
const selectDirector = document.querySelector(".select-director");
const computeStats = document.querySelector(".compute-stats");
const buttonAz = document.querySelector("#buttonAz")

function resetCards(){
  selectMovies.value = ""
  selectCharacter.value = ""
  selectSpecie.value = ""
  selectProducer.value = ""
  selectDirector.value = ""  
}

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
     people.push(char)
   }
  }
    return people;
}

let orderCharacters = getPeople()


function getMovieScores(){
  let scores = []
  for(let film of movies){
    scores.push(film.rt_score)
  }
  return scores
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

const sortAz = () => {
  if(selectDirector.value != "" || selectMovies.value != "" || selectProducer.value != ""){
      return displayCards(orderAz(orderMovies, "title"))
  }else if(selectSpecie.value != "" || selectCharacter.value != "") {
      return displayCardsChar(orderAz(orderCharacters, "name"))
  }
}

function displayPercentage(data, dataValue){  
  computeStats.innerHTML = `A porcentagem de personagens desta seleção é ${computeStatsGender(data, dataValue)}%`   
}

function displayMovieScores(){   
  computeStats.innerHTML = `A média das notas é ${avarageScore(getMovieScores())}.`
}

function printMovies() {
  if(selectMovies.value === "score"){
    displayMovieScores()
  }else {
    computeStats.innerHTML = ""
  }
  return displayCards(orderAz(movies, selectMovies.value));
}

function printCharacter() {
  const filterResult = (filterData(getPeople(), "gender", selectCharacter.value));
  displayPercentage(getPeople(), filterResult)
  orderCharacters = filterResult
  return displayCardsChar(filterResult)
}

function printSpecie() {
  const filterResult = (filterData(getPeople(), "specie", selectSpecie.value))
  displayPercentage(getPeople(), filterResult)
  orderCharacters = filterResult
  return displayCardsChar(filterResult)
}

function printDirector() {
  computeStats.innerHTML = ""
  const filterResult = filterData(movies, "director", selectDirector.value)
  orderMovies = filterResult
  //resetCards()
  return displayCards(filterResult);
}

function printProducer() {
  computeStats.innerHTML = ""
  const filterResult = filterData(movies, "producer", selectProducer.value)
  orderMovies = filterResult
  //resetCards()
  return displayCards(filterResult);
}

selectMovies.addEventListener("change", printMovies);
selectCharacter.addEventListener("change", printCharacter);
selectDirector.addEventListener("change", printDirector);
selectProducer.addEventListener("change", printProducer);
selectSpecie.addEventListener("change", printSpecie);
buttonAz.addEventListener("click", sortAz)
