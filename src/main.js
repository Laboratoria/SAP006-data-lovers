import data from './data/pokemon/pokemon.js';
import { 
  /*filtrarPelaGeração, */ordenarPorNum/*, sortData, filterType*/
} from './data.js';
import pokemon from './data/pokemon/pokemon.js';

//console.log(sortData);

//console.log(filtrarPelaGeração);

//console.log(ordenarPorNum);


 const pokemonList = data.pokemon.slice(0,9);

 const displayPokes = (pokemonData) => {
   
 const pokeCard = document.getElementById('carousel');
 
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
  const getpokes = document.getElementById('carousel');
  getpokes.innerHTML = '';
  ordernarPorNumeros = ordenar;

  ordenarPorNum(pokemonList, ordernarPorNumeros);
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



class MeuCarousel {
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
  loop: true,
  timePerPage: 2000,
  stopOnMouseHover: true
})