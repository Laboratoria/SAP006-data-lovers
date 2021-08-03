import { order, decreasingOrder, DirectorSelected, orderCharacters, decreasingOrderCharacters, filterBy, computeGender } from '../src/data.js';
const films = [
  {

    "title": "Hannibal",
    "director": "Juliete",
  },
  {

    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
  },
  {
    "title": "StarWars",
    "director": "Beatriz",
  },
  {
    "title": "StarWars",
    "director": "Beatriz",
  }
]

const director = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
  },
  {

    "title": "The Tale of the Princess Kaguya",
    "director": "Isao Takahata",
  },
  {
    "title": "StarWars",
    "director": "Beatriz",
  },
]

const chars = [
  {
    "name": "Juliete",
    "gender": "Female",
  },
  {
    "name": "Beatriz",
    "gender": "Female",
  },

  {
    "name": "Gato",
    "gender": "NA",
  },

  {
    "name": "Gato",
    "gender": "NA",
  }

]

describe('order', () => {
  it('is a function', () => {
    expect(typeof order).toBe('function');
  });

  it('espero receber a lista de filmes ordenados de A-Z', () => {
    expect(order(films)).toEqual([{ "director": "Hayao Miyazaki", "title": "Castle in the Sky" }, { "director": "Juliete", "title": "Hannibal" }, { "director": "Beatriz", "title": "StarWars" }, { "director": "Beatriz", "title": "StarWars" }]);
  });
})

describe('decreasingOrder', () => {
  it('is a function', () => {
    expect(typeof decreasingOrder).toBe('function');
  });

  it('espero receber a lista de filmes em ordem decrescente', () => {
    expect(decreasingOrder(films)).toEqual([{ "director": "Beatriz", "title": "StarWars" }, { "director": "Beatriz", "title": "StarWars" }, { "director": "Juliete", "title": "Hannibal" }, { "director": "Hayao Miyazaki", "title": "Castle in the Sky" }]);
  });
})
describe('directorSelected', () => {
  it('is a function', () => {
    expect(typeof DirectorSelected).toBe('function');
  });

  it('espero receber a lista de filmes filtrados pelo nome do diretor', () => {
    expect(DirectorSelected(director, "Hayao Miyazaki")).toStrictEqual([{ "director": "Hayao Miyazaki", "title": "Castle in the Sky" }]);

  });
})
describe('orderCharacters', () => {
  it('is a function', () => {
    expect(typeof orderCharacters).toBe('function');
  });

  it('espero receber a lista de personagens ordenados de A-Z', () => {
    expect(orderCharacters(chars)).toEqual([{ "gender": "Female", "name": "Beatriz" }, { "gender": "NA", "name": "Gato" }, { "gender": "NA", "name": "Gato" }, { "gender": "Female", "name": "Juliete" }]);
  });
})

describe('decreasingOrderCharacters', () => {
  it('is a function', () => {
    expect(typeof decreasingOrderCharacters).toBe('function');
  });

  it('espero receber a lista de personagens em ordem decrescente', () => {
    expect(decreasingOrderCharacters(chars)).toEqual([{ "gender": "Female", "name": "Juliete" }, { "gender": "NA", "name": "Gato" }, { "gender": "NA", "name": "Gato" }, { "gender": "Female", "name": "Beatriz" }]);
  });
})

describe('filterBy', () => {
  it('is a function', () => {
    expect(typeof filterBy).toBe('function');

  });
  it('espero receber os personagens do gênero feminino', () => {
    expect(filterBy(chars)).toEqual([{ "gender": "Female", "name": "Juliete" }, { "gender": "Female", "name": "Beatriz" }, { "gender": "NA", "name": "Gato" }, { "gender": "NA", "name": "Gato" }]);
  });
})
it('espero receber os personagens do gênero masculino', () => {
  expect(filterBy(chars)).toEqual([{ "gender": "Female", "name": "Juliete" }, { "gender": "Female", "name": "Beatriz" }, { "gender": "NA", "name": "Gato" }, { "gender": "NA", "name": "Gato" }]);
});

describe('computeGender', () => {
  it('is a function', () => {
    expect(typeof computeGender).toBe('function');

  });
  it('espero que retorne o cáculo da porcentagem por gênero', () => {
    expect(computeGender(chars, 'Female')).toBe();
  });
})