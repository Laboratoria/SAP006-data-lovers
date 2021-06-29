import { filtrar } from './data.js';
import { sortData } from './data.js';
import data from './data/pokemon/pokemon.js';
//import { media } from './data.js';


let POKEMONS = data.pokemon;

function exibir(itens) {
  document.getElementById("listaPokemon").innerHTML = "";
  for (let pokemon of itens) {
    let imagem = document.createElement("img");
    imagem.src = pokemon.img
    document.getElementById("listaPokemon").appendChild(imagem)
  }
}
exibir(POKEMONS)





const type = document.getElementById('type');

type.addEventListener("change", function () {
  if (type.value !== "") {
    POKEMONS = filtrar(data.pokemon, type.value)
    exibir(POKEMONS)
  }
})

const order = document.getElementById('order');

order.addEventListener("change", function (e) {
  e.preventDefault();

  const orderValues = order.value.split("/");
  const sortResults = sortData(POKEMONS, orderValues[0], orderValues[1]);

  exibir(sortResults);
})





