import data from './data/lol/lol.js';

// Campeão aparece na tela
let dataLol = data.data1

ListingCards(dataLol)

function ListingCards(itens) {
  let cardPack = document.querySelector("ul.cards")
  //cardPack.innerHTML = ""  -- novas funções precisarão disso para limpar a tela  

  for (let champion in itens) {
    const info = dataLol[champion]

    let imageCard = document.createElement("img");
    imageCard = new Image(250, 200); // preciso fazer isso no css? 
    imageCard.src = info.splash


    let textCard = document.createElement("p") // textCard.class = "t"
    let nameText = document.createTextNode(champion)
    textCard.appendChild(nameText)


    let card = document.createElement("li")
    card.appendChild(textCard)
    card.appendChild(imageCard);

    cardPack.appendChild(card)
  }
}