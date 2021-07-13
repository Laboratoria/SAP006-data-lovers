import data from "./data/ghibli/ghibli.js";
const films = data.films;

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
  let terrenoEscolhido = document.getElementById("terrain").value;
  let temIsso = false;
  for (let i = 0; i < films.locations.length; i++) {
    if (films.locations[i].terrain === terrenoEscolhido) {
      temIsso = true;
    }
  }
  return temIsso;
}

export const terreno = (array) => 
  array.filter(terrainFilter); 

export const sortChar = (data, order) => {
  if (order === "A-Z") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1);
  } else if (order === "Z-A") {
    return data.sort((a, z) => a.name > z.name ? -1 : 1);
  }
}; 

