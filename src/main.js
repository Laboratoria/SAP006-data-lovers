import { getStatus, getSpecies, getOrder, getDisorder } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';


function showCards(data) {
    document.getElementById('get-cards').innerHTML = data.map((item) => `
        <div class="info-cards">
        <div class="img-cards">
        <img src="${item.image}">
        </div>
            <ul class="list">
                <li>Nome:${item.name}</li>
                <li>Status:${item.status}</li>
                <li>Espécie:${item.species}</li>
                <li>Origem:${item.origin.name}</li>
            </ul>
        </div>
        
        `)
}
showCards(data.results);


const status = document.getElementById("status");
const species= document.getElementById("especie");
const order = document.getElementById("ordenar");
const disorder = document.getElementById("desordenar");


function getStatusData() {
    
    showCards(getStatus(status.value));
}
status.addEventListener("change", () => {getStatusData()} );


function getSpeciesData(){

    showCards(getSpecies(species.value));
}
species.addEventListener("change", () => {getSpeciesData()} );


function getOrderData(){

    showCards(getOrder(order.value));
}
order.addEventListener("click", () => {getOrderData()} );


function getDisorderData() {

    showCards(getDisorder(disorder.value));
}
disorder.addEventListener("click", () => {getDisorderData()} );

