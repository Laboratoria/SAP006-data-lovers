import {filtroGenero, calcularPorcentagem} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
 
//console.log(data.filtrarGenero); 

function infoCardsTela (data) {
  document.getElementById('info-cards').innerHTML = data.map((item) => `
  <div class="texto-cards">
      <ul class="cards">
        <img src="${item.image}">
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







//<img src="${item.image}"> = faz com que importe as imagens



//console.log(data.results)




/* #2
const addPosts = async () => {
  const posts = await getposts()
  const postTemplate = posts.map(({id, title, body}) => `
  <div class="post">
  <div class="number>${id}</div>
  <div class="post-info">
  <h2 class="post-title>${title}</h2>
  <p class="post-body">${body}</p>
  </div>
  </div>
` ).join('')
postContainer.innerHTML += postTemplate  
} */







  
/*
- [ ]  **Recomendamos que utilize `src/main.js` para todos os códigos que tenham a ver com a exibição dos dados na tela.**
Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, registro de manejadores de eventos 
(*event listeners* ou *event handlers*) e etc.
Esta não é a única forma de dividir seu código. Pode utilizar mais arquivos e pastas, sempre e quando a estrutura estiver clara para suas colegas.
*/