import { showFilms, showDirectors } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(showFilms(data.films))

//função para criar cards dos filmes
//const listaFilmes = showFilms(data.ghibli)

const printCardsFilms = (listaFilmes) => {
    listaFilmes.forEach(film => {
        const filmCardsElements = document.getElementById("boxFilmCards");
        filmCardsElements.innerHTML += `
        <div class="filmCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <img class="filmPoster" src= ${film.poster}>
                </div>
                <div class="backCard">
                    <h3 class="filmTitle"> ${film.title}</h3> 
                    <br>
                    <p> <b>Diretor:</b> ${film.director} </p>
                    <p> <b>Produtor:</b> ${film.producer} </p>
                    <p> <b>Ano de Lançamento:</b> ${film.release_date} </p>
                    <p><b> Sinopse</b>: ${film.description} </p>                
                </div>
            </div>
        </div>`
    })
}

console.log(showDirectors(data.director))

const printCardsDirectors = (directorList) => {
    directorList.forEach(director => {
        const directorsCardsElements = document.getElementById("boxDirectorsCards");
        directorsCardsElements.innerHTML += `
        <div class="filmCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <img class="directorImg" src= ${director.img}>
                </div>
                <div class="backCard">
                    <h2 class="directorName"> ${director.name}</h2> 
                </div>
            </div>
        </div>`
    })
}


/*const printCardsCharacters = (characterList) => {
    characterList.forEach(character => {
        const characterCardsElements = document.getElementById("boxCharacaterCards");
        characterCardsElements.innerHTML += `
        <div class="filmCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <img class="peopleImg" src= ${character.img}>
                </div>
                <div class="backCard">
                    <h2 class="peopleName"> ${character.name}</h2> 
                </div>
            </div>
        </div>`
    })
}*/


// const botaoFilmes = document.getElementById("animation")

// botaoFilmes.addEventListener("click", () => {
//     const listaFilmes =  showFilms(data.ghibli)
//     printCardsFilms(listaFilmes)
// })

printCardsFilms(data.films)
printCardsCharacters(data.people)

