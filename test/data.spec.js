import {sortData} from '../src/data.js';


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
    const expected = sortData(mockArrayFilms, ["title"], "asc")
    expect(expected[0].title).toBe('Castle in the Sky');
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
