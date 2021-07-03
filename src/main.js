import {filtroGenero, filtroEspecie, filtroStatus, ordemAlfabetica, calculoDePorcentagem} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
 

//FUNÇÃO DE IMPRIMIR AS INFORMAÇÕES NA TELA
function infoCardsTela (data) {
  document.getElementById('info-cards').innerHTML = data.map((item) => `
  <div class="cards">
      <div class="front-card">
        <img class="img-card" src="${item.image}">
      </div>

      <div class="front-text">
        <ul class="front-text-card">
          <li><strong>${item.name}</strong></li>
        </ul>
      </div> 

      

  </div>
`).join('')
}
infoCardsTela(data.results);


//FUNÇÃO PARA FAZER A FILTRAGEM DE GÊNERO
const selecaoGenero = document.querySelector("#selecao-genero");
function imprimirFiltroGenero(e) {
  return infoCardsTela(filtroGenero(data.results, e.target.value));
  }
selecaoGenero.addEventListener("change", imprimirFiltroGenero);


//FUNÇÃO PARA FAZER A FILTRAGEM DE ESPÉCIE
const selecaoEspecie = document.querySelector("#selecao-especies");
function imprimirFiltroEspecie(e) {
  return infoCardsTela(filtroEspecie(data.results, e.target.value));
  }
selecaoEspecie.addEventListener("change", imprimirFiltroEspecie);


//FUNÇÃO PARA FAZER A FILTRAGEM DE STATUS
const selecaoStatus = document.querySelector("#selecao-status");
function imprimirFiltroStatus(e) {
  return infoCardsTela(filtroStatus(data.results, e.target.value));
  }
selecaoStatus.addEventListener("change", imprimirFiltroStatus);


//FUNÇÃO PARA FAZER A FILTRAGEM DE ORDEM
const selecaoOrdem = document.querySelector("#selecao-ordem");
function imprimirFiltroOrdem(e) {
  const order = ordemAlfabetica(data.results, e.target.value)
  return infoCardsTela(order);
  }
  console.log(selecaoOrdem)
selecaoOrdem.addEventListener("change", imprimirFiltroOrdem);

const calcularPorcentagem = document.querySelector("#calculo-agregado");
  function calculoGenero(e) {
    const estatistica = calculoDePorcentagem(data.results, e.target.value)
    return calculo(estatistica);
}
calcularPorcentagem.addEventListener("change", calculoGenero);




/* <aside class="back-card">
        <ul class="text-card">
          <li><strong>Nome:</strong>${item.name}</li>
          <li><strong>Gênero:</strong>${item.gender}</li>      
          <li><strong>Status:</strong>${item.status}</li>
          <li><strong>Espécie:</strong>${item.species}</li>
          <li><strong>Origem:</strong>${item.origin.name}</li>
          <li><strong>Localização:</strong>${item.location.name}</li>
        </ul>
      </aside> */



//--------------------------------------------------------------------------------------------------------------------------------
        
/*FUNÇÃO DE IMPRIMIR AS INFORMAÇÕES NA TELA!!
function infoCardsTela (data) {                                         //função que vem do data
  document.getElementById('info-cards').innerHTML = data.map((item) => `  //vai no html e "joga" as info aonde foi colocado uma div = mapeia o data e pega por item
  <div class="texto-cards">                                               //classe para estilizar os cards
      <ul class="cards">                                                  //lista para importar as informações
        <img src="${item.image}">                                         //faz com que importe as imagens
        <li><strong>Nome:</strong>${item.name}</li>                       //importa os nomes pela chave de objeto ${} 
        <li><strong>Gênero:</strong>${item.gender}</li>                   //importa o gênero pela chave de objeto ${} 
        <li><strong>Status:</strong>${item.status}</li>                   //importa o status pela chave de objeto ${} 
        <li><strong>Espécie:</strong>${item.species}</li>                 //importa as espécies pela chave de objeto ${} 
        <li><strong>Origem:</strong>${item.origin.name}</li>              //importa a origem pela chave de objeto ${} 
        <li><strong>Localização:</strong>${item.location.name}</li>       //importa a localização pela chave de objeto ${} 
      </ul>                                                               //fecha a lista
  </div>                                                                  //fecha a div
`)                                                                        
}                                                   
infoCardsTela(data.results); */                                           //imprimir na tela as informações
