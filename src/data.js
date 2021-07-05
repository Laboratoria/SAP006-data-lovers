//import pokemon from "./data/pokemon/pokemon"
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

/*const filtrarPelaGeração = (data, valor) => {
  const filtrarPokemonPelaGeracao = data.filter(
    pokemon => pokemon.generation.name === valor,

  );
  return filtrarPokemonPelaGeracao;
};*/


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


const ordenarPorNome = (data, valor) => {
  if (valor === 'A-Z') {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
 
};





let pokemonList = data.pokemon
let maxCp = []

const sortCp = (data, valor) => {
  maxCp.forEach((elem) => {
    maxCp.push(data[i]["stats"]["max-cp"])
    maxCp.sort(numericOrder)
    console.log(maxCp.reverse())
  }) 
    
  
  
}
/*sortCp(pokemonList)*/

function numericOrder(a, b){
  return a - b
}


const filterType = (data, valor) => {
  const arrayType = data.filter(pokemon => pokemon.type.indexOf(valor)> -1)
    return arrayType 
  
};



export {
  /*filtrarPelaGeração, */ordenarPorNum,/* sortCp*/ filterType, ordenarPorNome
};