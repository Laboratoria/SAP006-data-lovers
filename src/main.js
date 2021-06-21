import { example } from './data.js';
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

  cards()

}

document.getElementById("ordenar").addEventListener("change", ordenar)

function cards() {
  let i;
  let champName;
  let champImg;
  let card;
  let funcaoPersonagem;
  let botaoFechar;
  let imagem;
  let nomePersonagem;

  document.getElementById("container").innerHTML = ""

  for (i = 0; i < champs.length; i++) {
    champImg = champs[i].splash;
    champName = champs[i].name;
    funcaoPersonagem = champs[i].tags;


    // CRIADO OS CARDS
    card = document.createElement("div");
    card.setAttribute("class", "card")
    card.addEventListener("click", aumentarCard);

    document.getElementById("container").appendChild(card);

    //COLOCANDO IMAGEM DOS PERSONAGENS NO CARD
    imagem = document.createElement("img");
    imagem.setAttribute("src", champImg)
    card.appendChild(imagem)

    // COLOCANDO NOME E FUNÇÃO DOS PERSONAGENS
    nomePersonagem = document.createElement("div");
    nomePersonagem.setAttribute("class", "nomeEFuncao");
    nomePersonagem.innerHTML = champName + "<br>" + "Função: " + funcaoPersonagem;
    card.appendChild(nomePersonagem)

    // CRIADO O BOTAO E ADD EVENTO DE FECHAR
    botaoFechar = document.createElement("button")
    botaoFechar.setAttribute("class", "btnFechar")
    botaoFechar.addEventListener("click", normalCard)
    botaoFechar.innerHTML = "Fechar"
    card.appendChild(botaoFechar)

    nomePersonagem.appendChild(botaoFechar);


  }
}
cards();


function aumentarCard(x) {

  const divDoCartao = x.target.parentNode;

  if(divDoCartao.classList.contains("card")) {
    divDoCartao.classList.add("cartaoAberto");
  }
}

function normalCard(x) {

  const divDoCartao = x.target.parentNode.parentNode;
  divDoCartao.classList.remove("cartaoAberto");

}




















