import data from "./data/lol/lol.js";

// Campeão aparece na tela
let dataLol = data.data1;

listingCards(dataLol);

function listingCards(itens) {
  const cardPack = document.querySelector("ul.cards");
  cardPack.innerHTML = "";

  for (let champion in itens) {
    const info = dataLol[champion];

    let imageCard = document.createElement("img");
    imageCard = new Image(180, 250); // preciso fazer isso no css?
    imageCard.src = info.splash;

    let textCard = document.createElement("h3"); // textCard.class = "t"
    textCard.textContent = `${champion}`;

    const card = document.createElement("li");
    card.appendChild(imageCard);
    card.appendChild(textCard);
    cardPack.appendChild(card);

    // POP-UP //
    const popup = document.querySelector(".popup-wrapper");

    card.addEventListener("click", () => {
      popup.style.display = "block";
    });

    // CONTEUDO DO POP-UP //
    const popUpContent = document.querySelector(".popup-content");

    card.addEventListener("click", () => {
      function showChampionInfo() {
        popUpContent.innerHTML += `
      <img src"${info.img}">
      <h2 class="champion-name">${info.id}</h2>
      <h3 class="champion-title">${info.title}</h3>
      <div class="champion-info">
      Attack: ${info.info.attack} | Defense: ${info.info.defense} | 
      Magic: ${info.info.magic} | Difficulty: ${info.info.difficulty}
      </div>
      <div class="introduction">${info.blurb}</div>
      <div class"tags">${info.tags}</div>
      `
      } showChampionInfo();
    });

    // FECHAR POP-UP //

    popup.addEventListener("click", (event) => {
      const classNameOfClickedElement = event.target.classList[0];
      const classNames = ["popup-close", "popup-wrapper"];
      const shoudlClosePopUp = classNames.some(
        (classNames) => classNames === classNameOfClickedElement
      );
      if (shoudlClosePopUp) {
        popup.style.display = "none";
      }
    });
  }
}

// // INFORMAÇÕES DENTRO DO POP-UP //

// const popUpContent = document.getElementsByClassName("popup-content");

//   function showChampionInfo () {
//     popUpContent.innerHTML += `
//     <img src="${info.splash}">
//     <h2 class="champion-name">${info.id}</h2>
//     <h3 class="champion-title">${info.title}</h3>
//     <p class="champion-data">${info.info}</p>
//     <div class="introduction">${info.blurb}</div>
//     <div class"tags">${info.tags}</div>
//     `
//   } console.log(showChampionInfo);
