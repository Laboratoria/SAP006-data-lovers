import { getPeople, filtered, ordered } from "./data.js";
import data from "./data/ghibli/ghibli.js";
const films = data.films;
const people = getPeople(films);

function showChars(chars) {
  document.getElementById("cardsCharacters").innerHTML = chars
    .map(
      (char) =>
        `<a class="cards" id="cards" href="./aboutCharacters?char=${char.id}" target="_blank">
     <div class="cardFront"> 
     <img src="${char.img}" class="cardCharImg" alt="Imagem da personagem">
     </div>
     <div class="cardBack">
      <h3>${char.name}</h3>
      <p>Espécie: ${char.specie}</p>
      <p>Idade: ${char.age}</p>
      <img src="img/card-char-image.png" alt="Chihiro">
     </div>
     </a> `
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
  } else {
    showChars(ordered(people, value));
  }
}
document.getElementById("order").addEventListener("change", orderCharacter);