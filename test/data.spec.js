import { sortData } from '../src/data.js';

const namesPokemon =
  [{ name: "bulbasaur", type: "gram" },
  { name: "pikachu", type: "rock" },
  { name: "ivisuor", type: "eletric" }];


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns ``', () => {
    expect(sortData(namesPokemon, "name", "asc")).toEqual([
     {name: "bulbasaur", type: "grama"},
     { name: "ivisuor", type: "eletrico" },
     { name: "pikachu", type: "eletrico" },]);
  });
});




