import { filterData, computeStatsGender } from '../src/data.js';

const characters = [
    {
      "name": "Satsuki Kusakabe",
      "gender": "Female",
      "specie": "Human"
   },
    {
     "name": "Lusheeta Toel Ul Laputa",
     "gender": "Female",
    "specie": "Human"
    }, 
    {
      "name": "Mei Kusakabe",
      "gender": "Female",
      "specie": "Human"
    }, 
    {
      "name": "Pazu",
      "gender": "Male",
      "specie": "Human"
    }
  ]



const females = [
    {
      "name": "Satsuki Kusakabe",
      "gender": "Female",
      "specie": "Human"
   },
    {
     "name": "Lusheeta Toel Ul Laputa",
     "gender": "Female",
    "specie": "Human"
    }, 
    {
      "name": "Mei Kusakabe",
      "gender": "Female",
      "specie": "Human"
    }, 
  ]

const filmes = [
    {
      "title": "My Neighbor Totoro",
      "producer": "Hayao Miyazaki",
      "release_date": "1988",
      "rt_score": "93",
      "people": [
        {
           "name": "Satsuki Kusakabe",
           "gender": "Female",
           "specie": "Human"
        },
        {
          "name": "Mei Kusakabe",
          "gender": "Female",
          "specie": "Human"
        },
      ]
    },
    {"title": "Castle in the Sky",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      {
        "name": "Pazu",
        "gender": "Male",
        "specie": "Human"
      },
      {
       "name": "Lusheeta Toel Ul Laputa",
       "gender": "Female",
      "specie": "Human"
      }
    ]
  }
 ]

describe('filtar filmes por categoria', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('deve retornar os filmes do produtor', () => {
    expect(filterData(filmes, "producer", "Isao Takahata")).toStrictEqual([filmes[1]]);
  });

  it('deve retornar o personagem com o nome', () => {
    expect(filterData(filmes[0].people, "name", "Mei Kusakabe")).toStrictEqual([filmes[0].people[1]]);
  });
});

/*describe('ordenar filmes', () => {
  it('is a function', () => {
    expect(typeof sortMovies).toBe('function');
  })
 
  it('ordenar por ordem alfabetica', () => {
    expect(sortMovies(filmes, "title")).toStrictEqual([filmes[0], filmes[1]])
  })
  
  it('ordenar por filmes mais recentes', () => {
    expect(sortMovies(filmes, "release_date")).toStrictEqual([filmes[1], filmes[0]])
  })

  it('ordenar por notas mais altas', () => {
    expect(sortMovies(filmes, "rt_score")).toStrictEqual([filmes[0], filmes[1]])
  })

});
*/

describe('computeStatsGender', () => {
  it('is a function', () => {
    expect(typeof computeStatsGender).toBe('function');
  });

  it('returns `porcentagem de genero feminino`', () => {
    expect(computeStatsGender(characters, females)).toBe("75.00");
  });
});
