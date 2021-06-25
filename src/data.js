export const filterData = (data, condicao, condicao2) => {
  
  
  if(condicao !== "" && condicao2 !== ""){
    const filterResults = data.results.filter(results => results.status === condicao && results.gender === condicao2);
    return filterResults;
    }
  
  else if(condicao2 !== ""){
    const filterResults = data.results.filter(results => results.gender === condicao2);
    return filterResults;
  }
  
  else if(condicao !== ""){
    const filterResults = data.results.filter(results => results.status === condicao);
    return filterResults;
  }
  
  
  //console.log(filterResults);
  /*if (filterResults == "") {
    throw TypeError("Valor de filtro vazio")
  }
  else {
    return filterResults;
  }*/
};



export const anotherExample = () => {
  return 'OMG';
};
