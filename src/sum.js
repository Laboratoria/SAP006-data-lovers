import data from "./data/ghibli/ghibli.js";
import { getPeople } from "./data.js";
const films = data.films;
const people = getPeople(films);

function sumTotalChars (people) {
document.getElementById("boxChars").innerHTML = people.length;}
sumTotalChars(people);

function sumTotalMovies (films) {
    document.getElementById("boxMovies").innerHTML = films.length;}
    sumTotalMovies(films);
