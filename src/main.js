import {filtroGenero, filtroEspecie, filtroStatus, ordemAlfabetica, calculoDePorcentagem} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
 

//FUNÇÃO DE IMPRIMIR AS INFORMAÇÕES NA TELA
function infoCardsTela (data) {
  document.getElementById('info-cards').innerHTML = data.map((item) => `
  <div>
    <div class="card-img">
      <img src="${item.image}">
    </div> 
      <ul class="info-cards">
        <li><strong>Nome:</strong>${item.name}</li>
        <li><strong>Gênero:</strong>${item.gender}</li>      
        <li><strong>Status:</strong>${item.status}</li>
        <li><strong>Espécie:</strong>${item.species}</li>
        <li><strong>Origem:</strong>${item.origin.name}</li>
        <li><strong>Localização:</strong>${item.location.name}</li>
      </ul>
  </div>
`).join('')
}
infoCardsTela(data.results);


//FUNÇÃO PARA FAZER A FILTRAGEM DE GÊNERO
const selecaoGenero = document.querySelector(".selecao-genero");
function imprimirFiltroGenero(e) {
  return infoCardsTela(filtroGenero(data.results, e.target.value));
  }
selecaoGenero.addEventListener("change", imprimirFiltroGenero);


//FUNÇÃO PARA FAZER A FILTRAGEM DE ESPÉCIE
const selecaoEspecie = document.querySelector(".selecao-especies");
function imprimirFiltroEspecie(e) {
  return infoCardsTela(filtroEspecie(data.results, e.target.value));
  }
selecaoEspecie.addEventListener("change", imprimirFiltroEspecie);


//FUNÇÃO PARA FAZER A FILTRAGEM DE STATUS
const selecaoStatus = document.querySelector(".selecao-status");
function imprimirFiltroStatus(e) {
  return infoCardsTela(filtroStatus(data.results, e.target.value));
  }
selecaoStatus.addEventListener("change", imprimirFiltroStatus);


//FUNÇÃO PARA FAZER A FILTRAGEM DE ORDEM
const selecaoOrdem = document.querySelector(".selecao-ordem");
function imprimirFiltroOrdem(e) {
  const order = ordemAlfabetica(data.results, e.target.value)
  return infoCardsTela(order);
  }
  console.log(selecaoOrdem)
selecaoOrdem.addEventListener("change", imprimirFiltroOrdem);

// const calcularPorcentagem = document.querySelector(".calculo-agregado");
// function calculoGenero(e) {
//   const estatistica = calculoDePorcentagem(data.results, e.target.value)
//   return calculo(estatistica);
//   }
// calcularPorcentagem.addEventListener("change", calculoGenero);








//FUNÇÃO PARA FAZER A FILTRAGEM DE ORDEM INVERSO
const selecaoOrdemInverso = document.querySelector(".selecao-ordem");
console.log (selecaoOrdemInverso)

function imprimirFiltroOrdemInverso(e) {
  return infoCardsTela(ordenarAlfabeticaZA(data.results, e.target.value));
  }
selecaoOrdemInverso.addEventListener("change", imprimirFiltroOrdemInverso);






//--------------------------------------------------------------------------------------------------------------------------------
/*if (a[sortBy] < b[sortBy] ){
  return -1;
}
if (a[sortBy] > b[sortBy] ){
  return 1;
}
return 0;
}*/


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

//--------------------------------------------------------------------------------------------------------------------------------
//console.log(data.results)

//--------------------------------------------------------------------------------------------------------------------------------
/*Recomendamos que utilize `src/main.js` para todos os códigos que tenham a ver com a exibição dos dados na tela.**
Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, registro de manejadores de eventos 
(*event listeners* ou *event handlers*) e etc.
Esta não é a única forma de dividir seu código. Pode utilizar mais arquivos e pastas, sempre e quando a estrutura estiver clara para suas colegas*/