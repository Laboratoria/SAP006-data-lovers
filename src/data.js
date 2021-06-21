// estas funciones son de ejemplo

export const animations = data.films

export const crescentAlphabet = () => animations.sort((a, b) => (a.title > b.title) ? 1 : -1);//filmes por ordem alfabetica crescente.
export const descendingAlphabet = crescentAlphabet.reverse(); //filmes por ordem alfabetica decrescente.
export const releaseYear = animations.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1); //ordem de lançamento.
export const rattingScore = animations.sort((a, b) => (a.rt_score > b.rt_score) ? 1 : -1); //por avaliação.
export const director = animations.sort((a,b) => (a.director > a.director) ? 1 : -1);//alfabetica diretores.


/*
Filmes por ordem alfabética
const crescentAlphabet = animations.sort((a, b) => {
    if (a.title > b.title) {
    return 1;
} return -1;
});

Filmes por data de lançamento
const releaseYear = animations.sort((a, b) => {
    if (a.release_date > b.release_date) {
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


export const crescentAlphabet = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
