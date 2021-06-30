
import { deadOrAlive } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';;

botaoPesquisar.getElementById('buscar');
botao.addEventListener('click', (e) => filtrar(e));

 const cards = document.querySelector.map('.cards');
 const cartoes = data.results.map(({ status, species, type, origin }) =>
     `<div id="container-card">
     <img src="${image}" id="foto-card"></img>
     </div>

 <div>

   <span id="type">
     <h3>${type}</h3>
   </span>
      
   <span id="species">
     <p>${species}</p>
   </span>

   <span id="status">
     <p>${status}</p>
   </span>

 </div>`).join("");

 cards.innerHTML += cartoes;

 const filtrar = function (k) {
     k.preventDefault();

     const filtroStatus = document.getElementById('caracter-status')
     const opcoesStatus = status.filter.option[filtroStatus.seletor].value;

     const filtroEspecie = document.getElementById('caracter-species')
     const opcoesEspecie = species.filer.option[filtroEspecie.seletor].value;

     const filtroTipo = document.getElementById('caracter-type')
     const opcoesTipo = type.filer.option[filtroTipo.seletor].value;

     const filtroOrigem = document.getElementById('caracter-filter')
     const opcoesOrigem = origin.filer.option[filtroOrigem.seletor].value;
 }   

