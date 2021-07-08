
import data from './data/ghibli/ghibli.js';
import { ordemAlfabetica } from './data.js'; 


const films = data.films
const listaImpressa = document.getElementById("listaImpressa")
let showFilme = (filmList) => {
filmList.forEach(film => {
listaImpressa.innerHTML += ` 
<li class="cardGhibli"> 
<img class="card-poster" src=" ${film.poster}">
<p class="card-titulo"> Title: ${film.title} </p> 
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


const listaPersonagem = document.getElementById("listaPersonagem")
let showPeople = (peopleList, film)=>{
  peopleList.forEach(people=> {
    listaPersonagem.innerHTML += 
      `
      <li class="cardPersonagem">
      <img src=${people.img} class="card-img" alt="ImagemPersonagem" >
      <p class="card-nome"> Personagem: ${people.name}</p>
      <p class="card-filme"> Filme: ${film} </p>
      <p class="card-gênero"> Genero: ${people.gender}</p>
      <p class="card-idade"> Idade: ${people.age}</p>
      <p class="card-specie"> Espécie: ${people.specie}</p>
      </li> `
  })
}

  for (let film of films) {
    let peopleList = film.people
    showPeople(peopleList, film.title)

  }   

//Filtrar filmes
const filterFilm = document.getElementById("select_id")
filterFilm.addEventListener("change", function(event) {
  listaImpressa.innerHTML = " "
  let director = event.target.value
  let filteres = films.filter(film => film.director == director );
  showFilme(filteres)
}) 

//Filtrar Genero
const femeleMale = document.getElementById("genero_id")  
femeleMale.addEventListener("change", function(event) {
  listaPersonagem.innerHTML = ""
    for (let filme of films) {
      let peopleS = filme.people

        let gender = event.target.value
        let filterGenero = peopleS.filter(peopleS => peopleS.gender == gender );
        showPeople(filterGenero, filme.title)
      
    } 
}) 
    
//ordenar
const ordenar = document.querySelector(".order");
function ordemFilme(event) {
const order = ordemAlfabetica(data.films, event.target.value)
showFilme(order);
}
ordenar.addEventListener("change", ordemFilme); 
  