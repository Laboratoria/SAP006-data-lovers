import {filterByName, filterByType, percentType, orderCP} from "../src/data.js";

/*const typePoke = [
  {"name": "bulbasaur",
  "num": "001",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
  "type": ["grass", "poison"],
  "spawn-chance": "0.69",
  "max-cp": "1115",
},

{"name": "charmeleon",
 "num": "005",
  "img": "https://www.serebii.net/pokemongo/pokemon/005.png",
  "type": "fire",
  "spawn-chance": "0.012",
  "max-cp": "1653",},

{"name": "pikachu",
 "num": "025",
  "img": "https://www.serebii.net/pokemongo/pokemon/025.png",
  "type": "electric",
  "spawn-chance": "0.21",
  "max-cp": "938",}

];
const namePoke = [
  {"name": "bulbasaur"},
  {"name": "charmeleon"},
  {"name": "pikachu"},

];*/

describe('filterByName', () => {
  it('filterByName is a function', () => {
    expect(typeof filterByName).toBe('function');
  });
});


describe('filterByType', () => {
  it('filterByType is a function', () => {
    expect(typeof filterByType).toBe('function');
  });
});

describe('percentType', () => {
  it('percentType is a function', () => {
    expect(typeof percentType).toBe('function');
  });
});

describe('orderCP', () => {
  it('orderCP is a function', () => {
    expect(typeof orderCP).toBe('function');
  });
});

//É necessário que todas sejam uma função
//Deverá filtrar por nome
//Deverá filtrar por tipo
//Deverá calcular a porcentagem total de cada tipo
//Deverá ordenar por CP
