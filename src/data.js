//import pokemon from "./data/pokemon/pokemon"



const filtrarPelaGeração = (data, valor) => {
  const filtrarPokemonPelaGeracao = data.filter(
    pokemon => pokemon.generation.name === valor,

  );
  return filtrarPokemonPelaGeracao;
};




export {
  filtrarPelaGeração
};