//import data from "./data/ghibli/ghibli.js";
import {people, filtered} from "./data.js";

function showChars(chars) {
  document.getElementById("cardsCharacters").innerHTML = chars.map((char) =>
    `<div class="cards">
     <div class="cardFront"> 
     <img src="${char.img}" class="cardCharImg" alt="Imagem da personagem">
     </div>
     <div class="cardBack">
      <h3>${char.name}</h3>
      <p>${char.specie}</p>
     </div>
     </div> `
  ).join("")
}
showChars(people);

const optionMale = document.getElementById("male");
  function filterMale () { return showChars(filtered(people, "gender", "Male"));}
optionMale.addEventListener("change", filterMale);

const optionFemale = document.getElementById("female");
  function filterFemale () { return showChars(filtered(people, "gender", "Female"));}
optionFemale.addEventListener("change", filterFemale);

//console.log(filterFemale);

// filtrar 
// gender 
// specie

// ordenar 
// name a-z 
// age crescente e decrescente 

