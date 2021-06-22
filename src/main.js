import {filterData} from './data.js'
import {sortData} from './data.js';
import {average} from './data.js';

import data from './data/ghibli/ghibli.js'

const films = data.films

//console.log(sortData(films, "Release", "Descending"))
//console.log(sortData(films, "title", "Ascending"))
//console.log(films[0]['director'])


//console.log(filterData(films, "director","Hayao Miyazaki"))

//console.log(filterData(films, "producer","Toshio Suzuki"))


//lista de todas as personagens femininas
const femaleTotal = ()=>{
  let female = []
  let peopleList 
  for(let film of films ){
    peopleList = film.people
    for(let people of peopleList){
      if(people.gender=="Female"){
          female.push(people)
      }
    }  
  }
  return female
}

//lista de personagens feminias por filme
const femalePerFilm = ()=>{
  let femaleList = []
  for(let film of films ){
    let thisFilm = []
    let peopleList = film.people
    for(let people of peopleList){
      if(people.gender=="Female"){
          thisFilm.push(people)
      }
    }
    femaleList.push(thisFilm)
  }
  return femaleList
}


const scores = (dataFilms) => {
  let scoreFilms = []
  for (let film of dataFilms){
    let scoreNumber = parseInt(film["rt_score"])
    scoreFilms.push(scoreNumber)
  }
  return scoreFilms
}

console.log(scores(films))
console.log(average(scores(films)))
 
//console.log(femalePerFilm())
  

//films.filter(value => value['people']['gender']=='female')
// console.log(femalePeople()


const containerMovies = document.getElementById("container-movies")
  // const movie = document.createElement("section")
  // movie.setAttribute("class", "movie")
  // containerMovies.appendChild(movie)
  // containerMovies.innerHTML="TESTE"

  // const divPoster = document.createElement("figure")
  // divPoster.setAttribute("class","movie-poster")
  // movie.appendChild(divPoster)

  // const poster = document.createElement("img")
  // poster.setAttribute("class","poster")
  // const image = "img/Castle_in_the_Sky.jpg"
  // poster.setAttribute("src", image)



films.forEach(film =>{
  containerMovies.innerHTML +=`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <section class="movie">
  <figure class="movie-poster">
    <img class="poster" src=${film.poster} alt="">
    
  </figure>

  <section class="movie-details" id="movie-details">
    <div class="movie-headline" id="movie-headline">
      <div class="container-title">
        <h3 class="movie-title" id="movie-title">${film.title}</h3>
        <h5 class="release-date" id="release-date">${film.release_date}</h5>
      </div>

      <figure class="score">
        <img class="star" src="img/star.png" alt="">
        <span class="rt-score">${film.rt_score}</span>
      </figure>
    </div>

    <div class="details" id="characters">
      <h4 class="detail-title">Personagens</h4>
      <div class="images">
        <img src=${film.people[0].img} alt="" class="character-picture">
        <img src=${film.people[1].img} alt="" class="character-picture">
        <img src=${film.people[2].img} alt="" class="character-picture">
        <img src=${film.people[3].img} alt="" class="character-picture">
        <button class="more-characters">Ver mais</button>
      </div>
    </div>

    <div class="details" id="synopsis">
      <h4 class="detail-title" id="synopsis-title">Sinopse</h4>
      <p class="detail-text">${film.description}</p>
    </div>

    <div class="details" id="director">
      <h4 class="detail-title">Diretor</h4>
      <p class="detail-text">${film.director}</p>
    </div>

    <div class="details" id="producer">
      <h4 class="detail-title">Produtor</h4>
      <p class="detail-text">${film.producer}</p>
    </div>
     

    
  </section>

</section>
`
})                                                                                                                                                                                                                          
