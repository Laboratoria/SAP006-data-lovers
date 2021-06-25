
export const filtrar = function (data, seletorTipos) {
  const pokemon_filtrados = data.filter(
    function (pokemon) {
      return pokemon.type.includes(seletorTipos)
    });
  return pokemon_filtrados;
}

// data ==== tds os dados dos pokemon
// sortBy === desses dados usar para ordenar = tamanho. 
//sortOrder === crescente ou decrescente

export const sortData = (data, sortBy, sortOrder) => {
  const allpokemons = data;
console.log(sortBy, sortOrder);
  if (sortOrder === 'asc') {
    allpokemons.sort(
      function (a, b) {
        if (a[sortBy] < b[sortBy])
          return -1;
        if (a[sortBy] > b[sortBy])
          return 1;
      } 
    )
    //no else só trocar os valores
    // -1, 1, serve para ordenação (compara se um for maior que o outro)
  } else {
    allpokemons.sort(
      function (a, b) {
        if (a[sortBy] > b[sortBy])
          return -1;
        if (a[sortBy] < b[sortBy])
          return 1;
      }
    )
  }
  return allpokemons;
}
 














