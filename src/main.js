import { filters } from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films;
//console.log(films);

const cards = document.querySelector(".mainCards");

function showingCards(itens) {
    cards.innerHTML = "";
    for (const film of itens) {
        const title = film.title;
        const poster = film.poster;
        const elementTitle = `
    <div class="film"></div>
        <img src="${poster}" />
        <p class="title">${title}</p>
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


//
/*
films.map(function(filmeAtual, indice, array) {
    // console.log("filmeAtual:", filmeAtual)
    // console.log("indice:", indice)
    // console.log("array:", array)
})

for (let i = 0; i < films.length; i++) {
    const element = films[i];
    console.log(i, element)
}
*/

