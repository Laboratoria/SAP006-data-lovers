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
    expect(filterData(mockData, "Alive", "Male").length).toEqual(1);
  });

  it("should return all characters that is Alive", () => {
    expect(filterData(mockData, "Alive", "").length).toEqual(3);

  });

  it("should return all characters that is Male", () => {
    expect(filterData(mockData, "", "Male").length).toEqual(1);
  });
});


describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("should return main characters", () => {
    sortData(mockData);
    expect(mockData[0]).toEqual({
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
    });
  });
});

describe("computeStats", () => {
  it("is a object", () => {
    expect(typeof computeStats).toBe("object");
  });

  it("compute.characters should return total characters", () => {
    expect(computeStats.characters(mockData)).toEqual(3);
  });

  it("compute.gender should return gender average", () => {
    expect(computeStats.gender(mockData, "Female")).toEqual(33.33);
  });
});

describe("searchName", () => {
  it("is a function", () => {
    expect(typeof searchName).toBe("function");
  });
  it("shoul return characters by name", () => {
    expect(searchName(mockData, "butt")).toEqual([
      {
        "id": 153, 
        "name": "Hamster In Butt", 
        "status": "Alive",
        "gender": "unknown", 
        "episode": ["https://rickandmortyapi.com/api/episode/8", 
        "https://rickandmortyapi.com/api/episode/19"]
      }]
     )
  });
})