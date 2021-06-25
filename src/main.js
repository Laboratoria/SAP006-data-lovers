import { filterData } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

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

const filtrar = function (e) {
  e.preventDefault();

  const statusFilter = document.getElementById("status-filter")
  const statusOptions = statusFilter.options[statusFilter.selectedIndex].value

  const genderFilter = document.getElementById("gender-filter")
  const genderOptions = genderFilter.options[genderFilter.selectedIndex].value

  const valor_filtrado = filterData(data, statusOptions, genderOptions);

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
}