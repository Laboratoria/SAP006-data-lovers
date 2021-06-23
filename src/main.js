import { atiradores } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';


const champs = Object.values(data.data);

function ordenar(event) {

  if (event.target.value == "decrescente") {

    champs.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      } else {
        return -1;
      }
    }
    );
  }
  else {
    champs.sort(function (a, b) {

      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    }
    );
  }



}

document.getElementById("ordenar").addEventListener("change", ordenar);


let i;
let champName;
let champImg;
let card;
let funcaoPersonagem;
let botaoFechar;
let imagem;
let nomePersonagem;

document.getElementById("container").innerHTML = "";

for (i = 0; i < champs.length; i++) {
  champImg = champs[i].splash;
  champName = champs[i].name;
  // funcaoPersonagem = champs[i].tags;


  // CRIADO OS CARDS
  card = document.createElement("div");
  //card.setAttribute("id", champName)
  card.setAttribute("class", "card")
  //card.addEventListener("click", aumentarCard);

  document.getElementById("container").appendChild(card);

  //COLOCANDO IMAGEM DOS PERSONAGENS NO CARD
  imagem = document.createElement("img");
  imagem.setAttribute("src", champImg)
  card.appendChild(imagem)

  // COLOCANDO NOME E FUNÇÃO DOS PERSONAGENS
  nomePersonagem = document.createElement("SPAN");
  nomePersonagem.setAttribute("class", "nomeEFuncao");
  nomePersonagem.innerHTML = champName; // + "<br>" 
  card.appendChild(nomePersonagem);

  // CRIADO O BOTAO E ADD EVENTO DE FECHAR
  // botaoFechar = document.createElement("button")
  // botaoFechar.setAttribute("class", "btnFechar")
  // botaoFechar.addEventListener("click", normalCard)
  // botaoFechar.innerHTML = "Fechar"
  // card.appendChild(botaoFechar)

  // nomePersonagem.appendChild(botaoFechar);

  // ADICIONAR O EVENTO "CLICK" AS CARTAS
  // card.addEventListener("click", function (e){
  //   if (e.target.nodeName == "SPAN" || e.target.nodeName == "IMG"){
  //     console.log("Anchor element clicked!"); 
  //     e.target.parentNode.innerHTML = "Anchor element clicked!";
  //   }
  // })


}


const botoes = [document.querySelectorAll(".btn")];


console.log(botoes);

const assassino = "funcao para filtrar assassino e gerar a carta (?)";





function mostrarAbaAtual(id){
  if (id === "btn-assassinos"){
    assassino.style.display = "block";
  }

}

function selecionarAba(e){
  const abaId = e.target.id;
  mostrarAbaAtual (abaId);

}


  function aba(botao){
    for (let i = 0; i < botao.length; i++) {
      botao[i].addEventListener("click", selecionarAba);
    
    }
  }
  botoes.forEach(aba);









// function objToArray(){
//   let champFuncao = [];
//   for (champ of champs){
//     for (funcao of champ.tags){
//       champFuncao.push(funcao);
//     }
//     console.log(champFuncao);
//   }

// }
// objToArray();






// function funcaoAssassino() {
//   for (let champ of champs) {
//     for (let funcao of champ.tags) {
//       funcao.filter(checkAssassin);
//       function checkAssassin(){
//         if (funcao[i] == "Assassin");



//         document.getElementById("container").innerHTML = x;

//       }

      
//     }

//   }
//   console.log("------")

// }

// document.getElementById("btn-assassinos").addEventListener("click", funcaoAssassino);




  //atiradores(champs, champs.tag == "atirador");

//}








// for(let champ of champs){
//   for (let funcao of champ.tags){
//     console.log(funcao);

//   }
//   console.log("------")

// }








//filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição. data champs? e condition tag==assassino