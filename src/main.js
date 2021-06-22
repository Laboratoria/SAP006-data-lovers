import { example } from './data.js';
import data from './data/lol/lol.js';

// Campeão aparece na tela

let dados = data.data1
let champion

window.addEventListener("load", inicia)
function inicia() {

  for (champion in dados) {    
    let imageCard = document.createElement("img");
    imageCard = new Image(250, 200); 
    imageCard.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
    /*
    let c1 = document.querySelector("header")
    let foto = document.createElement("img");
    foto.src = dados.Aatrox.splash
    c1.appendChild(foto);
    */ 
        
    let textCard = document.createElement("p")
    textCard.class = "t"
    let nameText = document.createTextNode(champion)
    textCard.appendChild(nameText)


    let divCard = document.createElement("div")
    divCard.appendChild(textCard)
    divCard.appendChild(imageCard);

    let container = document.querySelector("main")
    container.appendChild(divCard)   
  } 
}