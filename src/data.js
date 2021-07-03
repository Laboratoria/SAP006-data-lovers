import data from "./data/ghibli/ghibli.js";
export const films = data.films;
export const people = films.reduce(
  (total, film) => total.concat(film.people),
  []
);

export const filtered = (arr, key, value) =>
  arr.filter((item) => item[key] === value);

export const ordered = (arr, order) => {
  if (order === "A-Z") {
    return arr.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else if (order === "Z-A") {
    return arr.sort((a, z) => (a.name > z.name ? -1 : 1));
  } else if (order === "age") {
    return arr.sort((a, z) => a.age - z.age);
  }
  return arr;
};

//  O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar
//  para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.
