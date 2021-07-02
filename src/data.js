export const showPokemons = (pokemonsList) => pokemonsList.slice(0, 20);

export const filterByName = (pokemonsList, pokemonsName) => {
  const lowerCaseName = pokemonsName.toLowerCase();
  return pokemonsList.filter(pokemon => pokemon.name.toLowerCase().startWith(lowerCaseName)).slice(0, 20);
};
