import data from "./data/ghibli/ghibli.js";
import { getPeople } from "./data.js";
const films = data.films;
const people = getPeople(films);

let params = new URLSearchParams(window.location.search.substring(1));
const myChar = params.get("char");

let char = people.find((char) => char.id === myChar);
function aboutChar(people) {
  document.getElementById("cardAbout").innerHTML = `<img src="${
    people.img
  }" class="cardCharImg" alt="Imagem da personagem">
    <div class="charInfos">
    <h3>${people.name.toUpperCase()}</h3>
    <p>Gênero: ${people.gender}</p>
    <p>Espécie: ${people.specie}</p>
    <p>Idade: ${people.age}</p>
    <p>Cor dos olhos: ${people.eye_color}</p>
    <p>Cor do cabelo: ${people.hair_color}</p>
    </div>`;
}
aboutChar(char);
