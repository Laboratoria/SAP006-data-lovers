import { example } from './data.js';
import data from './data/lol/lol.js';

const elements = data.data;
const objects = Object.values(elements);

for (let i = 0; i < objects.length; i++) {

    const divContainer = document.getElementById("root");
    divContainer.setAttribute("class", "container");

    let divCards = document.createElement("div");
    divCards.setAttribute("class", "cards");
    divContainer.appendChild(divCards);

    let divFrontCard = document.createElement("div");
    divFrontCard.setAttribute("class", "frontcard");
    divCards.appendChild(divFrontCard);

    let divBackCard = document.createElement("div");
    divBackCard.setAttribute("class", "backcard");
    divCards.appendChild(divBackCard);

    const name = objects[i].name;
    const title = objects[i].title;
    const splash = objects[i].splash;
    const blurb = objects[i].blurb;

    divFrontCard.innerHTML = `<h1>${name}</h1><h2>${title}</h2><img src="${splash}"><p>${blurb}</p>`;
}

// console.log(example, data); 