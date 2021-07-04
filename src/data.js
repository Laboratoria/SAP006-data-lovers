//import pokemon from "./data/pokemon/pokemon"
//import data from './data/pokemon/pokemon.js';






const filtrarPelaGeração = (data, valor) => {
  const filtrarPokemonPelaGeracao = data.filter(
    pokemon => pokemon.generation.name === valor,

  );
  return filtrarPokemonPelaGeracao;
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


const ordenarPorNome = (data, valor) => {
  if (valor === 'A-Z') {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
 
};






/*let maxCp = []

function sortData(dados, sortBy, sortOrder){
  for(let i=0; i <= data.length; i++){   
    maxCp.push(dados[i]["stats"]["max-cp"])
    maxCp.sort(numericOrder)
    console.log(maxCp.reverse())
  }
  
}
sortData(data.pokemon, "MaxCP", "decrescente")

function numericOrder(a, b){
  return a - b
}*/



/*const filterType = (data, condition) => {
  data.forEach((data) =>{
    let result = data["type"].includes(condition)
    if(result === true){
      console.log(data["name"])
    }
  })
}    

filterType(pokemonList, "fairy")*/


export {
  filtrarPelaGeração,
   ordenarPorNum,
   //sortData, 
   //filterType
   ordenarPorNome
};