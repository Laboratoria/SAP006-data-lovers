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

export const filterData = (data, getDirector) => {
   const filterDirector = data.filter(name => name.director.toLowerCase().includes(getDirector.toLowerCase()))
   return filterDirector
};

export const calculateAvgScore = (arr) => {
  const scores = arr.reduce(function (total, film) {
      const filmScore = Number(film.rt_score)
      return total + filmScore
  }, 0);
  const average = scores / arr.length
  return average.toFixed(2)
};

/*export const agruparScore = function agruparPor(objetoArray, propriedade) {
  return objetoArray.reduce(function (acc, obj) {
    let key = obj[propriedade];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};*/