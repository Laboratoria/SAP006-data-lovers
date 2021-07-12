import data from './data/pokemon/pokemon.js';


import {
  filtrarPelaGeracao,
  ordenarPorNum,
  ordenarPorNome,
  filterType,
  sortCp,
  typeStats
} from './data.js';




 const pokemonList = data.pokemon.slice(0, 10);
 let pokeCard = document.getElementById('cards-sem-carosel');
 
 const displayPokes = (pokemonData) => {
 
 pokemonData.map((elem) => {
  
  let props = elem["special-attack"]
  
  let attName = props.map(function(specialAttack){
   return specialAttack["name"]
     
  })

  let attType = props.map(function(typeAttack){
    return typeAttack["type"]

  })
  
      pokeCard.innerHTML += `<div class="card" id="card">
        <div class="gridContainerUp" id="gridContainerUp"> 
          <div class="title"> ${elem.name.toUpperCase()}</div>
          <div class="number">#${elem.num}</div>
          <div class="sideInfo">
            <div class="maxHp">${elem.stats["max-hp"]}HP</div>
            <div class="maxCp">${elem.stats["max-cp"]}CP</div>
          </div>
          <hr class="upLine">
          <div class="backgroundImg" id=""backgroundImg">
            <img class="picture" src=" ${elem.img}"></img>
          </div>
          <div class="downInfo" id="downInfo">
            <div class="weight" id="weight">WEIGHT: ${elem.size.weight.toUpperCase()}</div>
            <div class="height" id="height">HEIGHT: ${elem.size.height.toUpperCase()}</div>
          </div>
        </div>
        <div class="gridContainerDown" id="gridContainerDown">
          <div class="attackList" id="attackList">SPECIAL ATTACKS
            <div class="attacks" id="attacks">${attName.join("<br>").toUpperCase()}</div>
          </div>
          <div class="typeList" id="typeList">TYPE
            <div class="type" id="type">${attType.join("<br>").toUpperCase()}</div>
          </div>  
          <hr class="downLine"> 
          <div class="weakList" id="weakList">WEAKNESSES
            <div class="weak" id="weak">${elem.weaknesses.join("<br>").toUpperCase()}</br></div>
          </div>
          <div class="resistList" id="resistList">RESISTANT
            <div class="resistant" id="resistant">${elem.resistant.join("<br>").toUpperCase()}</div>
          </div>
      </div>
    </div>
`;
});
};
displayPokes(pokemonList);
  

let selecionarPorTipo;
const filtrar = document.getElementById("tipoPokemon");
filtrar.addEventListener('change', () => {
  const getpokes = document.getElementById('cards-sem-carosel');
  getpokes.innerHTML = '';
  selecionarPorTipo = filtrar.value;
  
  displayPokes(filterType(pokemonList, selecionarPorTipo));

});

let ordenarMaxCp;
const ordenarPorCP = document.getElementById("maxcp");
ordenarPorCP.addEventListener('change', () => {
  const orderpokes = document.getElementById('cards-sem-carosel')
  orderpokes.innerHTML = '';
  ordenarMaxCp = ordenarPorCP.value;

  sortCp(pokemonList, ordenarMaxCp)
  displayPokes(pokemonList)
})
 
let ordernarPorNumeros;
const ordenar = document.getElementById("num");
ordenar.addEventListener('change', () => {
  const getpokes = document.getElementById('cards-sem-carosel');
  getpokes.innerHTML = '';
  ordernarPorNumeros = ordenar.value;

  ordenarPorNum(pokemonList, ordernarPorNumeros);
  displayPokes(pokemonList);

});


let ordenarPorNomes;
const ordenarNomes = document.getElementById("name");
ordenarNomes.addEventListener('change', () => {
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

displayPokesGeneration(pokemonListGeneration);


let ordernarPorGeracao;
const ordenarGeracao = document.getElementById('ordemGeracao');
ordenarGeracao.addEventListener('change', () => {
  const getpokes = document.getElementById('slider');
  getpokes.innerHTML = '';
  ordernarPorGeracao = ordenarGeracao.value;


  displayPokesGeneration(filtrarPelaGeracao(pokemonListGeneration, ordernarPorGeracao));

});


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










 const estatisticas = data.pokemon;



  let baseAttack = estatisticas.map(baseAttack => baseAttack.stats['base-attack']);
  let minAttack = baseAttack.reduce((a, b) => Math.min(a, b));
  let maxAttack = baseAttack.reduce((a, b) => Math.max(a, b));
  //let somAttack = baseAttack.reduce((a, b) => a + b);
 // let mediaAttack = parseInt(somAttack / baseAttack.length);
  const table = document.getElementById("table");


 
  

  

  table.innerHTML = ` 
  <table class=" box-alignment text-color table" >
  <tr>
    <th></th>
    <th>Attack</th>
    <th>Defense</th>
    
  </tr>
  <tr>
    <th>Minimo</th>
    <th class="color-table-info">${minAttack}</th>
    
    
  </tr>
  <tr>
  <th>Maximo</th>

    <th class="color-table-info">${maxAttack}</th>
    
  </tr>
  <tr>
    
</table>  

  `

let calcType;
const typeCalc = document.getElementById("tipoPokemon")
  typeCalc.addEventListener('change', () => {
    const filterpokes = document.getElementById('typeStats');
    calcType = typeCalc.value;
    filterpokes.innerHTML = `${typeStats(pokemonList, calcType)}% dos Pokemons são do tipo selecionado`;
  
  })
