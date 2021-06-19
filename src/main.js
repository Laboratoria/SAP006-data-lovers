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