
export const filtrar = function (data, seletorTipos) {
  const pokemon_filtrados = data.filter(
    function (pokemon) {
      return pokemon.type.includes(seletorTipos)
    });
  return pokemon_filtrados;
}

// data ==== tds os dados dos pokemon
// sortBy === qual desses dada usar para ordenar
//sortOrder === crescente ou decrescente

export const sortData = (data, sortBy, sortOrder) => {
  const orderGeracao = Object.keys(sortBy).sort((a, b) => (a[generation].Number > b[generation].Number));
  const ordenarZA = (a, b) => sort(a, b)
  const ordenarAz = (a, b)

    switch (sortOrder) {
      case "allpokemons":
        return data.pokemon
      case "stats":
        return orderGeracao
      case "reverse":
        return ordenarZA.reverse()
    }
} 

export const media = function(data) {
  data.map(function(item){
   let medCal = (parseInt(item.stats["base-attack"])) + parseInt(item.stats["base-defense"]) + parseInt(item.stats["base-stamina"])/3
    item.stats.medCal=medCal
  })
}