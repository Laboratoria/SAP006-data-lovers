import {filterGenderSelected, filterSpeciesSelected, filterStatusSelected, sortOrder, calcFilter} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


const dataBase = data.results;
const selectGender = document.querySelector('.filter-gender') 
const filterSelectSpecies = document.querySelector('.filter-species');
const filterSelectStatus = document.querySelector('.filter-status');
const filterSelectOrder = document.querySelector('.filter-order');


selectGender.addEventListener('change', filterGender);
filterSelectSpecies.addEventListener('change', filterSpecies);
filterSelectStatus.addEventListener('change', filterStatus);
filterSelectOrder.addEventListener('change', filterOrder);
document.getElementById("hero").onload = printCharacters(dataBase);

function printCharacters(personagem) {
let mainPersonagens = document.getElementById("personagens")
mainPersonagens.innerHTML = ""

for(let item in personagem){
let info = personagem[item];


  const elementoCard = document.createElement("div")
  elementoCard.innerHTML =
  `

   <div class="organiza-cards">
    <div class="formatacao-card"> 

      <div class="card-frente">
        <img src="${info.image}">
      
        <p class="title">${info.name}</p>
      </div>
      
      <div class="card-verso">
        <ul>
          <li>Gênero: ${info.gender}</li> 
          <li>Espécie: ${info.species}</li>
          <li>Status: ${info.status}</li>
        </ul>
      </div>

    </div>
  </div>
`
mainPersonagens.appendChild(elementoCard)
}
}

// Manipular o DOM /

document.getElementById("hero").innerHTML = mainPersonagens


/*const selectOption = event.target.value
const chamarFuncao = filterGenderSelected(dataBase, selectOption)
printCharacters(chamarFuncao)
})*/
function resultCalc(dataBase, selectedFilter) {
  let result = calcFilter(dataBase, selectedFilter)
  //document.getElementById("calculation").innerHTML = "Existem " + selectedFilter.length + " personagens deste filtro e representam " + result + "% do total de personagens"
}

function filterGender() {
  const valueGenderSelected = selectGender.value
  const selecteddGender = filterGenderSelected(dataBase, valueGenderSelected)
  printCharacters(selecteddGender)
  resultCalc(dataBase, selecteddGender)
}

function filterSpecies() {
  const valueSpeciesSelected = filterSelectSpecies.value
  const selectedSpecies = filterSpeciesSelected(dataBase, valueSpeciesSelected)
  printCharacters(selectedSpecies)
  resultCalc(dataBase, selectedSpecies)
}

function filterStatus() {
  const valueStatusSelected = filterSelectStatus.value
  const selectedStatus = filterStatusSelected(dataBase, valueStatusSelected)
  printCharacters(selectedStatus)
  resultCalc(dataBase, selectedStatus)
}

function filterOrder() {
  const valueOrderSelected = filterSelectOrder.value
  const selectedOrder = sortOrder(dataBase, valueOrderSelected)
  printCharacters(selectedOrder)
}
