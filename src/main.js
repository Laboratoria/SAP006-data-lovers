import { example } from './data.js';

import data from './data/pokemon/pokemon.js';


for(let pokemon of data.pokemon){
    let imagem = document.createElement("img");
    imagem.src = pokemon.img
    document.getElementById("listaPokemon").appendChild(imagem)
  }