import data from '../src/data/pokemon/pokemon.js';

import {
  filtrarPelaGeracao,
  
} from '../src/data.js';


describe('filtrarPelaGeracao', () => {  
    it('Pokemons da Primeira Geração Kanto', () => {
        expect(filtrarPelaGeracao(data.pokemon, 'kanto')).toHaveLength(151);

    });

});

