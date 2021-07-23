export const getPeople = (films) =>
  films.reduce((total, film) => total.concat(film.people), []);

export const filtered = (arr, key, value) =>
  arr.filter((item) => item[key] === value);

export const orderChar = (arr, order) => {
  if (order === "A-Z") {
    return arr.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else if (order === "Z-A") {
    return arr.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};

export const orderAni = (arr, order) => {
  if (order === "A-Z"){
      return arr.sort((a, z) => (a.title > z.title ? 1 : -1));
  }else if (order === "Z-A") {
      return arr.sort((a, z) => (a.title > z.title ? -1 : 1));
  }};

// export const calcGender = (gender, total) => {
//   return gender * 100 / total }