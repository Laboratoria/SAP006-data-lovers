// estas funciones son de ejemplo

export const filterData = (data, condicao) => {
  const vivos = data.results.filter(results => results.status == condicao || results.gender == condicao);
  console.log(vivos);
  return vivos;
};



export const anotherExample = () => {
  return 'OMG';
};
