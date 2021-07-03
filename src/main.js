import { computeStats, filterData, sortData } from "./data.js";
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
    const originalCards = data.results.map(({ name, status, gender, image, episode}) =>
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
cards.innerHTML += originalCards;
const statusFilter = document.getElementById("status-filter");
statusFilter.options[statusFilter.selectedIndex = 0];
const genderFilter = document.getElementById("gender-filter");
genderFilter.options[genderFilter.selectedIndex = 0];
}

//Cálculos estatísticos:

const totalCharacters = sortData(data).length;

const printTotalCharacters = document.getElementById("totalCharacters");
printTotalCharacters.innerHTML = `<p class="totalCharacter">O total de personagens da série é:</p>
                                  <p class="totalCharacter">${totalCharacters}</p>`


const maleAverage = computeStats.gender(data, "Male")+ "%";
const femaleAverage = computeStats.gender(data, "Female")+ "%";
const genderlessAverage = computeStats.gender(data, "Genderless")+ "%";
const unknownAverage = computeStats.gender(data, "unknown")+ "%";

const printGenderAverage = document.getElementById("genderAverage");
printGenderAverage.innerHTML = `<p class="genderAverage">Média de gêneros: </p>
                              <p class="genderAverage">Masculinos: ${maleAverage}</p>
                              <p class="genderAverage">Femininos: ${femaleAverage}</p>
                              <p class="genderAverage">Desconhecidos: ${unknownAverage}</p>
                              <p class="genderAverage">Sem gênero: ${genderlessAverage}</p>`