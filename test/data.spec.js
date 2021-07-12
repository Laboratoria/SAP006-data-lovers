import { getStatus, getSpecies, getOrder, getDisorder, getCharacter, calculeStats, calculeSpecies } from '../src/data.js';


const mockArray = [ {

  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  
},
{ 
  "name": "Alan Rails",
  "status": "Dead",
  "species": "Human",
  "type": "Superhuman (Ghost trains summoner)",
  
},
{
  "name": "Alien Googah",
  "status": "unknown",
  "species": "Alien",
  "type": "",
},
{
  "name": "Alien Morty",
  "status": "unknown",
  "species": "Alien",
          
}
];

const mockArrayOrder = [
  {"name": "Alan Rails"},
  {"name": "Alien Googah"},
  {"name": "Alien Morty"},
  {"name": "Rick Sanchez"}

];

describe('function getStatus', () => {
  it('is a function', () => {
    expect(typeof getStatus).toBe('function');
  }); 
  
  it('returna o status do personagem, quando selecionado "Alive"', () => {
    const expected = getStatus(mockArray, 'Alive')
    expect(expected[0].status).toEqual('Alive')
    expect(expected[0]).toEqual(mockArray[0])
  });

  it('returna o status do personagem, quando selecionado "Dead"', () => {
    const expected = getStatus(mockArray, 'Dead')
    expect(expected[0].status).toEqual('Dead')
    expect(expected[0]).toEqual(mockArray[1])
  });

  it('returna o status do personagem, quando selecionado "Unknow"', () => {
    const expected = getStatus(mockArray, 'unknown')
    expect(expected[0].status).toEqual('unknown')
    expect(expected[0]).toEqual(mockArray[2])
  });
});

describe('function getSpecies', () => {
  it('is a function', () => {
    expect(typeof getSpecies).toBe('function');
  });
 

  it('retorna o especie do personagem, quando selecionado "Human"', () => {
    const expected = getSpecies(mockArray, 'Human')
    expect(expected[0].species).toEqual('Human')
    expect(expected[0]).toEqual(mockArray[0])
  });
});

describe('function getOrder', () => {
  it('is a function', () => {
    expect(typeof getOrder).toBe('function');
  });

  it('retorna  os nomes dos personagens ordenado de AZ', () => {
    expect(getOrder(mockArrayOrder, 'AZ')).toStrictEqual(mockArrayOrder);

  });
});

describe('function getDisorder', () => {
  it('is a function', () => {
    expect(typeof getDisorder).toBe('function');
  });

  it('retorna  os nomes dos personagens ordenado de ZA', () => {
    expect(getOrder(mockArrayOrder, 'ZA')).toStrictEqual(mockArrayOrder.reverse());

  });
});

describe('function getCharacter', () => {
  it('is a function', () => {
    expect(typeof getCharacter).toBe('function');
  });

  it('retorna o nome do personagem digitado pelo usuario', () => {
    const expected = getCharacter(mockArray, 'Rick Sanchez')
    expect(expected[0].name).toEqual('Rick Sanchez')
    expect(expected[0]).toEqual(mockArray[0])
  });
});

describe('function calculeStats', () => {
  it('is a function', () => {
    expect(typeof calculeStats).toBe('function');
  });

  it('retorna 25% dos personagens que estão "Alive"', () => {
    const expected = calculeStats(mockArray, 'Alive')
    expect(expected).toEqual(25)
  });
}); 

describe('function calculeSpecies', () => {
  it('is a function', () => {
    expect(typeof calculeSpecies).toBe('function');
  });

  it('retorna 50% dos personagens que estão "Human"', () => {
    const expected = calculeSpecies(mockArray, 'Human')
    expect(expected).toEqual(50)
  });
});