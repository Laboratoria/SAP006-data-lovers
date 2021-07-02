import {getStatus, getSpecies} from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

// 1) Exibir cards na tela
function showCards(data) {
    document.getElementById('get-cards').innerHTML = data.map((item) => `
        <div class ="info-cards">
        <div class ="img-cards">
        <img src="${item.image}">
        </div>
        <div class ="list-cards">
            <ul class ="list">
                <li id="name">Nome:${item.name}</li>
                <li>Status:${item.status}</li>
                <li>Espécie:${item.species}</li>
                <li>Origem:${item.origin.name}</li>
            </ul>
        </div>
        
        `)
}
showCards(data.results);


// 2) Função para pesquisar por nome de personagem:
const btnSearch = document.getElementById("button-search");

function searchCharacter(e) {
   e.preventDefault()

   let searchTerm = document.getElementById("characters").value;
   console.log(searchTerm);
   let object = data.results;
   object = object.filter(character => character.name === searchTerm);
   showCards(object);
}

btnSearch.addEventListener('click', searchCharacter);





















/*
formSearch.addEventListener("submit", event => {
    event.preventDefault()

    const searchTerm = name.value.trim();
    console.log(searchTerm);

    if (typeof searchTerm == "number" || typeof searchTerm !== "string") {
        throw TypeError("Por favor, digite um termo válido")
        return
    }

    function foundCharacter(data, searchTerm) {
        const object = data.results;
        console.log(object);
        object = object.filter(character => character.name.toUpperCase === searchTerm.toUpperCase)
        showCards(object);
        foundCharacter()
    }
})
*/
