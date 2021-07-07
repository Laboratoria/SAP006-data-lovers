import { dataRM } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

let personagem = Object.values(data.data);
let filtroAdjetivos = personagem;

//let initialData, filteredData = data.results;

function showcards(cartoesFiltrados) {
    let cartoes;
    if (cartoesFiltrados != null) {
      cartoes = cartoesFiltrados;
    } else {
      cartoes = personagem;
    }
  
let i;
let characterImg;
let characterName;
let characterStatus;
let characterSpecies;
let characterOrigin;

document.getElementById("cardContainer").innerHTML = "";