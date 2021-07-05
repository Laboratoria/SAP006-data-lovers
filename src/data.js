
import data from './data/rickandmorty/rickandmorty.js';

// Filtros
export const getStatus = (statusSelected) => {

  let getJson = data.results;
  getJson = getJson.filter(character => character.status === statusSelected);
  return getJson;
}

export const getSpecies = (specieSelected) => {

  let getJson = data.results;
  getJson = getJson.filter(character => character.species === specieSelected)
  return getJson

}

// Ordenação

export const getOrder = () => {

  let showOrder = data.results
  showOrder = showOrder.sort(function (a, z) {
    if (a.name < z.name) {
      return -1;
    }
    if (a.name > z.name) {
      return 1;
    } return 0;
  })
  return showOrder
}

export const getDisorder = () => {

  let showDisorder = data.results
  showDisorder = showDisorder.sort(function (a, z) {
    if (a.name < z.name) {
      return 1;
    }
    if (a.name > z.name) {
      return -1;
    } return 0;
  })
  return showDisorder;
}

// Cálculo agregado

export const calcule = {
  character: (data) => {
     data.results.filter(results => id !== "").lenght
  },

  status: (data, pushStatus) => {
    let total = [];
    let averageStatus = [];

    for (let status of data.results){
      if (status.status == pushStatus)
      total.push(status.status)
      average = ((total.lenght / data.results.lenght) * 100).toFixed(2)
    }
    return averageStatus;
  }
}



