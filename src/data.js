// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const dataRM = {
  
  //FUNÇÃO FILTRAR

  filterData:
    function (data, condition) {
      return data.filter(condition);
    },

  //FUNÇÃO ORDENAR CRESCENTE
  
  sortData:
    function (data, sortBy, sortOrder) {
      sortOrder == "crescente" ?
        data.sort((a, b) => { return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0 }) :
        data.sort((a, b) => { return a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0 })
    },

}