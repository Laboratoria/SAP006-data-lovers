export const filterData = (data, condition, condition2) => {

  let filterResults = "";
  
  if(condition === "" && condition2 === ""){
    throw TypeError(alert("Valores dos filtros vazio"));
  } 

  else if(condition !== "" && condition2 !== ""){
    filterResults = data.results.filter(results => results.status === condition && results.gender === condition2);
    return filterResults;
    }
  
  else if(condition2 !== ""){
    filterResults = data.results.filter(results => results.gender === condition2);
    return filterResults;
  }
  
  else if(condition !== ""){
    filterResults = data.results.filter(results => results.status === condition);
    return filterResults;
  }
};



export const anotherExample = () => {
  return 'OMG';
};
