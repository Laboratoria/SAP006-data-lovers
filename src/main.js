import data from "./data/lol/lol.js";

// Campeão aparece na tela
let dataLol = data.data1;

listingCards(dataLol);

function listingCards(itens) {
  const cardPack = document.querySelector("ul.cards");
  cardPack.innerHTML = "";

  for (let champion in itens) {
    const info = dataLol[champion];
    
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
    // const splash = info.splash;
    

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
