// estas funciones son de ejemplo

//export const example = () => {
  //return 'example';
//};

//export const anotherExample = () => {
  //return 'OMG';
//};

export filtrar from './main.js';

function filtrar (item) {
  const pokemon_filtrados = data.pokemon.filter(function(item) {
  return item.type.includes("water")
});
