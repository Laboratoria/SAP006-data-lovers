
export const filterData = (data, condition)=> {
  const filter = data.films.filter(condition => condition==="true")
  return filter;
};

export const sortData = (data, sortBy, sortOrder) => {
  const compareAlphabet = (a,b) =>{
    if (a.title < b.title)
       return -1
    if (a.title > b.title)
      return 1
    return 0
  }

  const compareReleaseDate = (a,b) => {
    if (a.release_date < b.release_date)
       return -1
    if (a.release_date > b.release_date)
      return 1
    return 0
  }


  if(sortBy==="Alfabeth"){
    if(sortOrder==="Ascending"){
      let ascTitles = [...data]
      ascTitles.sort(compareAlphabet)
      return ascTitles
      
    } else {
      let descTitles = [...data]
      descTitles.sort(compareAlphabet)
      descTitles.reverse()
      return descTitles
    }
  }
  else if(sortBy==="Release") {
    if(sortOrder==="Ascending"){
      let ascRelease = [...data]
      ascRelease.sort(compareReleaseDate)
      return ascRelease

    }else{
      let descRelease = [...data]
      descRelease.sort(compareReleaseDate)
      descRelease.reverse()
      return descRelease
    }
  }





};











export const computeStats = (data) => {
  return 'OMG';
};



// filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.

// sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.

// computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.