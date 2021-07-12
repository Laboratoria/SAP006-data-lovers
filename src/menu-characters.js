import { showFilms } from './data.js';
import data from './data/ghibli/ghibli.js';

// console.log(data.films[0].people[0].name)
// console.log(data.films[1].people[1].name)

const movies = data.films


function getPeople() {
    let people = [];
    for (let film of movies){
        for (let char of film.people)
        people.push(char)
    }
    return people
}


const printCardsFilms = (listaPersonagens) => {
    listaPersonagens.map(people => {
        const characterCardsElements = document.getElementById("boxCharacaterCards");
        characterCardsElements.innerHTML += `
        <div class="characterCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <img class="characterPoster" src= ${people.img}>
                </div>
                <div class="backCard">
                    <h3 class="character-name"> ${people.name}</h3> <br>
                    <p> <b>Gender:</b> ${people.gender} </p>
                    <p> <b>Age:</b> ${people.age} </p>
                    <p> <b>Specie:</b> ${people.specie} </p>
                </div>
            </div>
        </div>`
    })
}

printCardsFilms(getPeople())



/* const people = data.films[0].people
console.log(people)

people.map(showPersonagens)

function showPersonagens(item){
    console.log(item['name'], item['img'])
}   



// console.log(showFilms(data.films['people']))

// //função para criar cards dos filmes
// //const listaFilmes = showFilms(data.ghibli)


// const printCardsCharacters = (characterList) => {
//     characterList.forEach(character => {
//         const characterCardsElements = document.getElementById("boxCharacaterCards");
//         characterCardsElements.innerHTML += `
//         <div class="filmCard">
//             <div class="flipper">
//                 <div class="frontCard"> 
//                     <img class="peopleImg" src= ${character.img}>
//                 </div>
//                 <div class="backCard">
//                     <h2 class="peopleName"> ${character.name}</h2> 
//                 </div>
//             </div>
//         </div>`
//     })
// }

// printCardsCharacters(data.people)*/