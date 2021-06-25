import { filtrar } from './data.js';
import { sortData } from './data.js';
import data from './data/pokemon/pokemon.js';
import { media } from './data.js';

let POKEMONS = data.pokemon;

let seletorTipos = document.getElementById('tipos');

exibir(POKEMONS)

media(POKEMONS)

seletorTipos.addEventListener("change", function () {
  if (seletorTipos.value !== "") {
    POKEMONS = filtrar(data.pokemon, seletorTipos.value)
  }
  else {
    POKEMONS = data.pokemon;
  }
  exibir(POKEMONS)
});


const order = document.getElementById('order');

order.addEventListener("change", function (e) {
  e.preventDefault();

  const orderValues = order.value.split("-");
  // sortData(POKEMONS, orderValues[0], orderValues[1]);
  const sort = sortData(POKEMONS, orderValues[0], orderValues[1]);
  exibir(sort);
})

function exibir(itens) {
  document.getElementById("listaPokemon").innerHTML = "";
  for (let pokemon of itens) {
    let imagem = document.createElement("img");
    imagem.src = pokemon.img
    document.getElementById("listaPokemon").appendChild(imagem)
  }
}





