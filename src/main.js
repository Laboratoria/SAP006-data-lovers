import data from "./data/lol/lol.js";

// Campeão aparece na tela
let dataLol = data.data1;

listingCards(dataLol);

function listingCards(itens) {
  const cardPack = document.querySelector("ul.cards");
  cardPack.innerHTML = "";

  for (let champion in itens) {
    const info = dataLol[champion]

    let imageCard = document.createElement("img");
    imageCard = new Image(180, 250); // preciso fazer isso no css?
    imageCard.src = info.splash;

    let textCard = document.createElement("h3"); // textCard.class = "t"
    textCard.textContent = `${champion}`;

    const card = document.createElement("li");
    card.appendChild(imageCard);
    card.appendChild(textCard);
    // console.log(card);
    cardPack.appendChild(card);

    // POP-UP //
    const popup = document.querySelector(".popup-wrapper");

    card.addEventListener("click", () => {
      popup.style.display = "block";
    });

    popup.addEventListener("click", (event) => {
      const classNameOfClickedElement = event.target.classList[0];
      const classNames = ["popup-close", "popup-wrapper", "popup-link"];
      const shoudlClosePopUp = classNames.some(
        (classNames) => classNames === classNameOfClickedElement);
      if (shoudlClosePopUp) {
        popup.style.display = "none";
      }
    });
  }
}


// INFORMAÇÕES DENTRO DO POP-UP //

// const popUpName = document.getElementsByClassName("champion-name");
//   function showChampionName () {
//     popUpName.innerHTML += `
//     <h2 class="champion-name">${dataLol[type].name}</h2>
//     `
//   } console.log(showChampionName);

// const popUpTitle = document.getElementsByClassName("champion-title");

// const popUpData = document.getElementsByClassName("champion-data");