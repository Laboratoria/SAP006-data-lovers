


export const ordemAlfabetica = (data, order) => {
  if (order === "crescente") {
  return data.sort((a, z) => a.title > z.title ? 1 : -1)
  } else if (order === "decrescente") {
  return data.sort((a, z) => a.title > z.title ? -1 : 1)
  } return data
  }; 


  /*export const gender = (data, genero) => {
    if (gender === "feminino") {
    return data.filter()
    } else if (order === "decrescente") {
    return data.sort((a, z) => a.title > z.title ? -1 : 1)
    } return data
    }; */
  

/*export const anotherExample = () => {
  return 'OMG';
};*/

