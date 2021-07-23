import data from "./data/ghibli/ghibli.js";
import { getPeople } from "./data.js";
const films = data.films;
const people = getPeople(films);

export function sumTotalChars(people) {
  document.getElementById("boxChars").innerHTML = people.length;
}
sumTotalChars(people);

export function sumTotalMovies(films) {
  document.getElementById("boxMovies").innerHTML = films.length;
}
sumTotalMovies(films);

const gens = people.reduce((total, people) => total.concat(people.gender), []);
export const calcGender = gens.reduce(function (allGenders, gender) {
  if (gender in allGenders) {
    allGenders[gender]++;
  } else {
    allGenders[gender] = 1;
  }
  return allGenders;
}, {});


let calc = document.getElementById("boxChars");
let str = JSON.stringify(calcGender).replace(/[{}"]/g,'');

calc.addEventListener("mouseover",function() {
  const boxChar = document.getElementById("genders");        
  boxChar.style.margin="10px"
  boxChar.style.padding="3px"  
  boxChar.style.border="solid 3px #000"       
  boxChar.style.borderRadius="5px"
  boxChar.style.fontSize="20px"
  boxChar.innerHTML = str} );

calc.addEventListener("mouseout", function() {
  const boxChar = document.getElementById("genders");
  boxChar.style="none"
  boxChar.innerHTML = ""});

