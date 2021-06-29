import { example } from './data.js';
import data from './data/lol/lol.js';

const elements = data.data;
const objects = Object.values(elements);

const index = document.getElementById("index");
const inputSearch = document.createElement("input");
inputSearch.setAttribute("id", "input-search");
inputSearch.setAttribute("placeholder", "Digite o nome do personagem...");
index.appendChild(inputSearch);

function showCharacters(characters) {
    const divContainer = document.getElementById("root");
    divContainer.setAttribute("class", "container");
    divContainer.innerHTML = ``;

    for (let i = 0; i < characters.length; i++) {
        let divCards = document.createElement("div");
        divCards.setAttribute("class", "cards")
        divContainer.appendChild(divCards);

        let divFrontCard = document.createElement("div");
        divFrontCard.setAttribute("class", "front-card");
        divCards.appendChild(divFrontCard);

        let divBackCard = document.createElement("div");
        divBackCard.setAttribute("class", "back-card");
        divCards.appendChild(divBackCard);

        let imageCharacters = document.createElement("img");
        imageCharacters.setAttribute("class", "imageCharacters");

        const name = characters[i].name;
        const title = characters[i].title;
        const splash = characters[i].splash;
        const blurb = characters[i].blurb;

        divFrontCard.innerHTML = `<h1>${name}</h1><h2>${title}</h2><img class="image-characters"src="${splash}"><p>${blurb}</p>`;

        const img = characters[i].img;
        const partype = characters[i].partype;
        const tags = characters[i].tags;
        const attack = characters[i].info.attack;
        const defense = characters[i].info.defense;
        const magic = characters[i].info.magic;
        const difficulty = characters[i].info.difficulty;

        divBackCard.innerHTML = `<h3>${name}</h3><img class="profile-characters" src="${img}"><h4>${tags}</h4><h4>${partype}</h4>
        <p id="attack">Attack: ${attack}</p><p id="defense">Defense: ${defense}</p><p id="magic">Magic: ${magic}</p>
        <p id="difficulty">Difficulty: ${difficulty}</p>"`
    }
}
showCharacters(objects);

document.getElementById("input-search").addEventListener("keyup", function () {
    const textName = document.getElementById("input-search").value.toLowerCase();
    const champions = objects.filter(item => item.name.toLowerCase().includes(textName));
    showCharacters(champions);
})