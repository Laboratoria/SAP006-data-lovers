// Mostrar quantidade de Pokémons que quisermos selecionar
export const showPokemons = (pokemonsList) => pokemonsList.slice(0, 251);

// Filtrar Pokémons por nome através do input text
export const filterByName = (pokemonsList, pokemonsName) => {
  const lowerCaseName = pokemonsName.toLowerCase();
  return pokemonsList
    .filter((pokemon) => pokemon.name.toLowerCase().startsWith(lowerCaseName))
    .slice(0, 251);
};

//Filtrar Pokémons por tipo através do select
export const filterByType = (data, selectFilter) =>
  data.filter((pokemon) => pokemon.type.includes(selectFilter));

  //Calculo
export const percentType = (data, filterCalc) => {
  const calcPoke = data.filter((pokemon) =>
    pokemon.type.includes(filterCalc)
  );
  return Math.round((calcPoke.length / data.length) * 100);
};

//Ordenar Pokémons por CP Max->Min/Min->Max
export const orderCP = (data, selectOrder) => {
  if (selectOrder === "MaxCPMinCP") {
    return data.sort((maxcp, mincp) =>
      maxcp.stats["max-cp"] > mincp.stats["max-cp"] ? 1 : -1
    );
  } else if (selectOrder === "MinCPMaxCP") {
    return data.sort((maxcp, mincp) =>
      maxcp.stats["max-cp"] > mincp.stats["max-cp"] ? -1 : 1
    );
  }
  return data;
};
