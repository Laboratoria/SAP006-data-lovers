//Funções para ordenar;



 //Funções para filtrar;

export const filterData = (data, condition) => {
  const filterOn = data.results.filter(results => results.name === condition || results.status === condition ||
  results.species === condition || results.origin.name);
  if (filterGo == "") {
    throw TypeError("Selecione um filtro")
  }
  else{
    return filterOn;
  }
}

//Funções para cálculo agregado;


/*
export const anotherExample = () => {
  return 'OMG';
*/