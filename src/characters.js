import { filters, sortChar } from './data.js';
import data from './data/ghibli/ghibli.js';

const char = data.films;
//console.log(char);

const peopleList = [];
for (let i = 0; i < char.length; i++) {
    for (let j = 0; j < char[i].people.length; j++) {
        peopleList.push(char[i].people[j]);
    }
};

const charsCards = document.getElementById("characterCards");

function showingCards(itens) {
    charsCards.innerHTML = "";
    for (const people of itens) {
        const name = people.name;
        const photo = people.img;
        const backAge = people.age;
        const backGender = people.gender;
        const backSpecie = people.specie;
        const elementTitle = `
    <div id="divCard" class="film">
        <div class="innerCard">
        <div class="frontCard">
            <img src="${photo}"/>
            <p class="title">${name}</p>
        </div>
        <div class="backCard">
            <p class="backText">Age:  ${backAge}</p>
            <p class="backText">Gender: ${backGender}</p>
            <p class="backText">Specie: ${backSpecie}</p>
        </div>
        </div>
    </div>`;
        charsCards.innerHTML += elementTitle;
    }
}

showingCards(peopleList);

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