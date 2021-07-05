import data from './data/pokemon/pokemon.js';

import { 
  /*filtrarPelaGeração, */ordenarPorNum, ordenarPorNome, /*sortData, */filterType
} from './data.js';
import pokemon from './data/pokemon/pokemon.js';

//console.log(sortData);

//console.log(filtrarPelaGeração);

//console.log(ordenarPorNum);

 const pokemonList = data.pokemon.slice(0, 50);
 let pokeCard = document.getElementById('cards-sem-carosel');
 
 const displayPokes = (pokemonData) => {
 
 pokemonData.forEach((elem) => {
  
  let props = elem["special-attack"]
  
  let attName = props.map(function(specialAttack){
   return specialAttack["name"]
     
  })

  let attType = props.map(function(typeAttack){
    return typeAttack["type"]

  })
  
      pokeCard.innerHTML += `<div class="card" id="card">
      <div id="typeCard">
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
  





 /*const pokemonListGeneratio = data.pokemon.slice(14,30); 
 const displayPokesGeneration = (pokemonData) => { 


 
   
 const pokeCardGeneration = document.getElementById('carousel');
 
 pokemonData.forEach((elem) => {
  pokeCardGeneration.innerHTML += `
   
        <div class="backgroundImg" id=""backgroundImg">
          <img class="picture" src=" ${elem.img}"></img>
        </div>
        </div>
        <div class="infCardAbout">${elem.generation.name}</div> 
      
        </div>
     </div>
   </div>
`;
 });


 };
 



 displayPokesGeneration(pokemonListGeneratio);*/

let selecionarPorTipo;
const filtrar = document.getElementById("tipoPokemon");
filtrar.addEventListener('change', () => {
  const getpokes = document.getElementById('cards-sem-carosel');
  getpokes.innerHTML = '';
  selecionarPorTipo = filtrar.value;
  
  displayPokes(filterType(pokemonList, selecionarPorTipo));

});

/*let arrayCp = []
const ordenarPorCP = document.getElementById("maxcp");

ordenarPorCP.addEventListener('click', () => {
  const orderpokes = document.getElementById('cards-sem-carosel')
  orderpokes.innerHTML = '';
  ordenarMaxCp = ordenarPorCP.value;

  sortCp(pokemonList, ordenarMaxCp)
  displayPokes(pokemonList)
})*/
 
let ordernarPorNumeros;
const ordenar = document.getElementById("num");
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



/*class MeuCarousel {
  constructor(config) {
    this.config = config;
    this.init();
  }
  init() {


    const carousel = document.querySelector("[data-target='" + this.config.selector + "']");
    const card = carousel.querySelector("[data-target='card']");
    const leftButton = document.querySelector("[data-action='slideLeft']");
    const rightButton = document.querySelector("[data-action='slideRight']");
    let interval = '';
    let activePage = 1;
    let timeToNext = this.config.timePerPage;
    let stopSlide = false;


    const carouselWidth = carousel.offsetWidth;
    const cardStyle = card.currentStyle || window.getComputedStyle(card)
    const cardMarginRight = this.config.spaceBetween;

    const cardSize = this.config.slidesPerView > 1 ? (carouselWidth / this.config.slidesPerView) - cardMarginRight : (carouselWidth / this.config.slidesPerView);
    const allItens = carousel.querySelectorAll("[data-target='card']");
    allItens.forEach((item) => {
      item.style.width = `${card}px`;


      if (this.config.slidesPerView > 1) {
        item.style.marginRight = `${cardMarginRight/2}px`;
        item.style.marginLeft = `${cardMarginRight/2}px`
      }


    })

    const cardCount = carousel.querySelectorAll("[data-target='card']").length;
    const totalPage = Math.ceil(cardCount / this.config.slidesPerView);

    let offset = 0;
    const maxX = -((cardCount / totalPage) * carouselWidth +
      (cardMarginRight * (cardCount / totalPage)) -
      carouselWidth - cardMarginRight);

    let prev = () => {
      if (offset !== 0 && offset !== 20 && activePage > 1 && stopSlide == false) {
        activePage -= 1;
        offset += (carouselWidth + cardMarginRight) - 20;
        carousel.removeAttribute('style');
        carousel.style.transform = `translateX(${offset}px)`;
      }
    }

    let next = () => {
      if ((offset !== maxX && activePage < totalPage && stopSlide == false)) {
        activePage += 1;
        offset -= (carouselWidth + cardMarginRight) - 20;
        carousel.style.transition = 'all 1s ease';
        carousel.style.transform = `translateX(${offset}px)`;


      } else if ((this.config.slidesPerView == 1 && activePage < totalPage && stopSlide == false)) {
        activePage += 1;
        offset -= carouselWidth;
        carousel.style.transform = `translateX(${offset}px)`;
      } else if (activePage == totalPage && stopSlide == false) {
        clearInterval(interval);
        timeToNext = (this.config.timePerPage / 2);
        infinite();

        carousel.querySelectorAll("[data-target='card']").forEach((item, index) => {

          if (index < this.config.slidesPerView) {
            carousel.append(item);
          }


        })
        prev();



      }
    }

    carousel.addEventListener("mouseout", () => {
      stopSlide = false;
    })



    rightButton.addEventListener('click', () => {
      activePage = true

    })


    leftButton.addEventListener('click', () => {
      activePage = false

    })





    let infinite = () => {
      if (this.config.loop) {
        interval = setInterval(() => {
          next();
        }, timeToNext);
      }

    }

    infinite();


  }
}

let teste = new MeuCarousel({
  selector: 'carousel',
  slidesPerView: 4,
  spaceBetween: 20,
 // loop: true,
  timePerPage: 2000,
  stopOnMouseHover: true
})*/