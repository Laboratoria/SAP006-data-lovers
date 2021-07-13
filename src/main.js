import { filters, sortAtoZ, terreno } from './data.js';
import data from './data/ghibli/ghibli.js';

window.onscroll = function () { stickyFilter() };
let filterBar = document.getElementsByClassName("filterSearch");
let sticky = filterBar.offsetTop;
function stickyFilter() {
    if (window.pageYOffset >= sticky) {
        filterBar.classList.add("sticky")
    } else {
        filterBar.classList.remove("sticky");
    }
}

const films = data.films;

const cards = document.querySelector(".mainCards");

function showingCards(itens) {
    cards.innerHTML = "";
    for (const film of itens) {
        const title = film.title;
        const poster = film.poster;
        const backDirector = film.director;
        const backYear = film.release_date;
        const backRt = film.rt_score;
        const elementTitle = `
    <div id="divCard" class="film">
        <div class="innerCard">
            <div class="frontCard">
                <div class="testeCard">
                <img alt="Film poster" src="${poster}"/>
                <p class="title">${title}</p>
                </div>
            </div>
            <div class="backCard">
                <p class="backText">Release Year: ${backYear}</p>
                <p class="backText">Director: ${backDirector}</p>
                <p class="backText">Rating Score: ${backRt}</p>
            </div>
        </div>
    </div>`;
        cards.innerHTML += elementTitle;
    }
}

showingCards(films);


sortAZ.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAZ = sortAtoZ(films, selectedSort);
    showingCards(filterAZ);
});

// fazer cálculo agregado:
releaseDate.addEventListener("change", (event) => {
    const selectedDate = event.target.value;
    const filtered = filters(films, "release_date", selectedDate);
    showingCards(filtered);
});

director.addEventListener("change", (event) => {
    const selectedDirector = event.target.value;
    const filtered = filters(films, "director", selectedDirector);
    showingCards(filtered);
});

// fazer cálculo agregado:
rating.addEventListener("change", (event) => {
    const selectedRating = event.target.value;
    const filtered = filters(films, "rt_score", selectedRating);
    showingCards(filtered);
});

terrain.addEventListener("change", (event) => {
    const selectedTerrain = event.target.value;
    const filtered = terreno(films, selectedTerrain);

    showingCards(filtered);
});

const inputSearch = document.getElementById("searchBar");
inputSearch.addEventListener("keyup", (e) => {
    const searchString = e.target.value;
    const searchedFilms = films.filter((films) => {
        return (
            films.title.toLowerCase().includes(searchString) ||
            films.title.toUpperCase().includes(searchString)
        );
    });
    showingCards(searchedFilms);
});