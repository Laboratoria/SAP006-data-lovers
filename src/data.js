//import pokemon from "./data/pokemon/pokemon"



const filtrarPelaGeração = (data, valor) => {
  const filtrarPokemonPelaGeracao = data.filter(
    pokemon => pokemon.generation.name === valor,

  );
  return filtrarPokemonPelaGeracao;
};




export {
  filtrarPelaGeração, ordenarPorNum
};




const ordenarPorNum = (data, valor) => {
  if (valor === '0-9') {
    //sort

    data.sort((a,b) => {
      if (a.num > b.num) {
        return 1;
      }
     else if (a.num < b.num){
      return -1;
    }
    else if (a.num ===b.num){
      return 0;
    }
  })

} else {
  data.sort((a, b) => {
    if (a.num < b.num) {
      return 1;
    }
  else if (a.num > b.num){
    return -1;

  }
  else if (a.num === b.num){
    return 0;
  }
})
}
};