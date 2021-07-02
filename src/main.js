import data from "./data/pokemon/pokemon.js";
import { showPokemons, filterByName } from "./data.js";

const printPokemons = (pokemonsList) => {
  const cardsElement = document.getElementById("cards");
  cardsElement.innerHTML = "";

  pokemonsList.forEach((pokemon) => {
    cardsElement.innerHTML += `<div class="card">
      <h2 class="title">${pokemon.name}</h2>
      <span class="secondText">
      <b>Número:</b> ${pokemon.num}
      <b>Tipo:</b> ${pokemon.type}
      <b>Evolução:</b> ${pokemon["next-evolution"]} </span>
  </div>`;
  });
};
const pokemonsList = showPokemons(data.pokemon);
printPokemons(pokemonsList);

const btnSearchPokemon = document.getElementById("btnFiltrar");
const pokemonsName = document.getElementById("pokemonsearch");

btnSearchPokemon.addEventListener("click", () => {
  const searchPokemonByName = filterByName(data.pokemon, pokemonsName.value);
  printPokemons(searchPokemonByName);
});
