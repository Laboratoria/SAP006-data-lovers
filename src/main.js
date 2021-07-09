//import { example } from './data.js';
//console.log(example, data);

//import { dataghibli } from './data.js';

import { ordemAlfabetica, getPeople, buscarName } from './data.js';

import data from './data/ghibli/ghibli.js';

// Importar Filmes//

const films = data.films
const people = getPeople(films)




const listaImpressa = document.getElementById("listaImpressa")

const showFilme = (filmList) => {
  listaImpressa.innerHTML = ""
  filmList.forEach(film => {
    listaImpressa.innerHTML += `  
    <li class="cardGhibli"> 
    <img class="card-poster" src=" ${film.poster}">
    <p class="card-titulo"> ${film.title} </p> 
    <p class="card-lançamento"> Release date: ${film.release_date} </p>
    <p class="card-descrição"> Description: ${film.description} </p>    
    <p class="card-diretor"> Director: ${film.director} </p>
    <p class="card-producer"> Producer: ${film.producer} </p>
    <p class="card-avaliação"> Score: ${film.rt_score} </p>
   </li>
  `
  })

}
showFilme(films)


//Importar Personagem //

const listaPersonagem = document.getElementById("listaPersonagem")
const showPeople = (peopleList) => {
  listaPersonagem.innerHTML = ""
  peopleList.forEach(people => {
    listaPersonagem.innerHTML +=
      `
    <li class="cardPersonagem">
          <img class="card-poster" src=" ${people.img}">
          <p class="card-personagens">${people.name}</p>
          <p class="card-filme"> Filme: ${people.movie} </p>
          <p class="card-gênero"> Genero: ${people.gender}</p>
          <p class="card-idade"> Idade: ${people.age}</p>
          <p class="card-specie"> Espécie: ${people.specie}</p>
         
    </li> 
  `
  })
}
showPeople(people)


//SEARCH//
const buscarNomes = document.getElementById("search");
function filtroPesquisa(e) {
  const charactersByName = buscarName(data.films, e.target.value);
  showFilme(charactersByName);
}
buscarNomes.addEventListener("keyup", filtroPesquisa);



//ORDENAR //
const ordenar = document.querySelector(".order");
function ordemFilme(event) {
  const order = ordemAlfabetica(data.films, event.target.value)
  showFilme(order);
}
ordenar.addEventListener("change", ordemFilme);


//FILTRO FILME_PERSONAGEM//
const filtrarMenu = document.getElementById("filterMenu")
filtrarMenu.addEventListener("change", function (event) {
  let filmeMenu = event.target.value
  if (filmeMenu == "Filmes") {
    listaPersonagem.innerHTML = ""
    showFilme(films)
  }
  else if (filmeMenu == "Personagem") {
    listaImpressa.innerHTML = ""
    showPeople(people)
  }
  else {
    listaImpressa.innerHTML = ""
    listaPersonagem.innerHTML = ""
    showFilme(films)
    showPeople(people)
  }
})

//FILTRO DIRETOR//
const filterFilm = document.getElementById("select_id")
filterFilm.addEventListener("change", function (event) {
  let director = event.target.value
  let filteres = films.filter(film => film.director == director);
  showFilme(filteres)
});



