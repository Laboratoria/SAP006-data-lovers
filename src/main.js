import data from "./data/lol/lol.js";
import { filterNames } from "./data.js";
import { difficultyOrder } from "./data.js";
import { filterByTag } from "./data.js";

// Campeão aparece na tela
let dataLol = Object.values(data.data1);

listingCards(dataLol);

function listingCards(itens) {
  const cardPack = document.querySelector("ul.cards");
  cardPack.innerHTML = "";


  for (let champion in itens) {
    const info = itens[champion];
    
    const card = document.createElement("li");
    card.innerHTML = `
      <img src="${info.splash}" alt="Imagem do Campeão"/>
      <h3>${info.id}</h3>
       `       
    cardPack.appendChild(card); 

    
      // POP-UP //
    const popup = document.querySelector(".popup-wrapper");
    // CONTEUDO DO POP-UP //
    const popUpContent = document.querySelector(".popup-content");    

    card.addEventListener("click", () => {
      popup.style.display = "block";

      popUpContent.innerHTML = `
      <div class="image-splash">
        <img src="${info.splash}" class="img-bg" alt="Imagem do Campeão"/>
      </div>

        <h2 class="champion-name">${info.id}</h2>
        <h3 class="champion-title">${info.title}</h3>
        <div class="champion-data">
          <div class="champion-info">
            <p>Ataque: ${info.info.attack} | 

            Defesa: ${info.info.defense} | 

            Magia: ${info.info.magic} | 

            Dificuldade: ${info.info.difficulty}
            
            </p>
          

          </div>
      
        <div class="introduction">${info.blurb}</div>
        <div class="champion-info">
        ${info.tags[0]}, ${info.tags[1]}
        </div>

        <div class="grafico">

        <div id="barchart_material" style="width: 900px; height: 500px;"></div>

        </div>
      `;
    
    //RELAÇÃO COM O HTML
    const grafic = document.querySelector("#barchart_material")
    grafic.innerHTML = `
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>`

    //CHAMAMENTO DA FUNÇÃO DRAW-CHART
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);    
    
    //CRIAÇÃO DO GRÁFICO E EDIÇÃO 
    function drawChart() {
      let tagChampion = `${info.tags[0]}`//AQUI É O NOME DA CATEGORIA À QUAL O CAMPEÃO PERTENCE 
      let tagSelection = filterByTag(dataLol, tagChampion ) //AQUI É ONDE A GENTE CHAMA A SUA FUNÇÃO DE SELECIONAR POR CATEGORIA 

                  //CADA VARIÁVEL CORRESPONDE A UMA MÉDIA POR HABILIDADE: ATAQUE, DEFESA ETC. 
                  //PRECISAREMOS CRIAR UMA FUNÇÃO 
      let medAtt = Math.round((tagSelection.reduce((prevCard, nextCard) => prevCard + nextCard.info.attack, 0))/tagSelection.length)
      let medDef = Math.round((tagSelection.reduce((prevCard, nextCard) => prevCard + nextCard.info.defense, 0))/tagSelection.length)
      let medMag = Math.round((tagSelection.reduce((prevCard, nextCard) => prevCard + nextCard.info.magic, 0))/tagSelection.length)
      let medDiff = Math.round((tagSelection.reduce((prevCard, nextCard) => prevCard + nextCard.info.difficulty, 0))/tagSelection.length)

                  // PREENCHIMENTO DAQUELAS POSIÇÕES DO ARRAY, COMO SE FOSSE UMA TABELINHA
      let data = google.visualization.arrayToDataTable([
        ['HABILIDADES', `${info.id}`, `${tagChampion}`, 'Máximo'],
        ['ATAQUE', info.info.attack, medAtt, 10],
        ['DEFESA', info.info.defense, medDef, 10],
        ['MAGIA', info.info.magic, medMag, 10],
        ['DIFICULDADE', info.info.difficulty, medDiff, 10]
      ]);   

              //AQUI É ONDE COLOCAMOS AS PROPRIEDADES DO OBJETO QUE SERVEM PARA EDITAR O GRÁFICO 
      let options = {
        width: 800,
        height: 400,
        backgroundColor: {
          fill:'#171820'     
        },       
           
        chart: {
        title: `Habilidades de ${info.id}`, // ESSE É O TÍTULO DO GRÁFICO       
        //subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        chartArea: {
          backgroundColor: {
            fill: '#171820',
            fillOpacity: 0.1
          },
        },        
        bars: 'horizontal' // Required for Material Bar Charts.
      };
      
                //AQUI PEGAMOS A DIV OUTRA VEZ. EU NÃO SEI PQ, MAS SE TIRAR NÃO FUNCIONA KKKK
      let chart = new google.charts.Bar(document.getElementById('barchart_material'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
    });    
  
      // FECHAR POP-UP //
    popup.addEventListener("click", (event) => {
      const classNameOfClickedElement = event.target.classList[0];
      const classNames = ["popup-close", "popup-wrapper"];
      const shoudlClosePopUp = classNames.some(
        (classNames) => classNames === classNameOfClickedElement);
      if (shoudlClosePopUp) {
        popup.style.display = "none";
      }
    });
  } 
}

//FILTRAR POR NOME 
let searchName = document.querySelector(".search")

searchName.addEventListener('input', event => {
  searchName = event.target.value.trim().toUpperCase()
  let dataFilterName = filterNames(dataLol, searchName)
  console.log(dataFilterName)
  listingCards(dataFilterName)
})

//POR CATEGORIA
const filterButton = document.querySelector(".categorias");
filterButton.addEventListener('click', (event) => {
  const botaoClicado = event.target.textContent;
  
  if (botaoClicado == "Todos") {
    listingCards(dataLol)
  } else {
    const filtered = filterByTag(dataLol, botaoClicado);
    listingCards(filtered);
    }
});


//FILTRAR POR  DIFICULDADE - NÃO ESTOU CONSEGUINDO FAZER O DOM 
const categories = document.querySelector(".dropbtn")
categories.addEventListener("click", (event) => {
let chosendifficulty = event.target.textContent; 
  
  // if (chosendifficulty == "No filter") {
  //   listingCards(dataLol)
  // } else {
  //   const filtered = filterByTag(dataLol, chosendifficulty);
  //   listingCards(filtered);
  // }

  
 })


/*onst filterByTag = function (array, botaoClicado){
  const championTags = array.filter(champion => champion.tags[0] == botaoClicado || champion.tags[1] === botaoClicado);
  return championTags;
};*/



/*
console.log (medMag)
//let order = dataLol.sort((a, b) => (a.info.attack > b.info.attack ? 1 : -1)) )
console.log(media)

/*let order = dataLol.sort((a, b) => (a.info.attack > b.info.attack ? 1 : -1))
console.log(order)

let habilidades = Object.values(dataLol[0].info)

console.log(habilidades)
*/


