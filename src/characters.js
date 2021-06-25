import { filterData } from './data.js'
import { sortData } from './data.js';
import { average } from './data.js';

import data from './data/ghibli/ghibli.js'

const films = data.films



const gallery = document.getElementById("gallery")
const printPeople = (peopleList, film)=>{
  peopleList.forEach(people=> {
    gallery.innerHTML += 
    ` 
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src=${people.img} class="card-img" alt="Imagem do personagem" >
          <h5>${people.name}</h5>
        </div>
          <div class="card-back">
            <h1 class="name-character">${people.name}</h1>
            <h2 class="item-character">Filme:</h2>
            <p class="movie-name">${film}</p>
            <h2 class="item-character">Gênero:</h2>
            <p >${people.gender}</p>
            <h2 class="item-character">Idade:</h2>
            <p>${people.age}</p>
            <h2 class="item-character">Espécie:</h2>
            <p>${people.specie}</p>
          </div>  
        </div>
    </div> 
  `
  })
}


for (let film of films) {
  let peopleList = film.people
  printPeople(peopleList, film.title)
}



//lista de todas as personagens femininas
const genderFilter = (film,gender) => {
  let peopleList= film.people
  let list = filterData(peopleList,"gender", gender)
  return list
}

const filter=document.getElementById("filter")

filter.addEventListener("change", (event)=>{
  gallery.innerHTML=""
  const optionSelected = filter.options[filter.selectedIndex]
  const optionValue = optionSelected.value
  films.forEach(film=>{
    if(optionValue=="Male"){
      printPeople(genderFilter(film, "Male"),film.title)
    }
    else{
      printPeople(genderFilter(film,"Female"),film.title)
    }

  })
  event.preventDefault()
})




//lista de personagens feminias por filme
const femalePerFilm = () => {
  let femaleList = []
  for (let film of films) {
    let thisFilm = []
    let peopleList = film.people
    for (let people of peopleList) {
      if (people.gender == "Female") {
        thisFilm.push(people)
      }
    }
    femaleList.push(thisFilm)
  }
  return femaleList
}


const scores = (dataFilms) => {
  let scoreFilms = []
  for (let film of dataFilms) {
    let scoreNumber = parseInt(film["rt_score"])
    scoreFilms.push(scoreNumber)
  }
  return scoreFilms
}

//console.log(scores(films))
//console.log(average(scores(films)))

//console.log(femalePerFilm())


//films.filter(value => value['people']['gender']=='female')
// console.log(femalePeople()


