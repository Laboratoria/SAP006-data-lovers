/*export const filtroPersonagem = (data,propriedade) => {
const filtro = data.filter((genero) => genero.gender == propriedade)
return filtro 
};
/*
export const anotherExample = () => {
};*/
export const filterGenderSelected = (dataBase, valueGenderSelected) =>
  dataBase.filter((dataBase) => dataBase.gender === valueGenderSelected);
 
export const filterSpeciesSelected = (dataBase, valueSpeciesSelected) =>
  dataBase.filter((dataBase) => dataBase.species === valueSpeciesSelected);

export const filterStatusSelected = (dataBase, valueStatusSelected) =>
  dataBase.filter((dataBase) => dataBase.status === valueStatusSelected);

  export const sortOrder = (dataBase, valueSpeciesSelected) => {
    const order = dataBase.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
    switch (valueSpeciesSelected) {
      case "az":
        return order
      case "za":
        return order.reverse()
     /* case "relevance":
        return dataBase.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));*/
    }
  };
  export const calcFilter = (dataBase, selectedFilter) =>
  parseFloat((selectedFilter.length * 100) / dataBase.length).toFixed(2);
