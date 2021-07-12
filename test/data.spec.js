import data from '../src/data/pokemon/pokemon.js';

import {
  filtrarPelaGeracao,
  sortCp,
  filterType
} from '../src/data.js';


describe('filtrarPelaGeracao', () => {  
    it('Pokemons da Primeira Geração Kanto', () => {
        expect(filtrarPelaGeracao(data.pokemon, 'kanto')).toHaveLength(151);

    });

});

describe('sortCp', () => {

  it('should be a function', () => {
    expect(typeof sortCp).toBe('function');
  })
});

describe('filterType', () => {

  it('should be a function', () => {
    expect(typeof filterType).toBe('function');
  })
});