import { filtrar } from "./data.js";
/*import { ordenar } from "./data.js";*/
import data from "./data/pokemon/pokemon.js";

let AllPokemons = data.pokemon;
const filtroTipos = document.getElementById("type");
const botaoParaFiltrar = document.getElementById("btnFiltrar");

botaoParaFiltrar.addEventListener("click", apertandoBotao);

function apertandoBotao() {
  if (filtroTipos.value !== "") {
    AllPokemons = filtrar(data.pokemon, filtroTipos.value);
  } else {
    AllPokemons = data.pokemon;
  }
  return AllPokemons;
}

for (let pokemon of AllPokemons) {
  document.getElementById("type").innerHTML += `${pokemon.name}
`;
}
