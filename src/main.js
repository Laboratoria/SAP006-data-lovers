import { filtrarPersonagens, ordemAZ, ordemZA, buscarPorLetra } from './data.js';

import data from "./data/rickandmorty/rickandmorty.js";

const personagens = data.results;
const ordemPersonagem = data.results.name

const botao = document.getElementById("buscar");
botao.addEventListener("click", (e) => filtrar(e));

const procura = document.getElementById("input-procurar")



function mostrarCartoes(itens) {
  const cards = document.querySelector("#resultado");
  cards.innerHTML = "";
  
  const cartoes = itens.map(({ status, species, type, origin, image, name, gender }) =>
        `<div class="flip">
          <div class="card">
            <div class="front-card">
              <div><img  class="image" src="${image}" alt="personagens Rick and Morty"></div>
              <h3 class="text">${name}</h3>
            </div>
            <div class="back-card">
              <div class="text-back-card>
                
                <h3 class="back-title">Origem</h3>
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

  const filtroStatus = document.getElementById("caracter-status").value;
  const filtroSpecies = document.getElementById("caracter-species").value;
  const filtroGender = document.getElementById("caracter-gender").value;
  
  const personagensFiltrados = filtrarPersonagens(personagens, filtroStatus, filtroSpecies, filtroGender)

  mostrarCartoes(personagensFiltrados.slice(0,50));
};


function ordenarA(e){
  e.preventDefault();
  const filtroAZ = ordemAZ(data.results);

  mostrarCartoes(filtroAZ);
  
};
document.getElementById("btn-desordenar").addEventListener("click", ordenarA);

function ordenarZ(e) {
  e.preventDefault();
  const filtroZA= ordemZA(data.results);

  mostrarCartoes(filtroZA);
};
document.getElementById("btn-ordenar").addEventListener("click", ordenarZ);

function search(e){
  e.preventDefault();

  const pesquisaNome = procura.value;
  const filtroNome = (buscarPorLetra(data.results, pesquisaNome));

  mostrarCartoes(filtroNome);
};
document.getElementById("btn-procurar").addEventListener("click", search);