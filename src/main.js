import { filterData } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

var initialData = data.results;

var filteredData = data.results;


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

function getStatus(statusSelected) {

    var test = data.results;
    test = test.filter(character => character.status === statusSelected);


showCards(test);
}

status.addEventListener("change", ()=>{getStatus(status.value)} );


function getSpecies(specieSelected){
    console.log(specieSelected);
   var showSpecies = data.results;
   showSpecies = showSpecies.filter(character => character.species === specieSelected)

showCards(showSpecies);
}
species.addEventListener("change", ()=>{getSpecies(species.value)} );

