
export const filtrar = function (seletorTipos, data) {
  const pokemon_filtrados = data.pokemon.filter(
    function (pokemon) {
      return pokemon.type.includes(seletorTipos)
    });
  return pokemon_filtrados;
}

export const sortData = (data, sortBy, sortOrder) => {
  // const orderDatas = sortData.sort(a.pokemon < a.pokemon < b.pokemon ? 1 : -1);
  // 
  switch (filtrar) {
    case data:
      return pokemon_filtrados.sort(a.generation < b.generation ? 1 : -1)
    case sortBy:
      return pokemon_filtrados.sort(a.seletorTipos < b.seletorTipos ? 1 : -1)
    case sortOrder:
      return sortData.reverse();
  }
}

// data.sort((a, b) => (a.pokemon > b.pokemon) && (a.pokemon < b.pokemon) ? 1 : -1);
// sortBy.sort((a, b) => (a.generation > b.generation) ? 1 : -1);
// sortOrder = sortBy.reverse();