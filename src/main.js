var counter = 1;
       setInterval(function(){
           document.getElementById('radio' + counter).checked = true;
           counter++;
           if(counter >6){
               counter = 1;
           }
       },4500);

/*

const femaleCharacters = () => {

}

/*

//ordenar

//const filtro = filtraScore(showPosterFilmes())
//const apresentaFilmes = showPosterFilms(bestFilmes)

//chamar a funçao filter( como as melhores notas)

document.getElementById("poster-cards").innerHTML = bestFilmes;

//return console.log(bestFilmes)
const selectDirector = () => {
    
    let diretorSelecionado = "";

    for( let i = 0; i == a; i++) {
        if (diretorSelecionado === a){

        }
    
    
    }

 const selecionaDiretor = document.querySelector('[data-director]');
 selecionaDiretor.addEventListener('click', selectDirector);
};


melhoresFilmes.addEventListener('click', bestScore);
filmesAntigos.addEventListener('click', oldestFilms);
filmesNovos.addEventListener('click', newestFilms);
selectDirector.addEventListener("click", filterDirector);





Aqui tentando dia 27/06:
function filmesCrescent(animations, valueSelected){
    if(valueSelected =filmesAntigos.value) {
        const filmesVelhosSelecionados = releaseYear(animations, valueSelected);
         return showPosterFilms(filmesVelhosSelecionados);
    } else if(valueSelected =filmesNovos.value ) {
        const filmesNovosSelecionados = releaseYear(animations, valueSelected).reverse();
        return showPosterFilms(filmesNovosSelecionados);
    }
}



//testar para gênero :
function showFemale () {
const especieSelecionada = people.filter(personagem => personagem.gender == "Female");
especieSelecionada.forEach(personagem => {showPoster});

} 

animations.forEach(function(date){
  console.log(date.release_date);
}); */ 