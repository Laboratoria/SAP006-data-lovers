import data from "./data/ghibli/ghibli.js";
import { getPeople } from "./data.js";
const films = data.films;
const people = getPeople(films);

const params = new URLSearchParams(window.location.search);
const myChar = params.get("char");

let chars = people.find((char) => char.id === myChar);

function aboutChar(char) {
  if (chars == "" || chars == null) {
    alert("Personagem não encontrado. Tente novamente mais tarde");
    throw new TypeError("Don't found the character", "aboutChar.js", 9);
  }
  document.getElementById("cardAbout").innerHTML = 
  ` <img src=${char.img} class="cardCharImg" alt="Imagem da personagem">
    <div class="charInfos">
    <h3>${char.name.toUpperCase()}</h3>
    <p>Gênero: ${char.gender}</p>
    <p>Espécie: ${char.specie}</p>
    <p>Idade: ${char.age}</p>
    <p>Cor dos olhos: ${char.eye_color}</p>
    <p>Cor do cabelo: ${char.hair_color}</p>
    </div>`;
}
aboutChar(chars);
