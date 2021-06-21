import { example } from './data.js';
import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


const champs = Object.values(data.data);

let i;
let champName;
let champImg;
let image;
let nameConteiner;
let name;
let card;

for (i = 0; i < champs.length; i++) {
    champImg = champs[i].splash;
    champName = champs[i].name;
    
    card = document.createElement("div");
    document.getElementById("cards-conteiner").appendChild(card);
    card.className = "card";
    card.setAttribute("id", champName);
    
    image = document.createElement("img");
    image.src = champImg;
    image.alt = champName+"'s image";
    image.className = "image";
    card.appendChild(image);

    nameConteiner = document.createElement("div");
    name = document.createTextNode(champName);
    nameConteiner.className = "nameConteiner";
    nameConteiner.appendChild(name);
    card.appendChild(nameConteiner);
 
}

// function turnCard(item){
//     if (div.className === "card"){
//         card = document.createElement("div");

//         })
//     }

// }
// turnCard();