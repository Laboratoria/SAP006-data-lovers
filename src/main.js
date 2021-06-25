import { example } from './data.js';
import data from './data/lol/lol.js';

const elements = data.data;
const objects = Object.values(elements);

for (let i = 0; i < objects.length; i++) {

    const divContainer = document.getElementById("root");
    divContainer.setAttribute("class", "container");

    let divCards = document.createElement("div");
    divCards.setAttribute("class", "cards")
    divContainer.appendChild(divCards);

    let divFrontCard = document.createElement("div");
    divFrontCard.setAttribute("class", "frontcard");
    divCards.appendChild(divFrontCard);

    let divBackCard = document.createElement("div");
    divBackCard.setAttribute("class", "backcard");
    divCards.appendChild(divBackCard);

    let imageCharacters = document.createElement("img");
    imageCharacters.setAttribute("class", "imageCharacters");

    const name = objects[i].name;
    const title = objects[i].title;
    const splash = objects[i].splash;
    const blurb = objects[i].blurb;
    
    divFrontCard.innerHTML = `<h1>${name}</h1><h2>${title}</h2><img id="imageCharacters" src="${splash}"><p>${blurb}</p>`;

    const img = objects[i].img;
    const partype = objects[i].partype;
    const tags = objects[i].tags;
    const attack = objects[i].info.attack;
    const defense = objects[i].info.defense;
    const magic = objects[i].info.magic;
    const difficulty = objects[i].info.magic;

    divBackCard.innerHTML = `<h3>${name}</h3><img src="${img}"><h4>${tags}</h4><h4>${partype}</h4>
    <p id="attack">Attack: ${attack}</p><p id="defense">Defense: ${defense}</p><p id="magic">Magic: ${magic}</p>
    <p id="difficulty">Difficulty: ${difficulty}</p>"`
    
}

// console.log(example, data); 