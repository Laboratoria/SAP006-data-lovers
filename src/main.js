import data from './data/pokemon/pokemon.js';

import {
  filtrarPelaGeracao,
  ordenarPorNum,
  ordenarPorNome
  /*, sortData, filterType*/
} from './data.js';



//import pokemon from './data/pokemon/pokemon.js';

//console.log(sortData);

//console.log(filtrarPelaGeração);

//console.log(ordenarPorNum);


const pokemonList = data.pokemon.slice(0, 4);

const displayPokes = (pokemonData) => {

  const pokeCard = document.getElementById('cards-sem-carosel');

  pokemonData.forEach((elem) => {
    pokeCard.innerHTML += `
    
   
   <div id="card" class="card">
     <div class="card-container" data-target="card"> 
        <div class="top-info id="top-info">
          <div class="title"> ${elem.name.toUpperCase()}</div>
          <div class="numberTitle">#${elem.num}</div>
          <div class="maxHp">${elem.stats["max-hp"]}HP</div>
        </div>
        <div class="backgroundImg" id=""backgroundImg">
          <img class="picture" src=" ${elem.img}"></img>
        </div>
        </div>
        <div id="back" class=" back">
        <div class="infCardAbout">${elem.about}</div> 
        <div class="infCardAbout"<br>G<br>${elem.generation.name}</div> 
        <div class="infCardAbout">Tipo<br>${elem.egg}</div>
        <div class="infCardAbout infCard">Resistencia<br>${elem.resistant.join(', ')}</div>
        </div>
     </div>
   </div>
`;
  });


};


displayPokes(pokemonList);





let ordernarPorNumeros;
const ordenar = document.getElementById("maxcp");
ordenar.addEventListener('click', () => {
  const getpokes = document.getElementById('cards-sem-carosel');
  getpokes.innerHTML = '';
  ordernarPorNumeros = ordenar.value;

  ordenarPorNum(pokemonList, ordernarPorNumeros);
  displayPokes(pokemonList);

});



let ordenarPorNomes;
const ordenarNomes = document.getElementById("name");
ordenarNomes.addEventListener('click', () => {
  const getpokes = document.getElementById('cards-sem-carosel');
  getpokes.innerHTML = '';
  ordenarPorNomes = ordenarNomes.value;

  ordenarPorNome(pokemonList, ordenarPorNomes);
  displayPokes(pokemonList);

});










const pokemonListGeneration = data.pokemon;
const displayPokesGeneration = (pokemonData) => {


  const pokeCardGeneration = document.getElementById('slider');

  pokemonData.forEach((elem) => {
    pokeCardGeneration.innerHTML += `
  
       <div>
         <img class="pictures" src=" ${elem.img}"></img>
       </div>

       <div class="name-geracao">${elem.generation.num}


       </div> 
      
       
 
    
     
       
`;
  });


};
//      <div class="name-geracao">${elem.generation.num}


//</div> 


displayPokesGeneration(pokemonListGeneration);


let ordernarPorGeracao;
const ordenarGeracao = document.getElementById('ordemGeracao');
ordenarGeracao.addEventListener('change', () => {
  const getpokes = document.getElementById('slider');
  getpokes.innerHTML = '';
  ordernarPorGeracao = ordenarGeracao.value;


  displayPokesGeneration(filtrarPelaGeracao(pokemonListGeneration, ordernarPorGeracao));

});




























/*
const api = "./data/pokemon/pokemon.json"
async function getJson() {
  const response = await fetch(api);
  const data = await response.json();
  //console.log(data);
  let allPokemons = data.pokemon;
  //console.log(allPokemons[12].weaknesses[3]);
  document.querySelector("#teste").innerText = allPokemons[2].name
  document.querySelector("#infos").innerText = allPokemons[2].about
  let img = querySelector("#img")
  img.setAttribute("src", allPokemons.innerText)
}
getJson()
*/



const nextEl = document.getElementById('next');
const previousEl = document.getElementById('previous');
const sliderEl = document.getElementById('slider')




function onNextClick() {

  const imgWidth = sliderEl.offsetWidth;
  sliderEl.scrollLeft += imgWidth;
}

function onPreviousClick() {
  const imgWidth = sliderEl.offsetWidth;
  sliderEl.scrollLeft -= imgWidth;
}


nextEl.addEventListener('click', onNextClick);
previousEl.addEventListener('click', onPreviousClick);
