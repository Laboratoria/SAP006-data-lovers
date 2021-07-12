import { filterSpeciesSelected, filterGender, order, decrescentAlphabeticOrder, averageAge, filterElement} from './data.js';
import data from './data/ghibli/ghibli.js';

const animations = data.films
const characters = animations.reduce(function(chars, film){ 
     const people = film.people.map(function(char){
         char.title = film.title

         return char 
     }) ;

    // [...chars, ...film.people]
    return chars.concat(people)

}, [])


function showCharacters(a) {
    let people = "";
    for (let item of a) {

        people += `
        <div class="flip-card">
        <div class="flip-card-inner">
         <div class="flip-card-front">
          <p><strong>${item.name}</strong></p>
          <img src="${item.img}"class="poster-card" id="img-character"><p><br></p>
         </div>
        <div class="flip-card-back">
          <p class="title-of-chars"><strong> ${item.name}</strong></p>
          <p class="info2"><strong>Film: ${item.title}</p></strong>
          <p class="info2"><strong>Age: ${item.age}</p></strong>
          <p class="info2"><strong> Gender: ${item.gender}</p></strong>
          <p class="info2"><strong>Specie: ${item.specie}</p></strong>
          <p class="info2"><strong> Hair color: ${item.hair_color}</p></strong>
          <p class="info2"><strong> Eye color: ${item.eye_color}</p></strong>
          </div>
          </div>
        </div> `
    }
    document.getElementById("poster-people").innerHTML = people;
}

showCharacters(characters)

//seleciona por especies
const filterSpecies = (evento) => {
    evento.preventDefault();
    
    const valueSelected = selectSpecies.value;
    const selectedSpecies= filterSpeciesSelected(characters,valueSelected);
    showCharacters(selectedSpecies);
};


//seleciona personagens por genero
const selectGender = (evento) => {
    evento.preventDefault();

   const valueSelected = selectedGender.value;
   const gender = filterGender(characters, valueSelected);
   const totalGender = gender.length;

   const selectAges = averageAge(gender)

   printCuriosity(selectAges, valueSelected, totalGender);

   showCharacters(gender);

};


//ordena os personagens por ordem alfabética
const orderAZ = (evento) => {
    evento.preventDefault();

    const valueSelected = organizedAZ.value;
    const charactersAZ = order(characters, valueSelected);

    showCharacters(charactersAZ);
    
};

const orderZA = (evento) => {
    evento.preventDefault();

    const valueSelected = organizedZA.value;
    const charactersZA = decrescentAlphabeticOrder(characters, valueSelected);
    showCharacters(charactersZA);

};

// apresenta o calculo agregado
const printCuriosity = (a, value, total) => {
    
    const totalChars = characters.length
    const conteudo = `
        <div class="content-average" >
         <p><strong> Studio Ghibli has ${totalChars} characters and ${total} of them are ${value}.</p>
         <p><strong> The average age of ${value} characters is ${a} years old.</p></strong>
         </div>`

        
    
    document.getElementById("curiosities").innerHTML = conteudo;
    
};

const filterByName = () => {
    const valueSelected = searchName.value
    const charSelected = filterElement(characters, valueSelected);
    showCharacters(charSelected)
}

const organizedAZ = document.querySelector('[data-az-order]');
const organizedZA = document.querySelector('[data-za-order]');
const selectedGender = document.getElementById('select-gender');
const selectSpecies = document.getElementById('select-species');
const searchName = document.getElementById('txt-search')


organizedAZ.addEventListener('click', orderAZ);
organizedZA.addEventListener('click', orderZA);
selectedGender.addEventListener('change', selectGender);
selectSpecies.addEventListener('change', filterSpecies);
searchName.addEventListener('keypress', filterByName);


