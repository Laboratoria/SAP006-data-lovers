import data from "./data/ghibli/ghibli.js";
import { getPeople, filtered, orderChar } from "./data.js";
const films = data.films;
const people = getPeople(films);
let filteredChar = people;

// var counter = 1;
//        setInterval(function(){
//            document.getElementById('radio' + counter).checked = true;
//            counter++;
//            if(counter >6){
//                counter = 1;
//            }
//        },2500);

function showChars(chars) {
  document.getElementById("cardsCharacters").innerHTML = chars
    .map(
      (char) =>
    `<a href="./aboutCharacters.html?char=${char.id}" class="cards" target="_blank">
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
  if (value === "Filters") {
    filteredChar = people;
  } else if (value === "Male" || value === "Female") {
    filteredChar = filtered(people, "gender", value);
  } else {
    filteredChar = filtered(people, "specie", value);
  }
  showChars(filteredChar);
}
document.getElementById("filter").addEventListener("change", filterCharacter);

function orderCharacter(o) {
  const value = o.target.value;
  if (value === "sorter") {
    showChars(people);
  } else {
    showChars(orderChar(filteredChar, value));
  }
}

document.getElementById("order").addEventListener("change", orderCharacter);

