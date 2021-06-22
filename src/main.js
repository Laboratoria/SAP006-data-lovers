import { example } from './data.js';
import data from './data/lol/lol.js';

// Campeão aparece na tela

let dados = data.data1
let champion

window.addEventListener("load", inicia)
function inicia() {

  for (champion in dados) {
    let d = document.createElement("div")
    //d.class = 'card' --- se precisarmos criar uma classe para a div
    let texto = document.createTextNode(champion)

    //let im = document.querySelector('div');  --- se precisarmos criar uma div para texto 
    let image = document.createElement("img");
    image = new Image(200, 150); // Largura (width) e altura (height).
    image.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;

    d.appendChild(texto)
    d.appendChild(image);
    document.body.appendChild(d)   
  } 
}

