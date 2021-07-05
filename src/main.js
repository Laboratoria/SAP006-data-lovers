import { getStatus, getSpecies, getOrder, getDisorder } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

// Printar cards na tela: 

function showCards(data) {
    document.getElementById('get-cards').innerHTML = data.map((item) => `
    <div class="info-cards">
      <div class="card-front">
        <img src="${item.image}">
      </div>

      <div class="card-back">
        <ul class="list">
          <li id="name">Nome:${item.name}</li>
          <li>Status:${item.status}</li>
          <li>Espécie:${item.species}</li>
          <li>Origem:${item.origin.name}</li>
        </ul>
      </div>
    </div>
        
    `)
}
showCards(data.results);

// Pesquisar pelo personagem:

const btnSearch = document.getElementById("button-search");

function searchCharacter(e) {
    e.preventDefault()

    let searchTerm = document.getElementById("characters").value;
    console.log(searchTerm);
    let object = data.results;
    object = object.filter(character => character.name === searchTerm);
    showCards(object);
}

btnSearch.addEventListener('click', searchCharacter);

// Filtros: status, espécies e ordenação:

const status = document.getElementById("status");
const species = document.getElementById("especie");
const order = document.getElementById("ordenar");
const disorder = document.getElementById("desordenar");
const getCards = document.getElementById("get-cards");

function getStatusData() {
    showCards(getStatus(status.value));
}
status.addEventListener("change", () => { getStatusData() });


function getSpeciesData() {
    showCards(getSpecies(species.value));
}
species.addEventListener("change", () => { getSpeciesData() });


function getOrderData() {
    showCards(getOrder(order.value));
}
order.addEventListener("click", () => { getOrderData() });


function getDisorderData() {
    showCards(getDisorder(disorder.value));
}
disorder.addEventListener("click", () => { getDisorderData() });

/* Card duplo: frente e verso

const cardDuplo = document.getElementById("info-cards");

cardDuplo.addEventListener("mouseover", function frontAndBack(e) {
        event.target.
})
*/

