import { filters, ordenarAZ } from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films;
//console.log(films);

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
            <img src="${poster}"/>
            <p class="title">${title}</p>
        </div>
        <div class="backCard">
            <p class="backText">Release Year: ${backYear}</p>
            <p class="backText">Director: ${backDirector}</p>
            <p class="backText">Rating Score: ${backRt}</p>
        </div>
        </div>
    </div>`;
        // console.log(elementTitle);
        cards.innerHTML += elementTitle;
    }
}

showingCards(films);

director.addEventListener("change", (event) => {
    const selectedDirector = event.target.value;
    const filtered = filters(films, "director", selectedDirector);
    showingCards(filtered);

    //console.log(selectedDirector);
    //cards.innerHTML = "";
});

releaseDate.addEventListener("change", (event) => {
    const selectedDate = event.target.value;
    const filtered = filters(films, "release_date", selectedDate);
    showingCards(filtered);

    //console.log(selectedDirector);
    //cards.innerHTML = "";
});

//REVER: (mesma lógica para os personagens)
terrain.addEventListener("change", (event) => {
    const selectedTerrain = event.target.value;
    const filtered = filters(films, "locations(terrain)", selectedTerrain);
    showingCards(filtered);

    //console.log(selectedDirector);
    //cards.innerHTML = "";
});

sortAZ.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAZ = ordenarAZ(films, selectedSort);
    showingCards(filterAZ);
}   
);


// films.map(function(filmeAtual, indice, array) {
//     console.log("filmeAtual:", filmeAtual)
//     console.log("indice:", indice)
//     console.log("array:", array)
// })

// for (let i = 0; i < films.length; i++) {
//     const element = films[i];
//     console.log(i, element)
// };