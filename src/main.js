import { filtrar } from './data.js';

import data from './data/pokemon/pokemon.js';


for (let pokemon of data.pokemon) {
  let imagem = document.createElement("img");
  imagem.src = pokemon.img
  document.getElementById("listaPokemon").appendChild(imagem)
}

let seletorTipos = document.getElementById('tipos');

seletorTipos.addEventListener("change", function(){
  if (seletorTipos.value !== ""){
    exibir(filtrar(seletorTipos.value, data));
  }
  else {
    exibir(data.pokemon)
  }
  
});

function exibir (pokemons_filtrados){
  document.getElementById("listaPokemon").innerHTML = "";
  for(let pokemon of pokemons_filtrados){
    let imagem = document.createElement("img");
    imagem.src = pokemon.img
    document.getElementById("listaPokemon").appendChild(imagem)
}
}
