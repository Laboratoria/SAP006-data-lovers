import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';



console.log(data.results)





/*
function cardsTela(data) {
    document.getElementById('info-cards').innerHTML = data.map((item) => `
        <ul class="lista-card">
          <li>Nome: <strong>${item.name}</strong></li>
          <li>Status: <strong>${item.status}</strong></li>
          <li>Espécie: <strong>${item.species}</strong></li>
          <li>Gênero: <strong>${item.gender}</strong></li>      
          <li>Localização: <strong>${item.location.name}</strong></li>
        </ul>
  `)
  }
  cardsTela(data.results);
  */



/*
- [ ]  **Recomendamos que utilize `src/main.js` para todos os códigos que tenham a ver com a exibição dos dados na tela.**
Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, registro de manejadores de eventos 
(*event listeners* ou *event handlers*) e etc.

Esta não é a única forma de dividir seu código. Pode utilizar mais arquivos e pastas, sempre e quando a estrutura estiver clara para suas colegas.
*/