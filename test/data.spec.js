import {filterByName, filterByType, percentType, orderCP} from "../src/data.js";

const typePoke = [
  {"name": "bulbasaur",
  "type": ["grass", "poison"],
  "max-cp": "1115",
},

{"name": "charmeleon",
  "type": "fire",
  "max-cp": "1653",},

{"name": "pikachu",
  "type": "electric",
  "max-cp": "938",}

];
const namePoke = [
  {"name": "bulbasaur"},
  {"name": "charmeleon"},
  {"name": "pikachu"},

];

/*Deverá filtrar por nome e é uma função. Se o usuário escrever qq coisa sem ser o nome do pokemon, 
nao vai mostrar cards e nem dar erro na tela*/

describe('filterByName', () => {
  it('filterByName is a function', () => {
   expect(typeof filterByName).toBe('function');
  });

  it ('You should filter by name', () => {
    const expected = filterByName(namePoke, 'bumba')
    expect (expected).toEqual([])
  });

  it ('You should filter by name', () => {
    const expected = filterByName(namePoke, 'bulbasaur')
    expect (expected).toEqual([{"name": "bulbasaur"}])
  });
});

//Deverá filtrar por tipo e é uma função

describe('filterByType', () => {
  it('filterByType it should be a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it ('You should filter by type', () => {
    const type = 'fire'
    const expected = filterByType(typePoke, type)
    expect (expected.length).toEqual(1)
    expect (expected[0].type).toEqual(type)
  });
});

//Deverá calcular a porcentagem total de cada tipo e é uma função
describe('percentType', () => {
  it('percentType it should be a function', () => {
    expect(typeof percentType).toBe('function');
  });
  it('You should calculate the per', () => {
    expect(percentType(typePoke,'fire')).toBe(33);
  });
  it('You should calculate the per', () => {
    expect(percentType(typePoke,'electric')).toBe(33);
  });
});

//Deverá ordenar por CP crescente e decrescente e é uma função

describe('orderCP', () => {
  it('orderCP it should be a function', () => {
    expect(typeof orderCP).toBe('function');
  });
  it('It should show in order of CP growing', () => {
    expect(orderCP(typePoke, "max-cp")).toStrictEqual(typePoke);
  });
  it('YShould show in order of decreasing CP', () => {
    expect(orderCP(typePoke, "max-cp")).toStrictEqual(typePoke.reverse());
  });

  it('It should show in order of CP growing', () => {
    expect(orderCP(typePoke, "min-cp")).toStrictEqual(typePoke);
  });
  it('YShould show in order of decreasing CP', () => {
    expect(orderCP(typePoke, "min-cp")).toStrictEqual(typePoke.reverse());
  });
});






