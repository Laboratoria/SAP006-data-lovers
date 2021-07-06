import './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/ghibli/ghibli.js';
const ghibliMovies = data.films;

//console.log(example, data);

//DOM
const card = document.getElementById("cards");
const movie = (movies) => {
	movies.forEach(ghibliMovie => {
		card.innerHTML += `
		<h2>${ghibliMovie.title}</h2>
		<img src=${ghibliMovie.poster}>
		<h4>Description: ${ghibliMovie.description}</h4>
		<h4>Director: ${ghibliMovie.director}</h4>
		<h4>Producer: ${ghibliMovie.producer}</h4>
		<h4>Release Date: ${ghibliMovie.release_date}</h4>
		<h4>Score: ${ghibliMovie.rt_score}</h4>
		`
	})
}
movie(ghibliMovies);


