import { example } from './data.js';
import data from './data/lol/lol.js';

const elements = data.data;
const objects = Object.values(elements);

const divContainer = document.getElementById("root");   

for(let i = 0; i < objects.length; i++){
    let divCard = document.createElement("div");
    divCard.setAttribute("class", "cards");
    divCard.setAttribute("id", "card"+i);
    divContainer.appendChild(divCard);
    
    let name = document.createElement("h1");
    name.innerHTML = objects[i].name;
    divCard.appendChild(name);
    
    let title = document.createElement("h2");
    title.innerHTML = objects[i].title;
    divCard.appendChild(title);
   
    let splash = document.createElement("img");
    splash.setAttribute("class", "splash");
    splash.setAttribute("src", objects[i].splash);
    divCard.appendChild(splash)

    let blurb = document.createElement("p");
    blurb.innerHTML = objects[i].blurb;
    divCard.appendChild(blurb);   
}
console.log(example, data); 