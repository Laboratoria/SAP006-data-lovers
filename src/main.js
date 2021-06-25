import { filterData } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

const btn = document.getElementById('btn');
btn.addEventListener("click", (e) => filtrar(e));

const cards = document.querySelector('.cards');
const staticCards = data.results.map(({ name, status, gender, image }) =>
    `<div class="cards_container">
        <div class="character_img">
          <img src="${image}">
        </div>
         <div class="character_info">
          <span id="character_name">
            <h3>${name}</h3>
          </span>
          <span id="character_status">${status} - ${gender}</span>
          <span id="episodes">Episódios</span>
            <p>1, 2, 3, 4,</p>
         </div>
     </div>`).join("")

     cards.innerHTML += staticCards;


 // Função filtrar:    

const filtrar = function(e){
e.preventDefault();

const filtro = document.getElementById("status-filter")
const options = filtro.options[filtro.selectedIndex].value

const valor_filtrado = filterData(data, options);

const printCards = valor_filtrado.map(({ name, status, gender, image }) =>
    `<div class="cards_container">
        <div class="character_img">
          <img src="${image}">
        </div>
         <div class="character_info">
          <span id="character_name">
            <h3>${name}</h3>
          </span>
          <span id="character_status">${status} - ${gender}</span>
          <span id="episodes">Episódios</span>
            <p>1, 2, 3, 4,</p>
         </div>
     </div>`).join("")

cards.innerHTML = "";
cards.innerHTML += printCards
//console.log(printCards)
}












//const filtro2 = document.getElementById("filtro2")

//const options2 = filtro2.options[filtro2.selectedIndex].value




