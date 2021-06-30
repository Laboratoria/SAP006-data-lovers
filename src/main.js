import data from "./data/ghibli/ghibli.js";
import {filterChars} from "./data.js";

const films = data.films; 
const people = films.reduce((total, film)=> total.concat(film.people), []);

function showChars(chars) {
  document.getElementById("allChars").innerHTML = chars.map((char) =>
    `<div class="flipCard">
    <div class="cardFront"> 
    <img src=${char.img} class="cardCharImg" alt="Imagem da personagem">
    </div>
    <div class="cardBack">
      <h3>${char.name}</h3>
      <p>${char.specie}<p>
    </div> </div>`
  ).join("")
}
showChars(people);






