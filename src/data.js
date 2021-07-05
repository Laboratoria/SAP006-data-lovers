const ordersAbc = {
orderAZ: function orderAZ(data){
  const resultsAZ = data.sort((a, z) => a.name > z.name ? 1 : -1)
  return resultsAZ;
},
orderZA: function orderZA(data){
  const resultsZA = data.sort((a, z) => a.name < z.name ? 1 : -1)
  return resultsZA
},
filterDifficultyMenor: function filterDifficulty(champions, difficulty){
  const charactersFilter = champions.filter(function(champion){
      return champion.info.difficulty <= difficulty;
  })
      return charactersFilter
},
filterDifficultyMaior: function filterDifficulty(champions, difficulty){
  const charactersFilter = champions.filter(function(champion){
      return champion.info.difficulty >= difficulty;
  })
      return charactersFilter
}
}

export default ordersAbc