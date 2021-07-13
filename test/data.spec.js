import data from '../src/data/pokemon/pokemon.js';

import {
  filterType,
  filtrarPelaGeracao,
  sortCp,
  ordenarPorNome,
  ordenarPorNum,

  
} from '../src/data.js';



describe('ordenar', () => { 
  it('Deve ser uma função', () => {
    expect(typeof ordenarPorNome).toBe('function')
  });

  it('ordenar por nome A-Z', () => {
      const normal = [
        {name: 'squirtle'},
        {name: 'wartortle'},
        {name: 'blastoise'},
            
      ];
      const input = 'A-Z';
      const organize = [
        {name: 'blastoise'},
        {name: 'squirtle'},
        {name: 'wartortle'},
      ];

      expect(ordenarPorNome(normal, input)).toEqual(organize);


  });
  it('ordernar por nome Z-A', () => {
    const normal = [
      {name: 'blastoise'},
      {name: 'squirtle'},
      {name: 'wartortle'},
          
    ];
    const input = 'Z-A';
    const organize = [
      {name: 'wartortle'},
      {name: 'squirtle'},
      {name: 'blastoise'},
    ];

    expect(ordenarPorNome(normal, input)).toEqual(organize);


  })

});




describe('ordenar Numeros', () => { 
  it('Deve ser uma função', () => {
    expect(typeof ordenarPorNum).toBe('function')
  });

  it('ordenar por numero', () => {
      const normal = [
        {num: ['001']},
        {num: ['002']},
        {num: ['003']},
            
      ];
      const input = 'decrescent';
      const organize = [
        {num: '003'},
        {num: '002'},
        {num: '001'},
      ];

      expect(ordenarPorNum(normal, input)).toEqual(organize);


  });

});









describe('filtrarPelaGeracao', () => {  
  it('Pokemons da Primeira Geração', () => {
    expect(filtrarPelaGeracao(data.pokemon, 'kanto')).toHaveLength(151);

  });

  it('Pokemons da Segunda Geração', () => {
    expect(filtrarPelaGeracao(data.pokemon, 'johto')).toHaveLength(100);
  })
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

  it("Espera-se por pokemon do tipo", () =>{
    expect(filterType(data.pokemon, 'water')).toHaveLength(50);
  });
});

describe('filterType', () => {
  it("Espera-se por pokemon do tipo", () =>{
    expect(filterType(data.pokemon, 'fire')).toHaveLength(22);
  });
});

describe('filterType', () => {
  it("Espera-se por pokemon do tipo", () =>{
    expect(filterType(data.pokemon, 'dark')).toHaveLength(6);
  });
});

describe('filterType', () => {
  it("Espera-se por pokemon do tipo", () =>{
    expect(filterType(data.pokemon, 'bug')).toHaveLength(22);
  });
});

describe('filterType', () => {
  it("Espera-se por pokemon do tipo", () =>{
    expect(filterType(data.pokemon, 'rock')).toHaveLength(18);
  });
});