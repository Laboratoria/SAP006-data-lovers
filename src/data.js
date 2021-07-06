import data from "./data/ghibli/ghibli.js";
const films = data.films;

export const filters = (array, key, condition) =>
  array.filter((item) => item[key] === condition);

/*export const sortFilter = (array, key) =>
  sortFilter.sort(function (a, z){


  });  
*/

export const ordenarAZ = (data) => {
  const resultadoAZ = data.sort((a, z) => a.title > z.title ? 1 : -1);
  return resultadoAZ;
};

export const ordenarZA = (data) => {
  const resultadoZA = data.sort((a, z) => a.title > z.title ? -1 : 1);
  return resultadoZA;
};