// estas funciones son de ejemplo


export const filterData = (data, type, condition) => data.filter((element) => {
  return element[type] === condition;
});

export const orderAz = (data, type) => 
  data.sort((a,b) => {
  const x = a[type].toUpperCase();
  const y = b[type].toUpperCase();  
    if(x === y){
      return 0
    } else if (x < y){
      return -1
    } else {
      return 1
    }
})
  /*
  if (condition === "score"){
    return b.rt_score - a.rt_score 
  }

  if (condition === "date"){
    return b.release_date - a.release_date 
  }
})
*/

export const computeStatsGender = (data, dataValue) => {
  return ((dataValue.length * 100) / data.length).toFixed(2)
}

export const avarageScore = (data) => 
  data.reduce((accumulator, currentValue) => {
    return Number(accumulator) + Number(currentValue) / 20
  },0);


//ordenar alfabetico 

// calculo agregado
