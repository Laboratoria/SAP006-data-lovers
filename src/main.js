//import allFilters from './data.js';
import {sortData, filterData} from './data.js';
import data from './data/ghibli/ghibli.js';


const clean = () => {
    boxCards.innerHTML = "";
    modalArea.innerHTML = "";
}


const movies = data.films

function getPeople() {
     let people = [];
     for (let film of movies) {
         for (let char of film.people) {
             char['title'] = film['title']
             people.push(char)
         }
     }
     return people
}

//CARDS

const printCardsFilms = (listaFilmes) => {
    clean()
    // const background = document.getElementById("bannerImages")
    // background.style.display = "none"
    listaFilmes.forEach(film => {
        const filmCardsElements = document.getElementById("boxCards")
        filmCardsElements.innerHTML += `
        <div class="filmCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <img class="filmPoster" src= ${film.poster}>
                </div>
                <div class="backCard">
                    <h3 class="film-title"> ${film.title}
                    <div class="film-score"> ${film.rt_score}</div> 
                    </h3> 
                    <br>
                    <div class="film-infos">
                        <p> <b>Diretor:</b> ${film.director} </p>
                        <p> <b>Produtor:</b> ${film.producer} </p>
                        <p> <b>Ano de Lançamento:</b> ${film.release_date} </p>
                        <p><b> Sinopse</b>: ${film.description} </p>      
                    </div>          
                </div>
            </div>
        </div>`
    })
}

//printCardsFilms(data.films) 

const printCardsCharacters = (listaPersonagens) => {
    clean()
    // const background = document.getElementById("bannerImages")
    // background.style.display = "none"
    listaPersonagens.map(people => {
        const characterCardsElements = document.getElementById("boxCards")
        characterCardsElements.innerHTML += `
        <div class="characterCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <img class="characterPoster" src="${people.img}">
                </div>
                <div class="backCard">
                    <h3 class="film-title"> ${people.name}</h3> <br>
                    <div class="film-infos">
                        <p> <b>Gender:</b> ${people.gender} </p>
                        <p> <b>Age:</b> ${people.age} </p>
                        <p> <b>Specie:</b> ${people.specie} </p>
                        <p> <b>Film:</b> ${people.title}  </p>
                    </div>
                </div>
            </div>
        </div>`
    })
}

//printCardsCharacters(getPeople())

//BOTÔES MENU

btnFilms.addEventListener("click", () => {
    printCardsFilms(movies)
})

btnFilmsAZ.addEventListener("click", () => {
    clean()
    const filmsOrder = sortData(data.films, ["title"], "asc")
    printCardsFilms(filmsOrder)
})

btnFilmsZA.addEventListener("click", () => {
    clean()
    const filmsOrder = sortData(data.films, ["title"], "desc")
    printCardsFilms(filmsOrder)
})

btnCharacters.addEventListener("click", () => {
    clean()
    const menuCharacters = getPeople()
    printCardsCharacters(menuCharacters)
})

btnCharactersAZ.addEventListener("click", () => {
    clean()
    const CharacterOrder = sortData(getPeople(), ["name"], "asc")
    printCardsCharacters(CharacterOrder)
})

btnCharactersZA.addEventListener("click", () => {
    clean()
    const CharacterOrder = sortData(getPeople(), ["name"], "desc")
    printCardsCharacters(CharacterOrder)
})


btnModalSearch.addEventListener("click", () =>{
    const stringSearch = document.getElementById("modal-textarea").value.toLowerCase();
    //console.log(stringSearch)
    clean()
    const busca = filterData(movies, stringSearch)
    //console.log(busca)
    printCardsFilms(busca)
})


// MODAL BOX 

const modal = document.getElementById("modalArea");
const btnSearchMenu = document.getElementById("btnSearchMenu");
const closeModal = document.getElementsByClassName("closeModal")[0];

// When the user clicks on the button, open the modal
btnSearchMenu.onclick = function() {
   modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

btnModalSearch.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
}


// const stringSearch = document.getElementById("modal-textarea").value;

// const searchData = movies.filter(filtrar => (filtrar.director === "Hayao Miyazaki"));
// console.log(searchData)


// const searchData = movies.map(filme => {
//     for (let m in filme) {
//         //console.log(typeOf filme[m])
//         //console.log(Array.isArray(filme[m]))
//             if(filme[m] === stringSearch){
//                 return console.log(filme)
//             }
//     }
// })

// //searchData()

// const filtro = "eu"

    // const w = x.map(filme => {
    //   for (let m in filme) {
    //     console.log(typeof filme[m])
    //     console.log(Array.isArray(filme[m]))
    //     // if (filme[m] === filtro){
    //     //   return filme
    //     // }
    //   }
    // })



// const nome = "Pazu"
// for (let movie in movies)

// const x = movies.map( movie => movie.people)
// const w = [...x]
// console.log(w)


