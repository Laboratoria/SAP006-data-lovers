

const filtrarPelaGeracao = (data, valor) => {
  const filtrarPokemonPelaGeracao = data.filter(
    pokemon => pokemon.generation.name === valor,

  );

  return filtrarPokemonPelaGeracao;
};






const ordenarPorNum = (data, valor) => {
  if (valor === '0-9') {
    //sort

    data.sort((a, b) => {
      if (a.num > b.num) {
        return 1;
      } else if (a.num < b.num) {
        return -1;
      } else if (a.num === b.num) {
        return 0;
      }
    })

  } else {
    data.sort((a, b) => {
      if (a.num < b.num) {
        return 1;
      } else if (a.num > b.num) {
        return -1;

      } else if (a.num === b.num) {
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


const sortCp = (data, order) => {
  if (order === "decrescent") {
    data.sort((a, b) => {
      return b["stats"]["max-cp"] - a["stats"]["max-cp"];
    })

  } else if (order === "crescent") {
      data.sort((a, b) => {
        return a["stats"]["max-cp"] - b["stats"]["max-cp"];
      })
    }
    
}



const filterType = (data, valor) => {
  const arrayType = data.filter(pokemon => pokemon.type.indexOf(valor)> -1)
    return arrayType 
  
};

const typeStats = (data, type) => {
  const percentType = data.filter(pokemon => 
  pokemon.type.includes(type))
  return Math.round((percentType.length/data.length * 100))
}



export {
  filtrarPelaGeracao,
  ordenarPorNum,
  sortCp, 
  filterType,
  ordenarPorNome,
  typeStats
};

