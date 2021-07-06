import { filterSpeciesSelected, filterGender, order, filterAge} from './data.js';
import data from './data/ghibli/ghibli.js';

//const animations = data.films
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
          <img src="${item.img}"class="poster-card" id="img-character"><p><br></p>
         </div>
        <div class="flip-card-back">
          <p class="title-of-film"><strong>Nome: ${item.name}</strong></p>
          <p class="info"><strong>Idade: ${item.age}</p></strong>
          <p><strong>Gênero: ${item.gender}</p></strong>
          <p><strong>Espécie: ${item.specie}</p></strong>
          <p><strong> Hair color: ${item.hair_color}</p></strong>
          <p><strong> Eye color: ${item.eye_color}</p></strong>
          </div>
          </div>
        </div> `
    }
    document.getElementById("poster-people").innerHTML = people;
};

//showCharacters(characters)

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

   const teste = data.films[8].age;
   console.log(teste)
   
   showCharacters(gender);
};


//ordena os personagens por ordem alfabética
const orderAZ = (evento) => {
    evento.preventDefault();

    const valueSelected = organizedAZ.value;
    const charactersAZ = order(characters, valueSelected);
    
    showCharacters(charactersAZ)
    
};

const orderZA = (evento) => {
    evento.preventDefault();

    const valueSelected = organizedZA.value;
    const charactersZA = order(characters, valueSelected).reverse();
    showCharacters(charactersZA);

};

const averageAge = (valueGender) =>{
    //characters.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]));

    //const totalAge = characters.reduce((acc, item))
}

const printCuriosity = () => {
    
    const conteudo = `<p class="content"> Did you know?  <br/><br/>${averageAge()} </p>`;
    

};



const organizedAZ = document.querySelector('[data-az-order]')
const organizedZA = document.querySelector('[data-za-order]');
const selectedGender = document.getElementById('select-gender');
const selectSpecies = document.getElementById('select-species');


organizedAZ.addEventListener('click', orderAZ);
organizedZA.addEventListener('click', orderZA);
selectedGender.addEventListener('click', selectGender);
selectSpecies.addEventListener('click', filterSpecies);