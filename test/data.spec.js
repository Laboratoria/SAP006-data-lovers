import {sortData, filterData, calculateAvgScore} from '../src/data.js';


const mockArrayFilms = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "rt_score": "95",
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "rt_score": "93",
  },
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "rt_score": "97",
  },
  {
    "title": "Whisper of the Heart",
    "director": "Yoshifumi Kondō",
    "rt_score": "91",
  }
]


/*const mockArrayPeople = [
  {
    "name": "Pazu",
  },
  {
    "name": "Lusheeta Toel Ul Laputa",
  },
  {
    "name": "Dola",
  },
  {
    "name": "Romska Palo Ul Laputa",
  }
]*/

describe('function sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `os filmes ordenados de A - Z`', () => {
    const result = sortData(mockArrayFilms, ["title"], "asc")
    const expected = 'Castle in the Sky'
    expect(result[0].title).toBe(expected);
  });

  it('returns `os filmes ordenados de Z - A`', () => {
    const result = sortData(mockArrayFilms, ["title"], "desc")
    const expected = 'Whisper of the Heart'
    expect(result[0].title).toBe(expected);
  });

  it('returns `os filmes ordenados de Z - A`', () => {
    const result = sortData(mockArrayFilms, ["title"], "desc")
    const expected = 'My Neighbor Totoro'
    expect(result[1].title).toBe(expected);
  });
});


describe('function filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `os filmes dirigidos por diretor`', () => {
    const result = filterData(mockArrayFilms, "Hayao Miyazaki")
    const expected = "Hayao Miyazaki"
    expect(result[0].director).toBe(expected);
  });
});

describe('function calculateAvgScore', () => {
  it('is a function', () => {
    expect(typeof calculateAvgScore).toBe('function');
  });

  it('returns `valor da media das avalições dos filmes `', () => {
    const result = calculateAvgScore(mockArrayFilms)
    const expected = "94.00"
    expect(result).toBe(expected);
  });
});


