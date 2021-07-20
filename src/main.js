import data from "./data/lol/lol.js";
import {
  filterNames,
  difficultyOrder,
  filterByTag,
  mediaInfo
} from "./data.js";

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

      <h3>${info.id}</h3>
      <img src="${info.splash}" alt="Imagem do Campeão"/>

       `
    cardPack.appendChild(card);


    // POP-UP //
    const popup = document.querySelector(".popup-wrapper");
    // CONTEUDO DO POP-UP //
    const popUpContent = document.querySelector(".popup-content");

    card.addEventListener("click", () => {
      popup.style.display = "block";

      const attack = info.info.attack
      const defense = info.info.defense
      const magic = info.info.magic
      const difficulty = info.info.difficulty

      popUpContent.innerHTML = `
      <div class="image-splash">
        <img src="${info.splash}" class="img-bg" alt="Imagem do Campeão"/>
      </div>

        <h2 class="champion-name">${info.id}</h2>
        <h3 class="champion-title">${info.title}</h3>
        <div class="champion-data">
          <div class="champion-info">
            <p>Attack: ${attack} | 
            Defense: ${defense} | 
            Magic: ${magic} | 
            Difficulty: ${difficulty}
            </p>
          </div>
      
        <div class="introduction">${info.blurb}</div>
        <div class="champion-info">
        ${info.tags[0]}, ${info.tags[1]}
        </div>

        <div class="chart">
          <div id="barchart_material" class="chart-cont" style="width: 800px; height: 400px;"></div>
        </div>
      `;

      //GRÁFICO
      //RELAÇÃO COM O HTML
      const grafic = document.querySelector("#barchart_material")
      grafic.innerHTML = `
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>`


      //CHAMAMENTO DA FUNÇÃO DRAW-CHART
      /* eslint-disable no-undef */
      google.charts.setOnLoadCallback(drawChart);

      //CRIAÇÃO DO GRÁFICO E EDIÇÃO 
      function drawChart() {
        let tagChampion = `${info.tags[0]}`//AQUI É O NOME DA CATEGORIA À QUAL O CAMPEÃO PERTENCE 
        let tagSelection = filterByTag(dataLol, tagChampion) //AQUI É ONDE A GENTE CHAMA A SUA FUNÇÃO DE SELECIONAR POR CATEGORIA, pois já resulta num array filtrado 


        //CADA VARIÁVEL CORRESPONDE A UMA MÉDIA POR HABILIDADE: ATAQUE, DEFESA ETC. 
        //PRECISAREMOS CRIAR UMA FUNÇÃO 

        let medAtt = mediaInfo(tagSelection, 'attack')
        //let medAtt = Math.round((tagSelection.reduce((accum, champion) => accum + champion.info.attack, 0)) / tagSelection.length)
        let medDef = mediaInfo(tagSelection, 'defense')
        let medMag = mediaInfo(tagSelection, 'magic')
        let medDiff = mediaInfo(tagSelection, 'difficulty')

        // PREENCHIMENTO DAQUELAS POSIÇÕES DO ARRAY, COMO SE FOSSE UMA TABELINHA
        let data = google.visualization.arrayToDataTable([
          ['ABILITY', `${info.id}`, `${tagChampion}`, 'Max'],
          ['ATTACK', attack, medAtt, 10],
          ['DEFENSE', defense, medDef, 10],
          ['MAGIC', magic, medMag, 10],
          ['DIFFICULTY', difficulty, medDiff, 10]
        ]);

        //AQUI É ONDE COLOCAMOS AS PROPRIEDADES DO OBJETO QUE SERVEM PARA EDITAR O GRÁFICO 
        let options = {
          width: '100%',
          height: '50%',
          backgroundColor: {
            fill: '#171820'
          },

          chart: {
            title: `${info.id}'s Abilities`, // ESSE É O TÍTULO DO GRÁFICO       
            subtitle: 'Point your cursor at the bars',
          },
          chartArea: {
            backgroundColor: {
              fill: '#171820',
              fillOpacity: 0.1
            },
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          titleTextStyle: {
            position: 'center',
            color: '#ffc700',
            fontSize: 20,
            fontName: 'sans-serif',
            bold: true,
            italic: false,

          },

        };


        //AQUI PEGAMOS A DIV OUTRA VEZ. EU NÃO SEI PQ, MAS SE TIRAR NÃO FUNCIONA KKKK
        let chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));

        /*$(window).resize(function(){
          drawChart();
        });*/
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
const searchName = document.querySelector(".search");

searchName.addEventListener('input', event => {
  const searchName = event.target.value.trim().toUpperCase();

  const dataFilterName = filterNames(dataLol, searchName);
  listingCards(dataFilterName);
})

let filtered = dataLol

//POR CATEGORIA
const filterButton = document.querySelector(".menu");
filterButton.addEventListener('click', (event) => {
  const botaoClicado = event.target.textContent;

  if (botaoClicado == "All Champions") {
    filtered = dataLol
  } else {
    filtered = filterByTag(dataLol, botaoClicado);
    console.log(filtered)
  }
  listingCards(filtered)
});

//FILTRAR POR  DIFICULDADE
const categories = document.querySelector(".dropbtn")

categories.addEventListener("change", (event) => {
  const chosendifficulty = event.target.value;

  const sortByDif = difficultyOrder(filtered, chosendifficulty);
  console.log(sortByDif)
  listingCards(sortByDif);

});