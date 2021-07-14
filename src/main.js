import data from "./data/lol/lol.js";
import { filterNames,
        difficultyOrder,
        filterByTag } from "./data.js";

// Campeão aparece na tela
let dataLol = Object.values(data.data1);
let novoArray = Object.values(data.data1);

listingCards(dataLol);

function listingCards(itens) {
  const cardPack = document.querySelector("ul.cards");
  cardPack.innerHTML = "";

  for (let champion in itens) {
    const info = itens[champion];
    
    const card = document.createElement("li");
    card.innerHTML = `
      <img src="${info.splash}" alt="Imagem do Campeão"/>
      <h3>${info.id}</h3>
       `       
    cardPack.appendChild(card); 

      // POP-UP //
    const popup = document.querySelector(".popup-wrapper");
    // CONTEUDO DO POP-UP //
    const popUpContent = document.querySelector(".popup-content");    

    card.addEventListener("click", () => {
      popup.style.display = "block";

      popUpContent.innerHTML = `
      <div class="image-splash">
        <img src="${info.splash}" class="img-bg" alt="Imagem do Campeão"/>
      </div>

        <h2 class="champion-name">${info.id}</h2>
        <h3 class="champion-title">${info.title}</h3>
        <div class="champion-data">
          <div class="champion-info">
            <p>Ataque: ${info.info.attack} | 
            Defesa: ${info.info.defense} | 
            Magia: ${info.info.magic} | 
            Dificuldade: ${info.info.difficulty}
            </p>
          </div>
      
          <div class="introduction">${info.blurb}</div>
          <div class="champion-info">
            ${info.tags[0]}, ${info.tags[1]}
          </div>

        </div>
      `;
    });

    // FECHAR POP-UP //

    popup.addEventListener("click", (event) => {
      const classNameOfClickedElement = event.target.classList[0];
      const classNames = ["popup-close", "popup-wrapper"];
      const shoudlClosePopUp = classNames.some(
        (classNames) => classNames === classNameOfClickedElement);
      if (shoudlClosePopUp) {
        popup.style.display = "none";
      }
    });
  } 
}

//FILTRAR POR NOME 
let searchName = document.querySelector(".search");

searchName.addEventListener('input', event => {
  searchName = event.target.value.trim().toUpperCase();
  let dataFilterName = filterNames(dataLol, searchName);
  listingCards(dataFilterName);
})

//POR CATEGORIA
const filterButton = document.querySelector(".categorias");
filterButton.addEventListener('click', (event) => {
  const botaoClicado = event.target.textContent;
  
  if (botaoClicado == "LIMPAR") {
    listingCards(dataLol);
  } else {
    const filtered = filterByTag(dataLol, botaoClicado);
    listingCards(filtered);
    }
}); 

//FILTRAR POR  DIFICULDADE
const categories = document.querySelector(".dropbtn")

categories.addEventListener("change", (event) => {
  const chosendifficulty = event.target.value;

  if (chosendifficulty === '1') {
    listingCards(novoArray);
  } else {
    const sortByDif = difficultyOrder(dataLol, chosendifficulty);
    listingCards(sortByDif); 
  }
});