
export const filtrar = function (data, seletorTipos) {
  const pokemon_filtrados = data.filter(
    function (pokemon) {
      return pokemon.type.includes(seletorTipos)
    });
  return pokemon_filtrados;
}
// filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.



export const sortData = (data, sortBy, sortOrder) => {
  // let someData = 

  //  switch (sortData) {
  //    case data:
  //      return POKEMONS
       
  //    case sortBy:
  //      return someData
  //   case sortOrder:
    
    
  //  }

  
}

//sortData(data, sortBy, sortOrder): esta função recebe três parâmetros.O primeiro, data,
 //nos entrega os dados.O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar.O terceiro, 
//sortOrder, indica se quer ordenar de maneira crescente ou decrescente.

//  .sort(a.generation < b.generation ? 1 : -1)
// data.sort((a, b) => (a.pokemon > b.pokemon) && (a.pokemon < b.pokemon) ? 1 : -1);
// sortBy.sort((a, b) => (a.generation > b.generation) ? 1 : -1);
// sortOrder = sortBy.reverse();