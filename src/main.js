import data from "./data/pokemon/pokemon.js";
import { showPokemons, filterByName, filtrar } from "./data.js";

const printPokemons = (pokemonsList) => {
  const cardsElement = document.getElementById("cards");
  cardsElement.innerHTML = "";

  pokemonsList.forEach((pokemon) => {
    const typesPokemons = pokemon.type;
    cardsElement.innerHTML += `<li class="cards ${typesPokemons[0]}">
      <img class="card-image" alt="${pokemon.name}" src="${pokemon.img}"/>
      <h2 class="card-title"> ${pokemon.num} ${pokemon.name}</h2>
      <span class="card-subtitle">
      <p>Evolução: ${
        pokemon.evolution["next-evolution"]?.[0].name === undefined
          ? `<p> Não tem </p>`
          : `<p> ${pokemon.evolution["next-evolution"]?.[0].name} </p>`
      } </p>
      <p>Raridade: ${pokemon["pokemon-rarity"]}  </p>
      <p>Força: ${pokemon.stats["max-cp"]}CP </p>
      <p class="card-subtitle2" id="card-subtitle2">${typesPokemons.join(
        " | "
      )}</p>
      </span>
      </li>
      `;
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

let AllPokemons = data.pokemon;
const filtroTipos = document.getElementById("type");

filtroTipos.addEventListener("change", () => {
  if (filtroTipos.value !== "") {
    AllPokemons = filtrar(data.pokemon, filtroTipos.value);
    console.log(filtrar(data.pokemon, filtroTipos.value));
  } else {
    AllPokemons = data.pokemon;
  }
  printPokemons(AllPokemons);
});
