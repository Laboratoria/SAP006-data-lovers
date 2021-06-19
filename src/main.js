import {filterData} from './data.js'
import {sortData} from './data.js';
import {computeStats} from './data.js';

import data from './data/ghibli/ghibli.js'

const films = data.films



//console.log(sortData(films, "Release", "Descending"))
//console.log(films[0]['director'])


//console.log(filterData(films, "director","Hayao Miyazaki"))

//console.log(filterData(films, "producer","Toshio Suzuki"))



const femalePeople = ()=>{
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
  

//films.filter(value => value['people']['gender']=='female')
console.log(femalePeople())