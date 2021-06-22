import { filtrar } from './data.js';
import { sortData } from './data.js';
import data from './data/pokemon/pokemon.js';


let POKEMONS = data.pokemon;


let seletorTipos = document.getElementById('tipos');

seletorTipos.addEventListener("change", function () {
  if (seletorTipos.value !== "") {
    POKEMONS = filtrar(data.pokemon, seletorTipos.value)
  }
  else {
    POKEMONS = data.pokemon;
  }
  exibir(POKEMONS)
});


let order = document.getElementById('order');

order.addEventListener("change", function (e) {
  e.preventDefault();
  // if (order.value !== "") {
  (sortData(POKEMONS, order.value));
   //  let sortBy = POKEMONS
   //   orderPokemons = Object.value(sortBy)
  //}
})

function exibir(itens) {
  document.getElementById("listaPokemon").innerHTML = "";
  for (let pokemon of itens) {
    let imagem = document.createElement("img");
    imagem.src = pokemon.img
    document.getElementById("listaPokemon").appendChild(imagem)
  }
}

exibir(POKEMONS)



