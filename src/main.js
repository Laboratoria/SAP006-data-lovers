import { example } from './data.js';
import data from './data/lol/lol.js';

const elements = data.data;
const objects = Object.values(elements);

const divContainer = document.getElementById("root");   

// for(let i = 0; i < objects.length; i++){
//     let divCard = document.createElement("div");
//     divCard.setAttribute("class", "cards");
//     divCard.setAttribute("id", "card"+i);
//     divContainer.appendChild(divCard);
    
//     let name = document.createElement("h1");
//     name.innerHTML = objects[i].name;
//     divCard.appendChild(name);
    
//     let title = document.createElement("h2");
//     title.innerHTML = objects[i].title;
//     divCard.appendChild(title);
   
//     let splash = document.createElement("img");
//     splash.setAttribute("class", "splash");
//     splash.setAttribute("src", objects[i].splash);
//     divCard.appendChild(splash)

//     let blurb = document.createElement("p");
//     blurb.innerHTML = objects[i].blurb;
//     divCard.appendChild(blurb);   
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

    let imageCharacters = document.createElement("img");
    imageCharacters.setAttribute("id", "imageCharacters");
    imageCharacters.setAttribute("class", "splash");
    imageCharacters.setAttribute("src", objects[i].splash);
    divFrontCard.appendChild(imageCharacters);
    // let imageCharacters = document.createElement("img");
  
    // imageCharacters.setAttribute("id","imageCharacters");
    
    // divCard.appendChild(splash)


    // const name = objects[i].name;
    // const title = objects[i].title;
    // const splash = objects[i].splash;
    // const blurb = objects[i].blurb;
    let name = document.createElement("h1");
    name.innerHTML = objects[i].name;
    divFrontCard.appendChild(name);
    
    let title = document.createElement("h2");
    title.innerHTML = objects[i].title;
    divFrontCard.appendChild(title);
   
    // let splash = document.createElement("img");
    // splash.setAttribute("class", "splash");
    // splash.setAttribute("src", objects[i].splash);
    // divCard.appendChild(splash)

    let blurb = document.createElement("p");
    blurb.innerHTML = objects[i].blurb;
    divFrontCard.appendChild(blurb);  
    
    // divFrontCard.innerHTML = `<h1>${name}</h1><h2>${title}</h2><img id="imageCharacters" src="${splash}"><p>${blurb}</p>`;

    const img = objects[i].img;
    const partype = objects[i].partype;
    const tags = objects[i].tags;
    const attack = objects[i].info.attack;
    const defense = objects[i].info.defense;
    const magic = objects[i].info.magic;
    const difficulty = objects[i].info.magic;

    // divBackCard.innerHTML = `<h3>${name}</h3><img src="${img}"><h4>${tags}</h4><h4>${partype}</h4>
    // <br><p id="attack">Attack: ${attack}</p><p id="defense">Defense: ${defense}</p><p id="magic">Magic: ${magic}</p>
    // <p id="difficulty">Difficulty: ${difficulty}</p>"`
    
}

// console.log(example, data); 
