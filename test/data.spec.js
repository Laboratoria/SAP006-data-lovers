import { filterData, computeStatsGender, orderAz, sortMovies, avarageScore} from "../src/data.js";

const mockCharacters = [
  {
    name: "Satsuki Kusakabe",
    gender: "Female",
    specie: "Human",
  },
  {
    name: "Lusheeta Toel Ul Laputa",
    gender: "Female",
    specie: "Human",
  },
  {
    name: "Mei Kusakabe",
    gender: "Female",
    specie: "Human",
  },
  {
    name: "Pazu",
    gender: "Male",
    specie: "Human",
  },
];

const mockFemaleChar = [
  {
    name: "Satsuki Kusakabe",
    gender: "Female",
    specie: "Human",
  },
  {
    name: "Lusheeta Toel Ul Laputa",
    gender: "Female",
    specie: "Human",
  },
  {
    name: "Mei Kusakabe",
    gender: "Female",
    specie: "Human",
  },
];

const mockMovies = [   
  {
    title: "My Neighbor Totoro",
    producer: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
    people: [
      {
        name: "Satsuki Kusakabe",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Mei Kusakabe",
        gender: "Female",
        specie: "Human",
      },
    ],
  },
  {
    title: "Castle in the Sky",
    producer: "Isao Takahata",
    release_date: "1986",
    rt_score: "95",
    people: [
      {
        name: "Pazu",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Lusheeta Toel Ul Laputa",
        gender: "Female",
        specie: "Human",
      },
    ],
  }
];

describe("filter movies by category", () => {

  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("should return movies by producer", () => {
    const objectIsaoTakahata = {title: "Castle in the Sky",
    producer: "Isao Takahata",
    release_date: "1986",
    rt_score: "95"}
    expect(filterData(mockMovies, "producer", "Isao Takahata")).toMatchObject([objectIsaoTakahata]);
  });

  it("should return character by name", () => {
    const objectMeiKusabe = {
      name: "Mei Kusakabe",
      gender: "Female",
      specie: "Human"
    }
    expect(filterData(mockMovies[0].people, "name", "Mei Kusakabe")).toMatchObject([objectMeiKusabe]);
  });
});

describe("order movies alphabetically", () => {
  it("is a function", () => {
    expect(typeof orderAz).toBe("function");
  });

  it("should return movies in order A-Z", () => { 
    const mockMoviesAz = [
      {
        title: "Castle in the Sky",
        producer: "Isao Takahata",
        release_date: "1986",
        rt_score: "95",
        people: [
          {
            name: "Pazu",
            gender: "Male",
            specie: "Human",
          },
          {
            name: "Lusheeta Toel Ul Laputa",
            gender: "Female",
            specie: "Human",
          },
        ],
      },
      {
        title: "My Neighbor Totoro",
        producer: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
        people: [
          {
            name: "Satsuki Kusakabe",
            gender: "Female",
            specie: "Human",
          },
          {
            name: "Mei Kusakabe",
            gender: "Female",
            specie: "Human",
          },
        ],
      },
    ];
    expect(orderAz(mockMovies, "title")).toStrictEqual(mockMoviesAz);
  });
});

describe("order movies by ascending order", () => {
  it("is a function", () => {
    expect(typeof sortMovies).toBe("function");
  });

  it("should return recent movies first", () => {
    const objectMovieDate = [
    {
      title: "My Neighbor Totoro",
      producer: "Hayao Miyazaki",
      release_date: "1988",
      rt_score: "93",
      people: [
        {
          name: "Satsuki Kusakabe",
          gender: "Female",
          specie: "Human",
        },
        {
          name: "Mei Kusakabe",
          gender: "Female",
          specie: "Human",
        },
      ]
    },
    {
      title: "Castle in the Sky",
      producer: "Isao Takahata",
      release_date: "1986",
      rt_score: "95",
      people: [
        {
          name: "Pazu",
          gender: "Male",
          specie: "Human",
        },
        {
          name: "Lusheeta Toel Ul Laputa",
          gender: "Female",
          specie: "Human",
        },
      ]
    },
  ];    
    expect(sortMovies(mockMovies, "release_date")).toStrictEqual(objectMovieDate);
  });

  it("should return movies with higher score first", () => {
    const objectMovieScore = [
      {
        title: "Castle in the Sky",
        producer: "Isao Takahata",
        release_date: "1986",
        rt_score: "95",
        people: [
          {
            name: "Pazu",
            gender: "Male",
            specie: "Human",
          },
          {
            name: "Lusheeta Toel Ul Laputa",
            gender: "Female",
            specie: "Human",
          },
        ]
      },
      {
        title: "My Neighbor Totoro",
        producer: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
        people: [
          {
            name: "Satsuki Kusakabe",
            gender: "Female",
            specie: "Human",
          },
          {
            name: "Mei Kusakabe",
            gender: "Female",
            specie: "Human",
          },
        ]
      }
    ];
    expect(sortMovies(mockMovies, "rt_score")).toStrictEqual(objectMovieScore);
  });  
});

describe("computeStatsGender", () => {
  it("is a function", () => {
    expect(typeof computeStatsGender).toBe("function");
  });

  it("returns `porcentagem de genero feminino`", () => {
    expect(computeStatsGender(mockCharacters, mockFemaleChar)).toBe("75.00");
  });
});

describe("compute stats avarage scores", () => {
  it("is a function", () => {
    expect(typeof avarageScore).toBe("function");
  });

  it("should return avarage score", () => {
    const movieScores = ["93","95"]
    expect(avarageScore(movieScores)).toBe(94);
  });
});
