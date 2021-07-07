// import { filtro } from './data.js';
import data from "./data/rickandmorty/rickandmorty.js";

const personagens = data.results;
// console.log(data.results[0]);

const botao = document.getElementById("buscar");
botao.addEventListener("click", (e) => filtrar(e));

function mostrarCartoes(itens) {
  const cards = document.querySelector("#resultado");
  cards.innerHTML = "";
  //   if (mostrarCartoes === []) {
  //     return alert('Filtro não encontrado')
  //   }
  const cartoes = itens.map(({ status, species, type, origin, image, name, gender }) =>
        `<div class="flip">
          <div class="card">
            <div class="front-card">
              <div><img  class="image" src="${image}" alt="personagens Rick and Morty"></div>
              <h3 class="text">${name}</h3>
            </div>

            <div class="back-card">
              <div class="text-back-card>
                
                <h3 class="back-title>Origin</h3>
                <p class="legend">${origin.name}</p>

                <h3 class="back-title">Status</h3>
                <p class="legend">${status}</p>

                <h3 class="back-title">Gênero</h3>
                <p class="legend">${gender}</p>

                <h3 class="back-title">Espécie</h3> 
                <p class="legend">${species}</p> 
              
              </div> 
            </div>
          </div>
        </div>`
    )
    .join("");

  document.getElementById("resultado").innerHTML += cartoes;
}

const filtrar = function (k) {
  k.preventDefault();

  //   console.log('clicou')

  const filtroStatus = document.getElementById("caracter-status").value;
  const filtroSpecies = document.getElementById("caracter-species").value;
  const filtoGender = document.getElementById("caracter-gender").value;
  const ordenaraz = document.getElementById("ordenar").value;
  
//   const ordem = function(a,b){
//     ordenaraz.sort(function (a, b) {
//         return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
     
//      });
//     console.log(ordenaraz)
//   }

  const personagensFiltrados = personagens.filter(function (personagem) {
    if (
      personagem.status === filtroStatus ||
      personagem.species === filtroSpecies ||
      personagem.gender === filtoGender 
    ) {
      return personagem;
    }
  });
  mostrarCartoes(personagensFiltrados);
};

personagensFiltrados.slice([0[9]]);