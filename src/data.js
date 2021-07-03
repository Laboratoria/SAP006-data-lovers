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

export const sortData = (data) => data.results.sort( (a,b) => b.episode.length - a.episode.length);


export const computeStats = {
  
  characters: (data) => {data.results.filter(r => r.id !== "").length 
},

  gender: (data, genderParameter) => {
  
  let total = [];
  let average = [];
  for (let gender of data.results){
    if (gender.gender == genderParameter){
      total.push(gender.gender);
      average = ((total.length/data.results.length) * 100).toFixed(2)
    }
  }
  return average;
}
}