
export const filterDirectorSelected = (animations, valueSelected) =>
animations.filter(item => item.director === valueSelected);

export const releaseYear = (animations) =>  
animations.sort((a, b) => (a.release_date > b.release_date ? 1 : -1)); //ordem de lançamento.
/*Obs: Filmes por data de lançamento
const releaseYear = animations.sort((a, b) => {
    if (a.release_date > b.release_date) {
        return 1;
    } return -1;
});*/

export const order = (characters) => 
characters.sort((a, b)=> (a.name > b.name ? 1 : -1));
//export const rattingScore = animations.sort((a, b) => (a.rt_score > b.rt_score) ? 1 : -1); //por avaliação.
//export const avaliacao = films.filter(films => (films.rt_score > 70));


/*
const equal = (one, other) => films.filter(one) === JSON.stringify(other);

const bestsScores = films.filter(film => (film.rt_score > "70"));

export const filtraScore = () => {
  
  for (let a in films)
    console.log(a.rt_score);

  const rt_score = a.filter(a => (a.rt_score));
  //const bola = a.filter(rt_score >= 70);
  //if( a.rt_score >= 70);

  

  
  //const rtScore = a.rt_score > b.rt_score ? 1: -1
  //const rt_score = a.filter(a => (a.rt_score >= c));
  //organizar scores do maior(100 pontos) para o menor
  /*
  const bestScore = rt_score.sort((a, b) => {
    const highest = a.passed - a.year;
    const lowest = b.passed - b.year;
    return last > next ? -1 : 1;
  });
  
  return rtScore
 
};
 */

export function ordenaFilmes(a, b){

  const releaseYear = (animations) => animations.sort((a.release_date > b.release_date) ? 1 : -1); 
  //ordena por ano de lançamento.
  
  //(animations.sort((a,b)=>(a.rt_score > b.rt_score? 1:-1)))

  return releaseYear
};


/*export const crescentAlphabet = animations.sort((a, b) => (a.title > b.title ? 1 : -1));//filmes por ordem alfabetica crescente.

const crescentAlphabet = animations.sort((a, b) => {
  if (a.title > b.title) {
  return 1;
} return -1;
});

//export function filterDirectorSelected(animations, valueSelected) {
//animations.filter(animations => animations.director === valueSelected);
//} 
//Perguntar pq quando tento function retorna "animations is not interable"

/*function showFemale () {
const especieSelecionada = people.filter(personagem => personagem.gender == "Female");
especieSelecionada.forEach(personagem => {showPoster});
}
export const example = () => {
  //return 'example';
};


export const crescentAlphabet = animations.sort((a, b) => (a.title > b.title ? 1 : -1);//filmes por ordem alfabetica crescente.
export const descendingAlphabet = crescentAlphabet.reverse(); //filmes por ordem alfabetica decrescente.
export const releaseYear = animations.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1); //ordem de lançamento.
export const rattingScore = animations.sort((a, b) => (a.rt_score > b.rt_score) ? 1 : -1); //por avaliação.
export const director = animations.sort((a,b) => (a.director > a.director) ? 1 : -1);//alfabetica diretores.


const totalFilmes = data.films.lenght
console.log(totalFilmes)



Filmes por ordem alfabética
const crescentAlphabet = animations.sort((a, b) => {
    if (a.title > b.title) {
    return 1;
} return -1;
});


/Ordem alfabética A-Z (personagens)
//const azName = characters.sort((a, b) => (a.name > b.name) ? 1 : -1);
//console.log(azName);

(Para tentar depois)
export const characters = data.films.people 
//Ordem alfabética Z-A (personagens)
//const zaName = azName.reverse();


export const releaseYear = (animations, valueSelected) => {
  const order = animations.sort((a,b)=> (a.release_date >b.release_date ? 1 : -1));
  if(valueSelected === filmesAntigos) {
    return order;
  } else {
    return order.reverse();
  }
}

//export const example = () => {
  //return 'example';
//};

//export const anotherExample = () => {
  //return 'OMG';
}; */
