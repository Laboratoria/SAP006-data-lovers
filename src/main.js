import { dataLovers } from './data.js';
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
    });
  }
  else {
    champs.sort(function (a, b) {

      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
  }
}

document.getElementById("ordenar").addEventListener("change", ordenar);

function cards(cartoesFiltrados) {
  let cartoes;
  if (cartoesFiltrados != null) {
    cartoes = cartoesFiltrados
  } else {
    cartoes = champs
  }

  let i;
  let champName;
  let champImg;
  let card;
  let imagem;
  let nomePersonagem;

  document.getElementById("container").innerHTML = "";

  for (i = 0; i < cartoes.length; i++) {
    champImg = cartoes[i].splash;
    champName = cartoes[i].name;
    // funcaoPersonagem = champs[i].tags;


    // CRIADO OS CARDS
    card = document.createElement("div");
    card.setAttribute("class", "card")

    document.getElementById("container").appendChild(card);

    //COLOCANDO IMAGEM DOS PERSONAGENS NO CARD
    imagem = document.createElement("img");
    imagem.setAttribute("src", champImg);
    card.appendChild(imagem)

    // COLOCANDO NOME E FUNÇÃO DOS PERSONAGENS
    nomePersonagem = document.createElement("SPAN");
    nomePersonagem.setAttribute("class", "nomeEFuncao");
    nomePersonagem.innerHTML = champName; // + "<br>" 
    card.appendChild(nomePersonagem);

  }
}
cards();


const botoes = [document.querySelectorAll(".btn")];

//ABA ASSASSINOS
function abaAssassinos() {

  const funcaoAssassino = ["Assassin"];

  function tag(funcao) {
    return funcaoAssassino.includes(funcao);
  }

  function assassin(champ) {
    return champ.tags.some(tag);
  }

  const cartoes = dataLovers.filterData(champs, assassin);
  cards(cartoes);
}


function mostrarAbaAtual(id) {
  switch (id) {
    case "btn-assassinos": abaAssassinos();

  }
}

function selecionarAba(event) {
  const abaId = event.target.id;
  mostrarAbaAtual(abaId);
}

botoes.forEach(aba => {
  for (let i = 0; i < aba.length; i++) {
    aba[i].addEventListener("click", selecionarAba);
  }
});






function pesquisar() {

  let textoDigitado = document.getElementById("campoPesquisar").value.toUpperCase();
  let dadosFiltrados = [];

  dadosFiltrados = champs.filter(function (cartaoAtual) {
    if (cartaoAtual.name.toUpperCase().includes(textoDigitado)) {
      return true;
    }
    else {
      return false;
    }
  })

  cards(dadosFiltrados);

  // CRIADO BOTÃO VOLTAR (APARECER SÓ QUANDO FILTRAR)
  let botaoVoltar = document.createElement('button')
  botaoVoltar.setAttribute('class', 'btnVoltar')
  botaoVoltar.addEventListener("click", voltarCard)
  botaoVoltar.innerHTML = "Voltar"
  document.getElementById('container').appendChild(botaoVoltar)
  console.log(botaoVoltar)

}

document.getElementById('botaoPesquisar').addEventListener('click', pesquisar)



function voltarCard() {
  cards()
}

voltarCard()