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
        const poster = film.poster;
        const title = film.title;
        const backYear = film.release_date;
        const backDirector = film.director;
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
                <p class="backText"><i class="material-icons">event</i> Release Year: ${backYear}</p>
                <p class="backText"><i class="material-icons">face</i> Director: ${backDirector}</p>
                <p class="backText"><i class="material-icons">star_rate</i> Rating Score: ${backRt}</p>
               <!--- <div id="popupDiv">
                    <button onclick="createPopup()" class="backText" id="moreInfo">CLICK FOR MORE</button>
                </div> -->
            </div>
        </div>
    </div>`;
        cards.innerHTML += elementTitle;
    }
}

showingCards(films);

// function createPopup(itens) {
//     for (const film of itens) {
//     const textDescription = film.description; 
//     let btnInfo = document.createElement("div");
//     let contentInfo = document.createElement("p")
//     contentInfo += textDescription;
//     btnInfo.innerHTML = textDescription;
//     document.getElementById("popupDiv").appendChild(contentInfo);
//     }
//     showingCards();
// } 

// clickSynopsis.addEventListener("click-on", (event) => {
//     const popupSynopsis = document.createElement("div")
// })

//clickSynopsis.addEventListener("click-on", (event) => {
    //const popupSynopsis = document.createElement("div")
//})

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