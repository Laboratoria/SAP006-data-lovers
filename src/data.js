export const filtrar = function (data, selecionarFiltro) {
  const pokemonsFiltrados = data.filter(function (pokemon) {
    return pokemon.type.includes(selecionarFiltro);
  });
  return pokemonsFiltrados;
};




/*filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.*/



/*
sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.
export const ordenar = function (data, ...) {
  const todospokemons = alguma coisa
    return lalalala;
  }
*/
