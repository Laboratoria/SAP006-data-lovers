import { computeStats, characters, sortChar } from '../src/data';

const mockFilms = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "the.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
        "name": "Gondoa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
        "name": "Pazu's Mines",
        "img": "",
        "climate": "Dry",
        "terrain": "Hill",
        "surface_water": "0",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
        "name": "Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
        "climate": "Continental",
        "terrain": "City",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
        "name": "Tedis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
        "name": "Air Destroyer Goliath",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
        "description": "A military airship utilized by the government to access Laputa",
        "vehicle_class": "Airship",
        "length": "1,000",
        "pilot": {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska"
        }
      }
    ]
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
    "release_date": "1989",
    "rt_score": "96",
    "people": [
      {
        "id": "4151abc6-1a9e-4e6a-5678-aac05ra641js",
        "name": "Kiki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Witch"
      },
      {
        "id": "7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
        "name": "Jiji",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Jiji.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Cat"
      }
    ],
    "locations": [
      {
        "id": "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2",
        "name": "Ursula's Log Cabin",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/Ursula%27s_Log_Cabin.jpg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e",
        "name": "Koriko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/05/Koriko.jpg",
        "climate": "Mild",
        "terrain": "Hill",
        "surface_water": "50",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "62346d33-caa0-4c17-8016-0aca56f3066b",
        "name": "Karikiya",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/51/Kiki%27s_House.jpg",
        "climate": "Mild",
        "terrain": "City",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "64a996aa-481e-4627-9624-ab23f59a05a9",
        "name": "Guchokipanya",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Gutiokipanja.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "50",
        "residents": [
          {
            "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
            "name": "Osono"
          },
          {
            "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
            "name": "Fukuo"
          }
        ]
      }
    ],
    "vehicles": []
  }]

// const mockReturn = [{
//   "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
//   "name": "Pazu",
//   "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
//   "gender": "Male",
//   "age": "13",
//   "eye_color": "Black",
//   "hair_color": "Brown",
//   "specie": "Human",
//   "movie": "Castle in the Sky"
// }]

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('se forneço array de 5, retorna o length de 5', () => {
    expect(computeStats(["chihiro", "noface", "totoro", "kiki", "howl"])).toBe(5);
  });
});

describe('characters', () => {
  it('is a function', () => {
    expect(typeof characters).toBe('function');
  });

  it('oi', () => {
    expect(characters(mockFilms)).toHaveLength(4);
  });

  // it('tchau', () => {
  //   expect(characters(mockFilms)).toMatchObject({});
  // });
});

const sortAnimals = ["cat", "dog", "lion", "seal", "zebra"];
// const sortAtoZ = ((a, z) => a.name > z.name ? 1 : -1);

describe('sortChar', () => {
  it('is a function', () => {
    expect(typeof sortChar).toBe('function');
  });

  it('is working for A to Z', () => {
    expect(sortChar(typeOf, array)).toReturn(sortAnimals);
  })
});


// describe('sortChar', () => {
//   it('is a function', () => {
//     expect(typeof sortChar).toBe('function');
//   });

//   it('', () => {
//     expect().toBe('');
//   })
// })