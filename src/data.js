
export const filtrar = function (seletorTipos, data) {
  const pokemon_filtrados = data.pokemon.filter(
    function(pokemon) {
      return pokemon.type.includes(seletorTipos)
    });
  return pokemon_filtrados;  
}

