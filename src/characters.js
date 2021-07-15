import { filters, sortChar, characters, computeStats } from './data.js';
import data from './data/ghibli/ghibli.js';

const film = data.films;

const chars = characters(film);

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
                <div class="testeCard">
                    <img src="${photo}"/>
                    <p class="title">${name}</p>
                </div>
            </div>
            <div class="backCard">
                <p class="backMovie">Movie: ${backMovie}</p>
                <p class="backText">Age: ${backAge}</p>
                <p class="backText">Gender: ${backGender}</p>
                <p class="backText">Specie: ${backSpecie}</p>
            </div>
            </div>
        </div>
    </div>`;
        charsCards.innerHTML += elementTitle;
    }
}

showingCards(chars);

document.getElementById("countDiv").innerHTML = "There is a total of " + chars.length + " characters";

gender.addEventListener("change", (event) => {
    const selectedGender = event.target.value;
    if (selectedGender === "") {
        document.getElementById("countDiv").innerHTML = "There is a total of " + chars.length + " characters";
        showingCards(chars);
    } else {
        const filtered = filters(chars, "gender", selectedGender);
        showingCards(filtered);

        if (computeStats(filtered, selectedGender) <= 1) {
            document.getElementById("countDiv").innerHTML = "There is " + computeStats(filtered, selectedGender) + " " + selectedGender.toLowerCase() + " character of a total of " + chars.length + "characters";
        } else {
            document.getElementById("countDiv").innerHTML = "There are " + computeStats(filtered, selectedGender) + " " + selectedGender.toLowerCase() + " characters of a total of " + chars.length + "characters";
        }
    }
});

specie.addEventListener("change", (event) => {
    const selectedSpecie = event.target.value;
    if (selectedSpecie === "") {
        document.getElementById("countDiv").innerHTML = "There is a total of " + chars.length + " characters";
        showingCards(chars);
    } else {
        const filtered = filters(chars, "specie", selectedSpecie);
        showingCards(filtered);
        
        if (computeStats(filtered, selectedSpecie) <= 1) {
            document.getElementById("countDiv").innerHTML = "There is " + computeStats(filtered, selectedSpecie) + " " + selectedSpecie.toLowerCase() + " character of a total of " + chars.length + "characters";
        } else {
            document.getElementById("countDiv").innerHTML = "There are " + computeStats(filtered, selectedSpecie) + " " + selectedSpecie.toLowerCase() + " characters of a total of " + chars.length + "characters";
        }
        // document.getElementById("countDiv").innerHTML = "There is/are " + computeStats(filtered, selectedSpecie) + " " + selectedSpecie.toLowerCase() + " character(s) of a total of " + chars.length;
    }

});

sortAZ.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAZ = sortChar(chars, selectedSort);
    showingCards(filterAZ);
});

const inputSearch = document.getElementById("searchBar");
inputSearch.addEventListener("keyup", (e) => {
    const searchString = e.target.value;
    const searchedFilms = chars.filter((people) => {
        return (
            people.name.toLowerCase().includes(searchString) ||
            people.name.toUpperCase().includes(searchString)
        );
    });
    showingCards(searchedFilms);
});
