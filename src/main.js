import {filtroGenero, calcularPorcentagem} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
 
//console.log(data.filtrarGenero); 

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
`)
}
infoCardsTela(data.results);




const selecaoGenero = document.querySelector(".selecao-genero");
function printGenderFiltered(e) {
  return infoCardsTela(filtroGenero(data.results, e.target.value));
  }

selecaoGenero.addEventListener("change", printGenderFiltered);



//------------------------------
        
/*function infoCardsTela (data) {                                         //função que vem do data
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
infoCardsTela(data.results); */                                           //imprimi na tela as informações

//--------------------------------------------------------------------------------------------------------------------------------
//console.log(data.results)

//--------------------------------------------------------------------------------------------------------------------------------
/*Recomendamos que utilize `src/main.js` para todos os códigos que tenham a ver com a exibição dos dados na tela.**
Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, registro de manejadores de eventos 
(*event listeners* ou *event handlers*) e etc.
Esta não é a única forma de dividir seu código. Pode utilizar mais arquivos e pastas, sempre e quando a estrutura estiver clara para suas colegas*/