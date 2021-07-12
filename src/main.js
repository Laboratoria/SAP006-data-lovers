import { showFilms, sortData } from './data.js';
import data from './data/ghibli/ghibli.js';


const clean = () => {
    boxFilmCards.innerHTML = "";
  }

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

printCardsFilms(data.films) 


btnFilmsAZ.addEventListener("click",() => {
    clean()
    const filmsOrder = sortData (data.films, ["title"], "asc")
    printCardsFilms(filmsOrder)
})

btnFilmsZA.addEventListener("click",() => {
    clean()
    const filmsOrder = sortData (data.films, ["title"], "desc")
    printCardsFilms(filmsOrder)
})


