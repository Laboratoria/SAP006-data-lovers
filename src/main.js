//import data from "./data/ghibli/ghibli.js";
import { people, filtered, ordered } from "./data.js";

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
      <p>${char.age}</p>
     </div>
     </div> `
    )
    .join("");
}
showChars(people);

function filterCharacter(f) {
  const value = f.target.value;
  if (value === "Male" || value === "Female") {
    showChars(filtered(people, "gender", value));
  } else if (value === "Filters") {
    showChars(people);
  } else {
    showChars(filtered(people, "specie", value));
  }
}
document.getElementById("filter").addEventListener("change", filterCharacter);

function orderCharacter(o) {
  const value = o.target.value;
  if (value === "sorter") {
    showChars(people);
  }
  else {
    showChars(ordered(people, value));
  }
}
document.getElementById("order").addEventListener("change", orderCharacter);
//console.log(filterFemale);

// ordenar
// name a-z
// age crescente e decrescente
