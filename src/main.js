import { filterData } from './data.js';
import data from './data/ghibli/ghibli.js';


const movies = data.films

const selectProducer = document.querySelector(".select-producer")
const selectDirector = document.querySelector(".select-director")

function displayCards(movies){
    document.querySelector(".container").innerHTML = movies.map((film) => `     
    <h3>Título: ${film.title}</h3>
    <p>Produtor: ${film.producer}</p>
    <p>Diretor: ${film.director}</p> 
    `).join('')
}

function printProducer(){
    return displayCards(filterData(movies, "producer", selectProducer.value))
}

function printDirector(){
    return displayCards(filterData(movies, "director", selectDirector.value))
}

selectProducer.addEventListener("change", printProducer)
selectDirector.addEventListener("change", printDirector)