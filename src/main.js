//import data from "./data/ghibli/ghibli.js";
import { people, filtered } from "./data.js";

function showChars(chars) {
  document.getElementById("cardsCharacters").innerHTML = chars
    .map(
      (char) =>
        `<div class="cards">
     <div class="cardFront"> 
     <img src="${char.img}" class="cardCharImg" alt="Imagem da personagem">
     </div>
     <div class="cardBack">
      <h3>${char.name}</h3>
      <p>${char.specie}</p>
     </div>
     </div> `
    )
    .join("");
}
showChars(people);

function filterCharacter(e) {
  const value = e.target.value;
  if (value === "Male" || value === "Female") {
    showChars(filtered(people, "gender", value));
  } else if (value === "Filters") {
    showChars(people);
  } else {
    showChars(filtered(people, "specie", value));
  }
}
document.getElementById("filter").addEventListener("change", filterCharacter);

//console.log(filterFemale);

// ordenar
// name a-z
// age crescente e decrescente
