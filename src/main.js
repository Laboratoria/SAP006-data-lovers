import {sortData, filterData, calculateAvgScore} from './data.js';
import data from './data/ghibli/ghibli.js';

const keyframesContainer = document.getElementById("keyframesContainer");
//const btnHome = document.getElementById("btnHome");
const btnFilms = document.getElementById("btnFilms");
const btnFilmsAZ = document.getElementById("btnFilmsAZ");
const btnFilmsZA = document.getElementById("btnFilmsZA");
const btnCharacters = document.getElementById("btnCharacters");
const btnCharactersAZ = document.getElementById("btnCharactersAZ");
const btnCharactersZA = document.getElementById("btnCharactersZA");
const btnAbout = document.getElementById("btnAbout");
const btnSearchMenu = document.getElementById("btnSearchMenu");
const btnModalSearch = document.getElementById("btnModalSearch");
const closeModal = document.getElementsByClassName("closeModal")[0];
const cardsContainer = document.getElementById("boxCards");
//const modalContent = document.getElementById("modalContent");
const modalArea = document.getElementById("modalArea");
const searchResultContainer = document.getElementById("searchResultContainer");

const clean = () => {
    cardsContainer.innerHTML = "";
    //modalContent.innerHTML = "";
    //modalArea.innerHTML = "";
    keyframesContainer.style.animation = "none";
    //searchResultContainer.innerHTML = "";
}

const cleanSearch = () => {
    searchResultContainer.innerHTML = "";
}

const getFilms = data.films

function getPeople() {
    let people = [];
    for (let film of getFilms
    ) {
        for (let char of film.people) {
            char['title'] = film['title']
            people.push(char)
        }
    }
    return people
}

const printCardsFilms = (listaFilmes) => {
    clean()
    //const cardsContent = "";
    listaFilmes.forEach(film => {
        cardsContainer.innerHTML += `
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
    //cardsContainer.innerHTML = cardsContent
}

const printCardsCharacters = (listaPersonagens) => {
    clean()
    //const cardsContent = "";
    listaPersonagens.map(people => {
        cardsContainer.innerHTML += `
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
    //cardsContainer.innerHTML = cardsContent
}

function printAvgScore(){
    const avgScore = calculateAvgScore(getFilms)
    cardsContainer.innerHTML += `
        <div class="filmCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <h3 class="card-about">Find out the average score given to Studio Ghibli movies</h3>
                </div>
                <div class="backCard">
                    <h3 class="avg-score"> ${avgScore}</h3> <br>
                </div>
            </div>
        </div>`

    //console.log(avgScore)
}

function printCardsAbout(){
    cardsContainer.innerHTML += `
    <div class="filmCard">
        <div class="flipper">
            <div class="frontCard"> 
                <h3 class="card-about">Find out the average score given to Studio Ghibli movies</h3>
            </div>
            <div class="backCard">
                <h3 class="avg-score"> Olá </h3> <br>
            </div>
        </div>
    </div>`
}

// btnHome.addEventListener("click", () => {
//     clean()
// })

btnFilms.addEventListener("click", () => {
    clean()
    cleanSearch()
    printCardsFilms(getFilms)
})

btnFilmsAZ.addEventListener("click", () => {
    clean()
    cleanSearch()
    const filmsOrder = sortData(data.films, ["title"], "asc")
    printCardsFilms(filmsOrder)
})

btnFilmsZA.addEventListener("click", () => {
    clean()
    cleanSearch()
    const filmsOrder = sortData(data.films, ["title"], "desc")
    printCardsFilms(filmsOrder)
})

btnCharacters.addEventListener("click", () => {
    clean()
    cleanSearch()
    const menuCharacters = getPeople()
    printCardsCharacters(menuCharacters)
})

btnCharactersAZ.addEventListener("click", () => {
    clean()
    cleanSearch()
    const CharacterOrder = sortData(getPeople(), ["name"], "asc")
    printCardsCharacters(CharacterOrder)
})

btnCharactersZA.addEventListener("click", () => {
    clean()
    cleanSearch()
    const CharacterOrder = sortData(getPeople(), ["name"], "desc")
    printCardsCharacters(CharacterOrder)
})

btnAbout.addEventListener("click", () => {
    clean()
    cleanSearch()
    printCardsAbout()
    printAvgScore()
})


btnModalSearch.addEventListener("click", () => {
    //clean()
    const stringSearch = document.getElementById("modal-textarea").value.toLowerCase();
    const SearchResult = filterData(getFilms, stringSearch)
    searchResultContainer.innerHTML = `<h3 class="searchResult"> Search results for '${stringSearch}': </h3>`
    printCardsFilms(SearchResult)
})


btnSearchMenu.onclick = function () {
    clean()
    modalArea.style.display = "block";
}

closeModal.onclick = function () {
    modalArea.style.display = "none";
}

btnModalSearch.onclick = function () {
    modalArea.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalArea) {
        modalArea.style.display = "none";
    }
}



/*function searchDirector() {
    const stringSearch = document.getElementById("modal-textarea").value;
    console.log(stringSearch)
    printCardsFilms(filterData(getFilms, stringSearch))
}*/

//console.log(avgScore)

/*btnFilmsAZ.addEventListener("click", () => {
    clean()
    const mediaRt = agruparScore(data.films, 'rt_score');
    console.log(mediaRt)
    printCardsFilms(mediaRt)
})

btnFilmsZA.addEventListener("click", () => {
    clean()
    const mediaRt = agruparScore(data.films, 'release_date');
    console.log(mediaRt)

})*/