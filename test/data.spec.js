
import { releaseYear, decrescentReleaseYear, filterDirectorSelected, rattingScore, order, decrescentAlphabeticOrder, filterGender, filterSpeciesSelected, averageAge, filterElement, filterMovie} from "../src/data";

const charactersTest = [
  {
    "name": "San",
    "gender": "Female",
    "age": "16",
    "specie": "Human"
  },
  {
    "name": "Jiji",
    "gender": "Male",
    "age": "13",
    "specie": "Cat"
  },
  {
    "name": "Totoro",
    "gender": "Male",
    "age": "1300",
    "specie": "Totoro"
  },
  {
    "name": "Moro",
    "gender": "Female",
    "age": "300",
    "specie": "Wolf"
  },
  {
    "name": "Yuko Harada",
    "gender": "Female",
    "age": "14",
    "specie": "Human"
  },
]

const filmsTest = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "title": "Princess Mononoke",
    "director": "Hayao Miyazaki",
    "release_date": "1997",
    "rt_score": "92",
  },
  {
    "title": "Only Yesterday",
    "director": "Isao Takahata",
    "release_date": "1991",
    "rt_score": "100",
  },
  {
    "title": "The Secret World of Arrietty",
    "director": "Hiromasa Yonebayashi",
    "release_date": "2010",
    "rt_score": "95",
  },
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "release_date": "1988",
    "rt_score": "97",
  },
]

//Tests films
describe('releaseYear()', () => {

  it('should be a function', () => {
    expect(typeof releaseYear).toBe('function');
  });

  it('should return movies by release date', () => {
    expect(releaseYear(filmsTest)).toEqual([
      { "title": "Castle in the Sky", "director": "Hayao Miyazaki", "release_date": "1986", "rt_score": "95", },
      { "title": "Grave of the Fireflies", "director": "Isao Takahata", "release_date": "1988", "rt_score": "97", },
      { "title": "Only Yesterday", "director": "Isao Takahata", "release_date": "1991", "rt_score": "100", },
      { "title": "Princess Mononoke", "director": "Hayao Miyazaki", "release_date": "1997", "rt_score": "92", },
      { "title": "The Secret World of Arrietty", "director": "Hiromasa Yonebayashi", "release_date": "2010", "rt_score": "95", }]);
  });
})

/*describe('decrescentReleaseYear()', () => {

  it('should be a function', () => {
    expect(typeof decrescentReleaseYear).toBe('function');
  })

  it('should return movies by release date', () => {
    expect(decrescentReleaseYear(filmsTest)).toEqual([
    { "title": "The Secret World of Arrietty", "director": "Hiromasa Yonebayashi", "release_date": "2010", "rt_score": "95" },
    { "title": "Princess Mononoke", "director": "Hayao Miyazaki", "release_date": "1997", "rt_score": "92" },
    { "title": "Only Yesterday", "director": "Isao Takahata", "release_date": "1991", "rt_score": "100" },
    { "title": "Grave of the Fireflies", "director": "Isao Takahata", "release_date": "1988", "rt_score": "97" },
    { "title": "Castle in the Sky", "director": "Hayao Miyazaki", "release_date": "1986", "rt_score": "95" }]);
});
  })*/

describe('should return movies by descrescent release date', () => {
  expect(decrescentReleaseYear(filmsTest)).toEqual([
    { "title": "The Secret World of Arrietty", "director": "Hiromasa Yonebayashi", "release_date": "2010", "rt_score": "95" },
    { "title": "Princess Mononoke", "director": "Hayao Miyazaki", "release_date": "1997", "rt_score": "92" },
    { "title": "Only Yesterday", "director": "Isao Takahata", "release_date": "1991", "rt_score": "100" },
    { "title": "Grave of the Fireflies", "director": "Isao Takahata", "release_date": "1988", "rt_score": "97" },
    { "title": "Castle in the Sky", "director": "Hayao Miyazaki", "release_date": "1986", "rt_score": "95" }]);
})

