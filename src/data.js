
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
  const ordenarZA = (a, b) => (a["name"]).localeCompare(b["name"]);

    switch (sortOrder) {
      case "allpokemons":
        return data.pokemon
      case "stats":
        return orderGeracao
      case "reverse":
        return ordenarZA.reverse()
    }
} 

