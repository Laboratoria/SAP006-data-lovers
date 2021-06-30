import { filterDirector } from './src/data.js';
import data from './data/ghibli/ghibli.js';
const films = data.films;
// console.log(films);

const cards = document.querySelector(".mainCards");

for (const film of films) {
    const title = film.title;
    const poster = film.poster;
    const elementTitle = `
    <div class="film">
        <img src="${poster}" />
        <p class="title">${title}</p>
    </div>`;
    // console.log(elementTitle);
    cards.innerHTML += elementTitle;
}

const selectDirector = document.getElementById("director");
selectDirector.addEventListener("change", (event) => {
    const selectedDirector = event.target.value;
    console.log(selectedDirector);
    cards.innerHTML = "";
});

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

