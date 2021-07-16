export const filters = (array, key, condition) =>
  array.filter((item) => item[key] === condition);

export const sortAtoZ = (data, order) => {
  if (order === "A-Z") {
    return data.sort((a, z) => a.title > z.title ? 1 : -1);
  } else if (order === "Z-A") {
    return data.sort((a, z) => a.title > z.title ? -1 : 1);
  }
};

function terrainFilter(films) {
  let chosenTerrain = document.getElementById("terrain").value;
  let hasChosen = false;
  for (let i = 0; i < films.locations.length; i++) {
    if (films.locations[i].terrain === chosenTerrain) {
      hasChosen = true;
    }
  }
  return hasChosen;
}

export const terrainArray = (array) =>
  array.filter(terrainFilter);

export const sortChar = (data, order) => {
  if (order === "A-Z") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1);
  } else if (order === "Z-A") {
    return data.sort((a, z) => a.name > z.name ? -1 : 1);
  }
};

export const characters = (films) => {
  const peopleList = [];
  for (let i = 0; i < films.length; i++) {
    for (let j = 0; j < films[i].people.length; j++) {
      const char = films[i].people[j]
      char.movie = films[i].title;
      peopleList.push(char);
    }
  }
  // console.log(peopleList);
  return peopleList;
};

export const computeStats = (chars) => {
  const total = chars.length;
  return total;
};

