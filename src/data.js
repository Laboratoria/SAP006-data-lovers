// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


export function showFilms(film) {
  film.map((name) => console.log(name.title))
}

export function showDescripton(sinopse) {
  sinopse.map((name) => console.log(name.description))
}