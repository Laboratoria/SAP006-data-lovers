export const filterData = (data, condition) => {
  
  const statusMorto= data.results.filter(results => results.status === condition)
    if(statusMorto == ""){
      throw TypeError ("Selecione um filtro") 
    }  
    else{
      return statusMorto;
    }
    
      
};

console.log(filterData(status, "Dead")); 
  









    
     

  

  

 
 





/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

