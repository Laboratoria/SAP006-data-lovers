import { showFilms } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(showFilms(data.films['people']))

//função para criar cards dos filmes
//const listaFilmes = showFilms(data.ghibli)


const printCardsCharacters = (characterList) => {
    characterList.forEach(character => {
        const characterCardsElements = document.getElementById("boxCharacaterCards");
        characterCardsElements.innerHTML += `
        <div class="filmCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <img class="peopleImg" src= ${character.img}>
                </div>
                <div class="backCard">
                    <h2 class="peopleName"> ${character.name}</h2> 
                </div>
            </div>
        </div>`
    })
}

printCardsCharacters(data.people)