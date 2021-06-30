import { filterData, sortData } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const cards = document.querySelector(".cards");
const staticCards = data.results.map(({ name, status, gender, image, episode}) =>
  `<div class="cards_container">
        <div class="character_img">
          <img src="${image}">
        </div>
         <div class="character_info">
          <span id="character_name">
            <h3>${name}</h3>
          </span>
          <span id="character_status">${status} - ${gender}</span>
          <span id="episodes">Episodes</span>
            <p>${episode.map((i) => i.replaceAll(/[^0-9]/g,' '))}</p>
         </div>
     </div>`).join("");

cards.innerHTML += staticCards;

// Função filtrar:    
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => filtrar(e));


const filtrar = function (e) {
  e.preventDefault();

  const statusFilter = document.getElementById("status-filter");
  const statusOptions = statusFilter.options[statusFilter.selectedIndex].value;

  const genderFilter = document.getElementById("gender-filter");
  const genderOptions = genderFilter.options[genderFilter.selectedIndex].value;

  const filterValue = filterData(data, statusOptions, genderOptions);

  const printCards = filterValue.map(({ name, status, gender, image, episode }) =>
    `<div class="cards_container">
        <div class="character_img">
          <img src="${image}">
        </div>
         <div class="character_info">
          <span id="character_name">
            <h3>${name}</h3>
          </span>
          <span id="character_status">${status} - ${gender}</span>
          <span id="episodes">Episodes</span>
            <p>${episode.map((i) => i.replaceAll(/[^0-9]/g,' '))}</p>
         </div>
     </div>`).join("");

  cards.innerHTML = "";
  cards.innerHTML += printCards;
}

// Função ordenar:
const sort = function(e) {
    e.preventDefault();
    
    const sortCards = sortData(data);

    const sortedCards = sortCards.map(({ name, status, gender, image, episode }) =>
    `<div class="cards_container">
        <div class="character_img">
          <img src="${image}">
        </div>
         <div class="character_info">
          <span id="character_name">
            <h3>${name}</h3>
          </span>
          <span id="character_status">${status} - ${gender}</span>
          <span id="episodes">Episodes</span>
            <p>${episode.map((i) => i.replaceAll(/[^0-9]/g,' '))}</p>
         </div>
     </div>`).join("");

  cards.innerHTML = "";
  cards.innerHTML += sortedCards;
    
}
const btnSort = document.getElementById("sort-btn");
btnSort.addEventListener("click", sort);


//Botão limpar:

const btnClear = document.getElementById("btn-clearFilters");
btnClear.addEventListener("click", clearFilters);

 function clearFilters(e){
    e.preventDefault()
    const cards = document.querySelector(".cards");
    const staticCards = data.results.map(({ name, status, gender, image, episode}) =>
    `<div class="cards_container">
        <div class="character_img">
          <img src="${image}">
        </div>
         <div class="character_info">
          <span id="character_name">
            <h3>${name}</h3>
          </span>
          <span id="character_status">${status} - ${gender}</span>
          <span id="episodes">Episodes</span>
            <p>${episode.map((i) => i.replaceAll(/[^0-9]/g,' '))}</p>
         </div>
     </div>`).join("");

cards.innerHTML = "";     
cards.innerHTML += staticCards;
const statusFilter = document.getElementById("status-filter");
statusFilter.options[statusFilter.selectedIndex = 0];
const genderFilter = document.getElementById("gender-filter");
genderFilter.options[genderFilter.selectedIndex = 0];
}