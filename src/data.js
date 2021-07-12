export const filterByTag = function (array, botaoClicado){
  const championTags = array.filter(champion => champion.tags[0] == botaoClicado || champion.tags[1] === botaoClicado);
  return championTags;
};
