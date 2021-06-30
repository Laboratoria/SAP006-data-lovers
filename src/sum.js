import data from "./data/ghibli/ghibli.js";
const films = data.films; 
const people = films.reduce((total, film)=> total.concat(film.people), []);

function sumTotalChars (people) {
document.getElementById("boxChars").innerHTML = people.length;}
sumTotalChars(people);

function sumTotalMovies (films) {
    document.getElementById("boxMovies").innerHTML = films.length;}
    sumTotalMovies(films);
