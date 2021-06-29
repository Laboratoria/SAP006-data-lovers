import { filterData } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';


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

