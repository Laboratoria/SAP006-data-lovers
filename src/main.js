import { filterData, sortData} from './data.js';
import data from './data/pokemon/pokemon.js';
//import { media } from './data.js';


let POKEMONS = data.pokemon;

function exibir(itens) {
  document.getElementById("listaPokemon").innerHTML = "";
  for (let pokemon of itens) {
    let imagem = document.createElement("img");
    imagem.src = pokemon.img

    document.getElementById("listaPokemon").inn(imagem)
  }
}
exibir(POKEMONS)


const type = document.getElementById('type');

type.addEventListener("change", function () {
  if (type.value !== "") {
    POKEMONS = filterData(data.pokemon, type.value)
  }
  else {
    POKEMONS = data.pokemon;
  }
  exibir(POKEMONS)
});


const order = document.getElementById('order');

order.addEventListener("change", function (e) {
  e.preventDefault();

  const orderValues = order.value.split("/");
  const sortnames = sortData(POKEMONS, orderValues[0], orderValues[1]);
  exibir(sortnames);
});


const card = '<section class="card"> <div class="titulos"> <p id="namePok">Pikachu</p> <p id="num">001</p> </div> <img id="img"> <div class="tipos"> <p>Eletrico</p> </div> <div class="indices"> <p>Ataque</p> <p>Defesa</p> <p>Stamina</p> </div> <p>Media</p> </section>'