import { showFilms } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(showFilms(data.films))

//função para criar cards dos filmes
//const listaFilmes = showFilms(data.ghibli)

const printCardsFilms = (listaFilmes) => {
    listaFilmes.forEach(film => {
        const cardElements = document.getElementById("card");
        cardElements.innerHTML += `<div class="cartaoFilme">
            <h2 class="title"> ${film.title} </h2>
            <img class="poster" src= ${film.poster}>
            </div>`
    })
}

    const botaoFilmes = document.getElementById("animation")

    botaoFilmes.addEventListener("click", () => {
        const listaFilmes = showFilms(data.ghibli)
        printCardsFilms(listaFilmes)
    })

printCardsFilms(data.films)