import {filtered, ordered, filterAni, orderAni} from "../src/data.js" 
// import {sumTotalChars, calcGender} from "../src/sum.js"
// sumTotalMovies
const charsTest = [
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

        "name": "Dola",
        "gender": "Female",
        "specie": "Human"
      },
      {
        "name": "Romska Palo Ul Laputa",
        "gender": "Male",
        "specie": "Human"
      },
      {
        "name": "Uncle Pom",
        "gender": "Male",
        "specie": "Human"
      },
     {
      "name": "Chu Totoro",
      "gender": "NA",
      "specie": "Totoro"
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
    },
    {
      "name": "Baron Humbert von Gikkingen",
      "gender": "Male",
      "specie": "Cat"
    },
    {
      "name": "Seizaemon",
      "gender": "Male",
      "specie": "Raccoon Dog"
    },
    {
      "name": "Oroku",
      "gender": "Female",
      "specie": "Raccoon Dog"
    },
    {
      "name": "Gonta",
      "gender": "Male",
      "specie": "Raccoon Dog"
    },
    {
      "name": "Inugami Gyōbu",
      "gender": "Male",
      "specie": "Raccoon Dog"
    }]

const aniTest = [
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
      },
      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "producer": "Hayao Miyazaki",
      },
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "producer": "Toru Hara",
      },
      {
        "title": "Only Yesterday",
        "director": "Isao Takahata",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "Porco Rosso",
        "director": "Hayao Miyazaki",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "Pom Poko",
        "director": "Isao Takahata",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "Whisper of the Heart",
        "director": "Yoshifumi Kondō",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "Princess Mononoke",
        "director": "Hayao Miyazaki",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "Spirited Away",
        "director": "Hayao Miyazaki",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "The Cat Returns",
        "director": "Hiroyuki Morita",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "Howl's Moving Castle",
        "director": "Hayao Miyazaki",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "Tales from Earthsea",
        "director": "Gorō Miyazaki",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "Ponyo on the Cliff by the Sea",
        "director": "Hayao Miyazaki",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "From Up on Poppy Hill",
        "director": "Gorō Miyazaki",
        "producer": "Toshio Suzuki",
      },
      {
        "title": "When Marnie Was There",
        "director": "Hiromasa Yonebayashi",
        "producer": "Yoshiaki Nishimura",
      }
    ]
    
const [Castle, My, Kiki, Grave, Only, Porco, Pom, Whisper, Princess, Spirited, The, Howl, Tales, Ponyo, From, When] = aniTest;
const [Pazu, Lusheeta, Dola, Romska, Uncle, Chu, Jiji, Baron, Seizaemon, Oroku, Gonta, Inugami] = charsTest

// const totalChars = charsTest.length;
// const totalMovies = aniTest.lenght;
// const gendersNum = {Male:8,Female:4,NA:1}


describe('filter chars function gender', () => {
  it('is a function', () => {
    expect(typeof filtered).toBe('function');
  });

  it('returns gender Male', () => {
    expect(filtered(charsTest, "gender", "Male")).toEqual([Pazu, Romska, Uncle, Jiji, Baron, Seizaemon, Gonta, Inugami]);
  });

  it('returns gender Female', () => {
    expect(filtered(charsTest, "gender", "Female")).toEqual([Lusheeta, Dola, Kiki, Oroku]);
  });
});

describe('filter chars function specie', () => {

  it('returns specie Human', () => {
    expect(filtered(charsTest, "specie", "Human")).toEqual([Pazu, Lusheeta, Dola, Romska, Uncle]);
  });

  it('returns specie Totoro', () => {
    expect(filtered(charsTest, "specie", "Totoro")).toEqual([Chu]);
  });

  it('returns specie Witch', () => {
    expect(filtered(charsTest, "specie", "Witch")).toEqual([Kiki]);
  });

  it('returns specie Cat', () => {
    expect(filtered(charsTest, "specie", "Cat")).toEqual([Jiji, Baron]);
  });

  it('returns specie Raccoon Dog', () => {
    expect(filtered(charsTest, "specie", "Raccoon Dog")).toEqual([Seizaemon, Oroku, Gonta, Inugami]);
  });
});

describe('ordered function chars', () => {
  it('is a function', () => {
    expect(typeof ordered).toBe('function');
  });

  it('returns names A-Z', () => {
    expect(ordered(charsTest, "A-Z")).toEqual([Baron, Chu, Dola, Gonta, Inugami, Jiji, Kiki, Lusheeta, Oroku,Pazu, Romska, Seizaemon, Uncle]);
  });

  it('returns names Z-A', () => {
    expect(ordered(charsTest, "Z-A")).toEqual([Uncle, Seizaemon, Romska,Pazu, Oroku, Lusheeta, Kiki, Jiji, Inugami, Gonta, Dola, Chu, Baron]);
  });
});

describe('filter function director', () => {
  it('is a function', () => {
    expect(typeof filterAni).toBe('function');
  });

  it('returns director Hayao Miyazaki', () => {
    expect(filterAni(aniTest, "director", "Hayao Miyazaki")).toEqual([Castle, My, Porco, Princess, Spirited, Howl, Ponyo]);
  });

  it('returns director Isao Takahata', () => {
    expect(filterAni(aniTest, "director", "Isao Takahata")).toEqual([Grave, Only, Pom])
  })
});

describe('filter function producer', () => {
  it('is a function', () => {
    expect(typeof filterAni).toBe('function');
  });

  it('returns producer Toshio Suzuki', () => {
    expect(filterAni(aniTest, "producer", "Toshio Suzuki")).toEqual([Only, Porco, Pom, Whisper, Princess, Spirited, The, Howl, Tales, Ponyo, From]);
  });

  it('returns producer Yoshiaki Nishimura', () => {
    expect(filterAni(aniTest, "producer", "Yoshiaki Nishimura")).toEqual([When]);
  });
});

describe('order function films', () => {
  it('is a function', () => {
    expect(typeof orderAni).toBe('function');
  });

  it('returns title A-Z', () => {
    expect(orderAni(aniTest, "A-Z")).toEqual([Castle, From, Grave, Howl, My, Only, Pom, Ponyo, Porco, Princess, Spirited, Tales, The, When, Whisper]);
  });

  it('returns title Z-A', () => {
    expect(orderAni(aniTest, "Z-A")).toEqual([Whisper, When, The, Tales, Spirited, Princess, Porco, Ponyo, Pom, Only, My, Howl, Grave, From, Castle]);
  });
});

// describe('calc function', () => {
 
//  it('is a function', () => {
//     expect(typeof sumTotalChars).toBe('function');
//   });

//   it('is a function', () => {
//     expect(typeof sumTotalMovies).toBe('function');
//   });
  
//   it('is a string', () => {
//     expect(typeof calcGender).toBe('string');
//   });

  // it('returns total characters', () => {
  //   expect(sumTotalChars(charsTest)).toBe(totalChars);
  // });

  // it('returns total movies, () => {
  //   expect(sumTotalMovies(aniTest)).toBe(totalMovies);
  // });

  // it('genders numbers', () => {
  //   expect(calcGender).toBe(gendersNum);
  // });


