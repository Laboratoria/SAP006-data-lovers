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
          <p class="title-of-film"><strong> Name: ${item.name}</strong></p>
          <p class="info"><strong> Age: ${item.age}</p></strong>
          <p><strong> Gender: ${item.gender}</p></strong>
          <p><strong>Specie: ${item.specie}</p></strong>
          <p><strong> Hair color: ${item.hair_color}</p></strong>
          <p><strong> Eye color: ${item.eye_color}</p></strong>
          </div>
          </div>
        </div> `
    }
    document.getElementById("poster-people").innerHTML = people;
};

//showCharacters(characters)

const filterSpecies = (evento) => {
    evento.preventDefault();

    const valueSelected = selectSpecies.value
    const selectedSpecies= filterSpeciesSelected(characters,valueSelected);
    showCharacters(selectedSpecies);
}

//seleciona personagens por genero
const selectGender = (evento) => {
     evento.preventDefault();

    const valueSelected = selectedGender.value
    const gender = filterGender(characters, valueSelected);
    showCharacters(gender);
}

//ordena personagens por ordem alfabética
const orderAZ = () => {

}




const ordenaAZ = document.querySelector('[data-az-order]')
const ordenaZA = document.querySelector('[data-za-order]');
const selectedGender = document.getElementById('select-gender');
const selectSpecies = document.getElementById('select-species');


ordenaAZ.addEventListener('cllick', orderAZ);
ordenaZA.addEventListener('click', orderZA);
selectedGender.addEventListener('click', selectGender);
selectSpecies.addEventListener('click', filterSpecies);