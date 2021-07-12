import {filtroGenero, filtroEspecie, filtroStatus, ordemAlfabetica, buscarNome, calcularPorcentagem} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
 

//////////////////FUNÇÃO DE IMPRIMIR AS INFORMAÇÕES NA TELA
function infoCardsTela (data) {
  document.getElementById('info-cards').innerHTML = data.map((item) => `
  <div class="cards">
    <div class="front-img">
      <img class="card-img" src="${item.image}">
    </div>

      <div class="front-text">
        <ul class="front-text-card">
          <li><strong>Nome:</strong>${item.name}</li>
          <li><strong>Gênero:</strong>${item.gender}</li>      
          <li><strong>Status:</strong>${item.status}</li>
          <li><strong>Espécie:</strong>${item.species}</li>
          <li><strong>Origem:</strong>${item.origin.name}</li>
          <li><strong>Localização:</strong></li>
            <p> ${item.location.name} </p>
            <h4> Aparece em: </h4>
            <p>${item.episode.length} episódios</p>
        </ul>
      </div> 

  </div>
`).join('')
}
infoCardsTela(data.results);

//////////////////TODOS OS QUERY SELECTOR JUNTOS
const selecaoGenero = document.querySelector("#selecao-genero"); 
const selecaoEspecie = document.querySelector("#selecao-especies");
const selecaoStatus = document.querySelector("#selecao-status");
const selecaoOrdem = document.querySelector("#selecao-ordem");

//////////////////TODOS OS GET ELEMENT BY ID JUNTOS
const buscaNomePersonagem = document.getElementById("text-search");
const texto = document.getElementById("porcentagem-filtro");
const botaoLimpar = document.getElementById("media-limpar")


//////////////////FUNÇÃO PARA EXIBIR O CÁLCULO DE PORCENTAGEM
function mostrarPorcentagem(data) {
  texto.innerHTML = `Essa categoria representa ${data}`
  texto.style.display = 'inline-block'
}

//////////////////FUNÇÃO PARA FAZER A FILTRAGEM DE GÊNERO
function imprimirFiltroGenero(e) {
  const resultadoGenero = filtroGenero(data.results, e.target.value)
  const porcentagemText = `${calcularPorcentagem(data.results.length, resultadoGenero.length)}% dos personagens`
  mostrarPorcentagem(porcentagemText)
  return infoCardsTela(resultadoGenero);
}

//////////////////FUNÇÃO PARA FAZER A FILTRAGEM DE ESPÉCIE
function imprimirFiltroEspecie(e) {
  const resultadoEspecie = filtroEspecie(data.results, e.target.value)
  const porcentagemTextEspecie = `${calcularPorcentagem(data.results.length, resultadoEspecie.length)}% dos personagens`
  mostrarPorcentagem(porcentagemTextEspecie)
  return infoCardsTela(resultadoEspecie);
}

//////////////////FUNÇÃO PARA FAZER A FILTRAGEM DE STATUS
function imprimirFiltroStatus(e) {
  const resultadoStatus = filtroStatus(data.results, e.target.value)
  const porcentagemStatus = `${calcularPorcentagem(data.results.length, resultadoStatus.length)}% dos personagens`
  mostrarPorcentagem(porcentagemStatus)
  return infoCardsTela(resultadoStatus);
}

//////////////////FUNÇÃO PARA FAZER A FILTRAGEM DE ORDEM
function imprimirFiltroOrdem(e) {
  const order = ordemAlfabetica(data.results, e.target.value)
  return infoCardsTela(order);
}

//////////////////BUSCAR NOMES PELO SEARCH
function buscarNomePersonagens(e) {
  const nomePersonagens = buscarNome(data.results, e.target.value)
  return infoCardsTela(nomePersonagens);
}

function limparFiltros(){
window.location.reload();
}

//////////////////ADIÇÃO DE EVENTOS
selecaoGenero.addEventListener("change", imprimirFiltroGenero);
selecaoGenero.addEventListener("change", imprimirFiltroGenero);
selecaoEspecie.addEventListener("change", imprimirFiltroEspecie);
selecaoStatus.addEventListener("change", imprimirFiltroStatus);
selecaoOrdem.addEventListener("change", imprimirFiltroOrdem);
buscaNomePersonagem.addEventListener("keyup", buscarNomePersonagens);
botaoLimpar.addEventListener("click", limparFiltros)
