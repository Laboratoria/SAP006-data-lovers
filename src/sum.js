import {people, films} from "./data.js";

function sumTotalChars (people) {
document.getElementById("boxChars").innerHTML = people.length;}
sumTotalChars(people);

function sumTotalMovies (films) {
    document.getElementById("boxMovies").innerHTML = films.length;}
    sumTotalMovies(films);
