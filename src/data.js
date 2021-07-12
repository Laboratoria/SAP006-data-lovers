import data from './data/rickandmorty/rickandmorty.js';


export const getStatus = (data, statusSelected) => {

  const getJson = data.filter(character => character.status === statusSelected);
  return getJson;
   
}

export const getSpecies = (data, specieSelected) => {

  const getJson = data.filter(character => character.species === specieSelected)
  return getJson

}

export const getOrder= (data) =>{

  let showOrder = data.sort(function(a,z){
    if(a.name < z.name) {
      return -1;
    }
    if(a.name > z.name) {
      return 1;
    }return 0;
  })
  return showOrder
  
}

export const getDisorder = (data) => {

 
  let showDisorder = data.sort(function(a,z){
    if(a.name < z.name) {
      return 1;
    }
    if(a.name > z.name) {
      return -1;
    }return 0;
  })
  return showDisorder
}

export const getCharacter = (data, NameSearch) => {  
  

  let object = data.filter(character => character.name.toLocaleLowerCase().includes(NameSearch.toLocaleLowerCase()));
  return object
  
}

export const calculeStats = (data, statusStats) => {

  let total = [];
  let percent = 0;

  for (let status of data) {
    if (status.status == statusStats) {
      total.push(status.status);
      percent = Number(((total.length / data.length) * 100).toFixed(2))
    }
  }
  return percent;
}


export const calculeSpecies = (data, statusSpecies) => {

  let total = [];
  let percent = [];

  for (let species of data) {
    if (species.species == statusSpecies) {
      total.push(species.species);
      percent = Number(((total.length / data.length) * 100).toFixed(2))
    }
  }
  return percent;
}