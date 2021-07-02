
import { filterSpeciesSelected, filterGender, order} from './data.js';
import data from './data/ghibli/ghibli.js';
const characters = data.films.reduce(function(chars, film){ 
            
    // [...chars, ...film.people]
    return chars.concat(film.people)

}, [])


function showCharacters(a) {
    let people = "";
    for (let item of a) {

        people += `
        <div class="flip-card">
        <div class="flip-card-inner">
         <div class="flip-card-front">
          <p class="title-of-film"><strong>${item.name}</strong></p>
          <img src="${item.img}"class="poster-card"><p><br></p>
         </div>
        <div class="flip-card-back">
          <p class="title-of-film"><strong>Nome:${item.name}</strong></p>
          <p class="info"><strong>Idade: ${item.age}</p></strong>
          <p><strong>Gênero: ${item.gender}</p></strong>
          <p><strong>Espécie: ${item.specie}</p></strong>
          </div>
          </div>
        </div> `
    }
    document.getElementById("poster-people").innerHTML = people;
};

showCharacters(characters)

function filterSpecies(){
    const valueSelected = selectSpecies.value
    const selectedSpecies= filterSpeciesSelected(characters,valueSelected);
    showCharacters(selectedSpecies);
}

const femaleCharacters = () => {

    
}

const maleCharacters = () =>{

}


const orderAZ = () => {

}




const ordenaAZ = document.querySelector('[data-az-order]')
const ordenaZA = document.querySelector('[data-za-order]');
const personagensFem = document.querySelector('[data-female-character]');
const personagensMasc = document.querySelector('[data-male-character]');
const selectSpecies = document.getElementById("specie");


ordenaAZ.addEventListener('cllick', orderAZ);
ordenaZA.addEventListener('click', orderZA);
personagensFem.addEventListener('click', femaleCharacters);
personagensMasc.addEventListener('click', maleCharacters);
selectSpecies.addEventListener('click', filterSpecies(specie));