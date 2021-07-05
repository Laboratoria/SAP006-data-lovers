export const showPokemons = (pokemonsList) => pokemonsList.slice(0, 251);

export const filterByName = (pokemonsList, pokemonsName) => {
  const lowerCaseName = pokemonsName.toLowerCase();
  return pokemonsList
    .filter((pokemon) => pokemon.name.toLowerCase().startsWith(lowerCaseName))
    .slice(0, 25);
};

export const filtrar = function (data, selecionarFiltro) {
  const pokemonsFiltrados = data.filter(function (pokemon) {
    return pokemon.type.includes(selecionarFiltro);
  });
  return pokemonsFiltrados;
};
