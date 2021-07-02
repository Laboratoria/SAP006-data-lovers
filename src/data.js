import data from "./data/ghibli/ghibli.js";
const films = data.films;

export const filters = (array, key, condition) =>
  array.filter((item) => item[key] === condition);
