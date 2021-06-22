import { example } from './data.js';
import data from './data/lol/lol.js';

const elements = data.data;
const objects = Object.values(elements);

    let app = document.getElementById("root");   
    let divContainer = document.createElement("div")
    divContainer.setAttribute('id', 'container');
    app.appendChild(divContainer); 

for(let i = 0; i < objects.length; i++){

    let divCard = document.createElement("div");
    divCard.classList.add('cards');
    divCard.setAttribute('id', 'characters'+i)
    divContainer.appendChild(divCard);

    const name = objects[i].name;
    const title = objects[i].title;
    const splash = objects[i].splash;
    const blurb = objects[i].blurb;

    divCard.innerHTML = `<h1>${name}</h1><h2>${title}</h2><img src="${splash}"><p>${blurb}</p>`;
}

console.log(example, data);
