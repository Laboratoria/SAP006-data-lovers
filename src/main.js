import { example } from './data.js';
import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


const champs = Object.values(data.data);

function cards (){
    let i;
    let champName;
    let champImg;
    let card;
    let name;

    for (i=0; i<champs.length ; i++){
        champImg = champs[i].splash;
        card = document.createElement("DIV");
        document.getElementById("cards-conteiner").appendChild(card);
        card.innerHTML = "<img src='"+champImg+"' alt='"+champName+"' class=card>";
        
      
    }    
}
cards();