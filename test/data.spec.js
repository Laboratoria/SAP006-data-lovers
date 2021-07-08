import { computeStats, filterData, sortData, searchName } from "../src/data.js";

const mockData =
  [{
    "id": 179,
    "name": "Jessica",
    "status": "Alive",
    "gender": "Female",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/6"
    ]
  },
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "gender": "Male",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31"
    ]
  },
  {
    "id": 153,
    "name": "Hamster In Butt",
    "status": "Alive",
    "gender": "unknown",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/19"
    ]
  }]


describe("filterData", () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it("should throw TypeError when invoked with wrong argument types", () => {
    expect(() => filterData("")).toThrow(TypeError);
  });

  it("should return the gender and status of the character", () => {
    const genderAndStatusExpected = filterData(mockData, "Alive", "Male").length;
    const genderAndStatusResults = 1;
    expect(genderAndStatusExpected).toEqual(genderAndStatusResults);
  });

  it("should return all characters that is Alive", () => {
    const statusExpected = filterData(mockData, "Alive", "").length;
    const statusResults = 3;
    expect(statusExpected).toEqual(statusResults);
  });

  it("should return all characters that is Male", () => {
    const genderExpected = filterData(mockData, "", "Male").length;
    const genderResults = 1
    expect(genderExpected).toEqual(genderResults);
  });
});


describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("should return main characters", () => {
    const filterExpected = sortData(mockData);
    const orderExpected = filterExpected[0];
    const orderResults = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "gender": "Male",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
      ]
    }
    expect(orderExpected).toEqual(orderResults);
  });
});

describe("computeStats", () => {
  it("is a object", () => {
    expect(typeof computeStats).toBe("object");
  });

  it("compute.characters should return total characters", () => {
    const totalCharactersExpected = computeStats.characters(mockData);
    const totalCharactersResults = 3;
    expect(totalCharactersExpected).toEqual(totalCharactersResults);
  });

  it("compute.gender should return gender average", () => {
    const genderAverageExpected = computeStats.gender(mockData, "Male");
    const genderAverageResults = 33.33;
    expect(genderAverageExpected).toEqual(genderAverageResults);
  });
});

describe("searchName", () => {
  it("is a function", () => {
    expect(typeof searchName).toBe("function");
  });
  it("shoul return characters by name", () => {
    const nameExpected = searchName(mockData, "butt");
    const nameResults = [
      {
        "id": 153, 
        "name": "Hamster In Butt", 
        "status": "Alive",
        "gender": "unknown", 
        "episode": ["https://rickandmortyapi.com/api/episode/8", 
        "https://rickandmortyapi.com/api/episode/19"]
      }]
    expect(nameExpected).toEqual(nameResults);
  });
})