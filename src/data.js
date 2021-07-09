
//filtra diretor
export const filterDirectorSelected = (animations, valueSelected) => animations.filter(item => item.director === valueSelected);

//ordem de lançamento
export const releaseYear = (animations) => animations.sort((a, b) => (a.release_date > b.release_date ? 1 : -1)); 

export const decrescentReleaseYear = (animations) => (releaseYear(animations).reverse());

//ordena por avaliação
export const rattingScore = (animations) => animations.sort((a, b) => (Number(a.rt_score)) < (Number(b.rt_score)) ? 1 : -1); 


//ordena por letras
export const order = (characters) => characters.sort((a, b) => (a.name > b.name ? 1 : -1));

export const decrescentAlphabeticOrder = (characters) => (order(characters).reverse());


export const filterSpeciesSelected = (characters, valueSelected) => characters.filter(item => item.specie === valueSelected);

export const filterGender = (characters, valueSelected) => characters.filter(item => item.gender === valueSelected);

export const filterAge = (characters, gender) => characters.filter(item => item.age == gender);


//calcula idade média
export const averageAge = (chars) => {
  
  const total  = chars.length

  const soma = chars.reduce(function(ages, char){
    const item = Number(char.age)
    const ehNumber = !isNaN(item)
    console.log(ages)
    if (ehNumber){
      return ages + item
    } 
    return ages
  }, 0);

  const mediaAge = Math.round(soma / total);

  return mediaAge
};




