import { mockPersonagens, Beth, Morty, Rick, Summer } from '../src/api.js';
import { ordemAZ, ordemZA, buscarPorLetra, filtrarPersonagens } from '../src/data.js'

describe('Função busca personagens por ordem de A a Z', () => {
  it('should be a function', () => {
    expect(typeof ordemAZ).toBe('function');
  });

  it('Retorna nome dos personagens com a ordenação A-Z', () => {
    expect(ordemAZ(mockPersonagens)).toEqual([Beth, Morty, Rick, Summer]);
  });
});

describe('Função busca personagens por ordem de Z a A', () => {
  it('should be a function', () => {
    expect(typeof ordemZA).toBe('function');
  });

  it('Retorna nome dos personagens com a ordenação Z-A', () => {
    expect(ordemZA(mockPersonagens)).toEqual([Summer, Rick, Morty, Beth]);
  });
});


describe('Filtrar personagens por nome', () => {
  it('should be a function', () => {
    expect(typeof buscarPorLetra).toBe('function')
  });

  it('Retorna os perosnagens buscados', () => {
    expect(buscarPorLetra(mockPersonagens, "rick")).toEqual([Rick]);
  })
});

describe('Filtrar personagens por Status', () => {
  it('should be a function', () => {
    expect(typeof filtrarPersonagens).toBe('function')
  });

  it('Retorna os personagens filtrados por status', () => {
    expect(filtrarPersonagens(mockPersonagens, 'Female')).toEqual([Beth, Summer]);
  })
});
