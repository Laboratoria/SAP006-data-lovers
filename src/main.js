import data from "./data/pokemon/pokemon.js";
import {
  showPokemons,
  filterByName,
  filterByType,
  orderCP,
  percentType,
} from "./data.js";

// Printar os cards na tela com as informações
const printPokemons = (pokemonsList) => {
  const cardsElement = document.getElementById("cards");
  cardsElement.innerHTML = "";
  const cardPokemons = pokemonsList.map((pokemon) => {
    const typesPokemons = pokemon.type;
    let nextEvolutionName = "Não tem";

    if ("next-evolution" in pokemon.evolution) {
      nextEvolutionName = pokemon.evolution["next-evolution"][0].name;
    }

    return `<li class="cards ${typesPokemons[0]}">
      <img class="card-image" alt="${pokemon.name}" src="${pokemon.img}"/>
      <h2 class="card-title"> ${pokemon.num} ${pokemon.name}</h2>
      <span class="card-subtitle">
      <p>Evolução: ${nextEvolutionName} </p>
      <p>Chance de Aparecer: ${
        pokemon["spawn-chance"] === null
          ? `<p> -- </p>`
          : `<p> ${pokemon["spawn-chance"]}% </p>`
      }
      <p>Força: ${pokemon.stats["max-cp"]}CP </p>
      <p class="card-subtitle2" id="card-subtitle2">${typesPokemons.join(
        " | "
      )}</p>
      </span>
      </li>
      `;
  });
  cardsElement.innerHTML = cardPokemons.join("");
};
/*const printPokemons = (pokemonsList) => {
  const cardsElement = document.getElementById("cards");
  cardsElement.innerHTML = "";
  const cardPokemons = pokemonsList.map((pokemon) => {
    const typesPokemons = pokemon.type;
    return `<li class="cards ${typesPokemons[0]}">
      <img class="card-image" alt="${pokemon.name}" src="${pokemon.img}"/>
      <h2 class="card-title"> ${pokemon.num} ${pokemon.name}</h2>
      <span class="card-subtitle">
      <p>Evolução: ${
        pokemon.evolution["next-evolution"]?.[0].name === undefined
          ? `<p> Não tem </p>`
          : `<p>  ${pokemon.evolution["next-evolution"]?.[0].name} </p>`
      } </p>
      <p>Chance de Aparecer: ${
        pokemon["spawn-chance"] === null
          ? `<p> -- </p>`
          : `<p>  ${pokemon["spawn-chance"]}% </p>`
      }
      <p>Força: ${pokemon.stats["max-cp"]}CP </p>
      <p class="card-subtitle2" id="card-subtitle2">${typesPokemons.join(
        " | "
      )}</p>
      </span>
      </li>
      `;
  });
  cardsElement.innerHTML = cardPokemons.join("");
};
*/
const pokemonsList = showPokemons(data.pokemon);
printPokemons(pokemonsList);

// Filtrar Pokémons por nome atráves do input text e botão filtrar
const btnSearchPokemon = document.getElementById("btnFiltrar");
const pokemonsName = document.getElementById("pokemonsearch");

btnSearchPokemon.addEventListener("click", () => {
  const searchPokemonByName = filterByName(data.pokemon, pokemonsName.value);
  printPokemons(searchPokemonByName);
  clearSearch();
});

// Filtrar Pokémons por tipo através do select
let AllPokemons = data.pokemon;
const filterTypes = document.getElementById("type");

filterTypes.addEventListener("change", () => {
  if (filterTypes.value !== "") {
    AllPokemons = filterByType(data.pokemon, filterTypes.value);
  } else {
    AllPokemons = data.pokemon;
  }
  printPokemons(AllPokemons);
  calcPercent();
});

// Printar porcentagem por tipo, conforme seleção no filtro
function calcPercent() {
  const calcType = filterTypes.value;
  let result = percentType(data.pokemon, calcType);
  document.getElementById(
    "resultcalc"
  ).innerText = `Este tipo de Pokémon representa ${result}% do total`;
}

// Ordenar Pokémons por CP
const orderByCP = document.getElementById("order");

function pokemonsByCP(event) {
  const selectOrder = orderCP(data.pokemon, event.target.value);
  return printPokemons(selectOrder);
}

orderByCP.addEventListener("change", pokemonsByCP);

//Limpar filtros
const clearSearch = () => {
  document.getElementById("pokemonsearch").value = "";
  document.getElementById("order").value = "";
  document.getElementById("resultcalc").innerText = "";
};