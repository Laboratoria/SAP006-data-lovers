// estas funciones son de ejemplo

export const filterNames = (Array, searchName) => {
  if (searchName == "") {
    throw TypeError("Valor de filtro vazio")

  } else {
    let filteredNames = Array.filter(champion => champion.id.toUpperCase().includes(searchName));
    return filteredNames;
  }
};

export const filterByTag = function (array, string){ //mudei para string assim, poderíamos usar  qualquer variável como argumento
  const championTags = array.filter(champion => champion.tags[0] == string || champion.tags[1] === string);
  return championTags;
};


export const difficultyOrder = (array, chosendifficulty) => {  
  let dataLol2 = array.slice(0, array.length)
  let order = dataLol2.sort((a, b) => (a.info.difficulty - b.info.difficulty));
  let filteredNames = []

  switch (chosendifficulty){
    case '1':
      return array
      break

    case '2':
      filteredNames = order.filter(champion => champion.info.difficulty <= 4);
      return filteredNames;
      break
    
    case '3':
      filteredNames = order.filter(champion => champion.info.difficulty > 4 && champion.info.difficulty <= 7)
      return filteredNames;
      break
      
    case '4': 
      filteredNames = order.filter(champion => champion.info.difficulty > 7);
      return filteredNames;
        break
      
      default: 
        window.alert(`Sorry, chose your champion.`)      
  }
};

/*
  if (chosendifficulty === '2') {
    let filteredNames = order.filter(champion => champion.info.difficulty <= 4);
    return filteredNames;

  } else if (chosendifficulty === '3') {
    let filteredNames = order.filter(champion => champion.info.difficulty > 4 && champion.info.difficulty <= 7)
    return filteredNames;

  } else if (chosendifficulty === '4')  {
    let filteredNames = order.filter(champion => champion.info.difficulty > 7);
    return filteredNames;
  }*/