describe('rattingScore()', () => {

  it('should be a function', () => {
    expect(typeof rattingScore).toBe('function');
  });

  it('should be return movies by decrescent ratting score', () => {
    expect(rattingScore(filmsTest)).toEqual([
      { "title": "Only Yesterday", "director": "Isao Takahata", "release_date": "1991", "rt_score": "100" },
      { "title": "Grave of the Fireflies", "director": "Isao Takahata", "release_date": "1988", "rt_score": "97" },
      { "title": "Castle in the Sky", "director": "Hayao Miyazaki", "release_date": "1986", "rt_score": "95" },
      { "title": "The Secret World of Arrietty", "director": "Hiromasa Yonebayashi", "release_date": "2010", "rt_score": "95" },
      { "title": "Princess Mononoke", "director": "Hayao Miyazaki", "release_date": "1997", "rt_score": "92" }]);
  });
})


describe('filterDirectorSelected()', () => {

  it('should be a function', () => {
    expect(typeof filterDirectorSelected).toBe('function');
  });

  it('should return movies by director', () => {
    expect(filterDirectorSelected(filmsTest, "Hiromasa Yonebayashi")).toStrictEqual([
      { "title": "The Secret World of Arrietty", "director": "Hiromasa Yonebayashi", "release_date": "2010", "rt_score": "95" }]);
  });
})


//Tests characters

describe('order()', () => {

  const charactersName = [{ "name": "Aiko" }, { "name": "Totoro" }, { "name": "Eboshi" }];

  it('should be a function', () => {
    expect(typeof order).toBe('function');
  })

  it('should return characters in alphabetic order', () => {
    expect(order(charactersName)).toEqual([{ "name": "Aiko" }, { "name": "Eboshi" }, { "name": "Totoro" }]);
  });
})


describe('decrescentAlphabeticOrder', () => {

  const charactersName = [{ "name": "Aiko" }, { "name": "Eboshi" }, { "name": "Totoro" }];

  it('should be a function', () => {
    expect(typeof decrescentAlphabeticOrder).toBe('function');
  });

  it('should return characters in decrescent alphabetic order', () => {
    expect(decrescentAlphabeticOrder(charactersName)).toEqual([{ "name": "Totoro" }, { "name": "Eboshi" }, { "name": "Aiko" }]);
  });
})


describe('filterGender()', () => {

  it('should be a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('should return characters by selected gender', () => {
    expect(filterGender(charactersTest, "Male")).toEqual([
      { "name": "Jiji", "gender": "Male", "age": "13", "specie": "Cat" },
      { "name": "Totoro", "gender": "Male", "age": "1300", "specie": "Totoro" }]);
  });
})

describe('filterSpeciesSelected()', () => {

  it('should be a function', () => {
    expect(typeof filterSpeciesSelected).toBe('function');
  });

  it('should return characters by selected specie', () => {
    expect(filterSpeciesSelected(charactersTest, "Human")).toEqual([
      { "name": "San", "gender": "Female", "age": "16", "specie": "Human" },
      { "name": "Yuko Harada", "gender": "Female", "age": "14", "specie": "Human" }]);
  });
})

describe('averageAge', () => {

  it('should be a function', () => {
    expect(typeof averageAge).toBe('function')
  });

  it('should return media average age of characters', () => {
    expect(averageAge(charactersTest)).toEqual(329);
  })
})

describe('filterElement()', () => {
  
  it('should be a function', () => {
    expect(typeof filterElement).toBe('function')
  });

  it('should return character by search', () => {
    expect(filterElement(charactersTest, "San")).toEqual([{ "name": "San", "gender": "Female", "age": "16", "specie": "Human"}]);
  });
})

describe('filterMovie()', () => {

  it('should be a function', () => {
    expect(typeof filterMovie).toBe('function')
  });

  it('should return movie by search', () => {
    expect(filterMovie(filmsTest, "Only yesterday")).toEqual([{"title": "Only Yesterday", "director": "Isao Takahata", "release_date": "1991", "rt_score": "100"}]);
  });

})