import { filtroGenero, filtroEspecie, filtroStatus, ordemAlfabetica, calcularPorcentagem} from '../src/data.js';

////////////////////// TESTES DOS TESTES 01 /////////////////////////
const mockPersonagens = [
   {
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
    },
    {
      "name": "Bearded Lady",
      "status": "Dead",
      "species": "Alien",
      "gender": "Female",
    }
];


const mockNames = [
  {
    "name": "Rick Sanchez",
  },
  {
    "name": "Morty Smith",
  },
  {
    "name": "Bearded Lady",
  }
]

/////////////////////TESTE PARA FILTRAR GENERO
  describe('filtroGenero', () => {
    it('is a function', () => {
    expect(typeof filtroGenero).toBe('function');
  });

  it('Deve filtrar por gênero Male', () => {
    const genderMale = "Male"
    const expected = filtroGenero(mockPersonagens, genderMale)
    expect (expected.length).toEqual(2)
    expect (expected[0].gender).toEqual(genderMale)
    expect (expected[1].gender).toEqual(genderMale)
  });
});


/////////////////////TESTE PARA FILTRAR ESPECIE 
describe('filtroEspecie', () => {
  it('is a function', () => {
  expect(typeof filtroEspecie).toBe('function');
});

it('Deve filtrar por status Human', () => {
  const specieHuman = "Human"
  const expected = filtroEspecie(mockPersonagens, specieHuman)
  expect (expected.length).toEqual(2)
  expect (expected[0].species).toEqual(specieHuman)
  expect (expected[1].species).toEqual(specieHuman)
  });
});



/////////////////////TESTE PARA FILTRAR STATUS 
describe('filtroStatus', () => {
  it('is a function', () => {
  expect(typeof filtroStatus).toBe('function');
});

it('Deve filtrar por espécie Alive', () => {
  const statusAlive = "Alive"
  const expected = filtroStatus(mockPersonagens, statusAlive)
  expect (expected.length).toEqual(2)
  expect (expected[0].status).toEqual(statusAlive)
  expect (expected[1].status).toEqual(statusAlive)
  });
});
/////////////////// OUTRO STATUS ELE NAO QUER FILTRAR //////////////////////////



/////////////////////TESTE PARA ORDENAÇÃO ALFABÉTICA
describe('ordemAlfabetica', () => {
  it('is a function', () => {
  expect(typeof ordemAlfabetica).toBe('function');
});

it('Deve ordenar de A-Z', () => {
  const ordemAZ = "Alive"
  const expected = ordemAlfabetica(mockPersonagens, ordemAZ)
  expect (expected.length).toEqual(2)
  expect (expected[0].name).toEqual(ordemAZ)
  expect (expected[1].name).toEqual(ordemAZ)
  expect (expected[2].name).toEqual(ordemAZ)
  });
});

