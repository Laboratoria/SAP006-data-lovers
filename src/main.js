import { getStatus, getSpecies, getOrder, getDisorder, getCharacter, calculeStats, calculeSpecies } from './data.js';


import data from './data/rickandmorty/rickandmorty.js';



function showCards(data) {
    document.getElementById('get-cards').innerHTML = data.map((item) => `
    <div class="info-cards">
        <div class="front">
          <img src="${item.image}">
          <li id="name">${item.name}</li>
        </div>
        <div class="back">
        <img src="${item.image}">
          <ul class="list">
            <li id="name-back">Nome:${item.name}</li>
            <li class= "list-item">Status:${item.status}</li>
            <li class= "list-item">Espécie:${item.species}</li>
            <li class= "list-item">Origem:${item.origin.name}</li>
          </ul>
        </div>
    </div>
        
        `).join("");
}

showCards(data.results);

const searchTerm = document.getElementById("characters");
const status = document.getElementById("status");
const species= document.getElementById("especie");
const order = document.getElementById("ordenar");
const disorder = document.getElementById("desordenar");
const showStats = document.getElementById("showStats")
const homeButton = document.getElementById("home");


function searchCharacter() {
    
    showCards(getCharacter(data.results, searchTerm.value));
    
}

searchTerm.addEventListener('keyup', () => {searchCharacter() } );



function calculoAgregadoStatus() {

    const stats = calculeStats(data.results, status.value);
    showStats.innerHTML = (`A porcentagem de personagens dessa categoria é de: ${stats} %`);
    
}

function getStatusData() {
                     
 showCards(getStatus(data.results, status.value));

}    

status.addEventListener("change", () => {getStatusData(), calculoAgregadoStatus()} );

function calculoAgregadoSpecies() {

    const newSpecies = calculeSpecies(data.results, species.value);
    showStats.innerHTML = (`A porcentagem de personagens dessa categoria é de: ${newSpecies} %`);
    
}

function getSpeciesData(){

    showCards(getSpecies(data.results, species.value));
    
}
species.addEventListener("change", () => {getSpeciesData(), calculoAgregadoSpecies()} );


function getOrderData(){

    showCards(getOrder(data.results));
}
order.addEventListener("click", () => {getOrderData()} );


function getDisorderData() {

    showCards(getDisorder(data.results));
}
disorder.addEventListener("click", () => {getDisorderData()} );
 
function clear(){
    
    document.location.reload()
}

homeButton.addEventListener("click", clear);
