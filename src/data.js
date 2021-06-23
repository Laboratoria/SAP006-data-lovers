import pokemon from "./data/pokemon/pokemon"
import data from './data/pokemon/pokemon.js';

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

let maxCp = []

function sortData(dados, sortBy, sortOrder){
  for(let i=0; i <= data.length; i++){   
    maxCp.push(dados[i]["stats"]["max-cp"])
    maxCp.sort(numericOrder)
    console.log(maxCp.reverse())
  }
  
}
/*sortData(data.pokemon, "MaxCP", "decrescente")*/

function numericOrder(a, b){
  return a - b
}

let typeFilter = []
let typeSearcher = []

function filterData(data, condition){
    for (let j=0; j <= data.length; j++){
      typeSearcher = data[j]["type"]
      if(typeSearcher.includes(condition)){
      typeFilter = data[j]["name"]
      }
    }
  return typeFilter
}

export {
  filtrarPelaGeração, ordenarPorNum, sortData, filterData
};