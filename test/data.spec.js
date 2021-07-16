import { filters, computeStats, characters, sortChar } from '../src/data';

const mockChars = [
  {
    "name": "Pazu",
    "gender": "Male",
    "specie": "Human"
  },
  {
    "name": "Lusheeta Toel Ul Laputa",
    "gender": "Female",
    "specie": "Human"
  },
  {
    "name": "Kiki",
    "gender": "Female",
    "specie": "Witch"
  },
  {
    "name": "Jiji",
    "gender": "Male",
    "specie": "Cat"
  }
]

// const mockTerrains = [
//   {
//     "name": "Gondoa",
//     "terrain": "TODO",
//   },
//   {
//     "name": "Pazu's Mines",
//     "terrain": "Hill",
//   },
//   {
//     "name": "Laputa",
//     "terrain": "City",
//   },
//   {
//     "name": "Tedis",
//     "terrain": "Hill",
//   },
//   {
//     "name": "Ursula's Log Cabin",
//     "terrain": "TODO",
//   },
//   {
//     "name": "Koriko",
//     "terrain": "Hill",
//   },
//   {
//     "name": "Karikiya",
//     "terrain": "City",
//   },
//   {
//     "name": "Guchokipanya",
//     "terrain": "Hill",
//   }
// ]

const mockFilms = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "release_date": "1989",
    "rt_score": "96",
  }
]

const datasDeLancamento = [
  {"1999"},
  {"2010"},
  {"1997"},
  {"1989"},
]

//cálculos
describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('se forneço array de 5, retorna o length de 5', () => {
    expect(computeStats(["chihiro", "noface", "totoro", "kiki", "howl"])).toBe(5);
  });
});

//characters
describe('characters', () => {
  it('is a function', () => {
    expect(typeof characters).toBe('function');
  });

  it('oi', () => {
    expect(characters(mockChars)).toHaveLength(4);
  });
});

// release date
describe("release date to be equal ...", () => {

  it('should be a function', () => {
    expect(typeof filters (mockFilms, "release_date")).toBe('function');
  });

  it('should return movies by release date', () => {
    expect(filters(mockFilms, "release_date", dates)).toEqual([
      { "title": "Castle in the Sky", "director": "Hayao Miyazaki", "release_date": "1986", "rt_score": "95", },
      { "title": "Kiki's Delivery Service", "director": "Hayao Miyazaki", "release_date": "1989", "rt_score": "96", }
    ]);
  });
});

// describe('filters(films, "release_date", selectedDate)', () => {

//   it('should be a function', () => {
//     expect(typeof filters(mockFilms, "release_date", selectedDate)).toBe('function');
//   });

//   it('should return movies by release date', () => {
//     expect(filters(mockFilms, "release_date", selectedDate)).toEqual([
//       { "title": "Castle in the Sky", "director": "Hayao Miyazaki", "release_date": "1986", "rt_score": "95", },
//       { "title": "Kiki's Delivery Service", "director": "Hayao Miyazaki", "release_date": "1989", "rt_score": "96", }
//     ]);
//   });
// });

// describe('sortChar', () => {
//   it('is a function', () => {
//     expect(typeof sortChar).toBe('function');
//   });

//   it('is working for A to Z', () => {
//     expect(sortChar(typeOf, array)).toReturn(sortAnimals);
//   })
// });
