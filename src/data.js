// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


export function showFilms(film) {
  film.map((name) => console.log(name.title))
};

export const sortData = (data, sortBy, sortOrder) => {
  const compare = (a, b) => {
    if(typeof a[sortBy] !== "number") {
      if(a[sortBy] < b[sortBy]) { 
      return -1
  } else {
    return 0;
    }
  } else {
    return a[sortBy] - b[sortBy];
    }
  }
    if(sortOrder === "asc"){
    data.sort(compare);
    return data;
  
  } else {
    data.sort(compare);
    data.reverse();
    return data;
   } 
  
  };
  
 


// filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.

// sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. 
 //O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, 
 //indica se quer ordenar de maneira crescente ou decrescente.

// computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo 
 //com o que os dados permitem.