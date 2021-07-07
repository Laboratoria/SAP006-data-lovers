// estas funciones son de ejemplo


export const filterData = (data, type, condition) => data.filter((element) => {
  return element[type] === condition;
});

export const sortMovies = (data, condition) => data.sort((a,b) => {
  const x = a.title.toUpperCase();
  const y = b.title.toUpperCase();
  if(condition === "alphabetic"){
    if(x === y){
      return 0
    } else if (x < y){
      return -1
    } else {
      return 1
    }
  }

  if (condition === "score"){
    return b.rt_score - a.rt_score 
  }

  if (condition === "date"){
    return b.release_date - a.release_date 
  }
})

export const computeStatsGender = (data, dataValue) => {
  return Math.round((dataValue * 100)/data)
}


//ordenar alfabetico 

// calculo agregado
