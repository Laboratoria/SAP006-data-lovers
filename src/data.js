// estas funciones son de ejemplo

export const filterData = (data, condicao) => {
  const filterResults = data.results.filter(results => results.status === condicao || results.gender === condicao);
  console.log(filterResults);
  if (filterResults == "") {
    throw TypeError("Valor de filtro vazio")
  }
  else {
    return filterResults;
  }
};



export const anotherExample = () => {
  return 'OMG';
};
