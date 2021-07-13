import { filters, sortChar, characters } from './data.js';
import data from './data/ghibli/ghibli.js';

const film = data.films;
//const movieTitle = char.title;
//console.log (movieTitle);

const chars = characters (film);


const charsCards = document.getElementById("characterCards");

function showingCards(itens) {
    charsCards.innerHTML = "";
        for (const people of itens) {
        const name = people.name;
        const photo = people.img;
        const backAge = people.age;
        const backGender = people.gender;
        const backSpecie = people.specie;
        const backMovie = people.movie;
        const elementTitle = `
    <div id="divCard" class="film">
        <div class="innerCard">
        <div class="frontCard">
            <img src="${photo}"/>
            <p class="title">${name}</p>
        </div>
        <div class="backCard">
            <p class="backMovie">Movie: ${backMovie}</p>
            <p class="backText">Age: ${backAge}</p>
            <p class="backText">Gender: ${backGender}</p>
            <p class="backText">Specie: ${backSpecie}</p>
        </div>
        </div>
    </div>`;
        charsCards.innerHTML += elementTitle;
    }
}

showingCards(chars);

gender.addEventListener("change", (event) => {
    const selectedGender = event.target.value;
    const filtered = filters(peopleList, "gender", selectedGender);
    showingCards(filtered);
});


specie.addEventListener("change", (event) => {
    const selectedSpecie = event.target.value;
    const filtered = filters(peopleList, "specie", selectedSpecie);
    showingCards(filtered);
});

sortAZ.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAZ = sortChar(peopleList, selectedSort);
    showingCards(filterAZ);
}
);

const inputSearch = document.getElementById("searchBar");
inputSearch.addEventListener("keyup", (e) => {
    const searchString = e.target.value;
    const searchedFilms = peopleList.filter((people) => {
        return (
            people.name.toLowerCase().includes(searchString) ||
            people.name.toUpperCase().includes(searchString)
        );
    });
    showingCards(searchedFilms);
});