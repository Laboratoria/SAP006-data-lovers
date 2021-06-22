import { example } from './data.js';
import { } from './data.js';
import data from './data/ghibli/ghibli.js';
const animations = data.films

//console.log(animations.sort((a,b)=>(a.rt_score > b.rt_score? 1:-1)))

function showPosterFilms(){
    let photo = "";
    for(let item of animations) {
        photo += `<div class = "front-poster">
        <p class="title-of-film"> <strong>${item.title}</strong></p>
        <img src="${item.poster}" class="poster-card">
        </div>`
    } 
    //return photo
    document.getElementById("poster-cards").innerHTML = photo;
}
console.log(showPosterFilms())
