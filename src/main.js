import { sortData, filterData } from './data.js';
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

const printCardsFilms = (listaFilmes) => {
    clean()
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

const printCardsCharacters = (listaPersonagens) => {
    clean()
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

btnFilms.addEventListener("click", () => {
    printCardsFilms(movies)
})

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


btnModalSearch.addEventListener("click", () => {
    const stringSearch = document.getElementById("modal-textarea").value.toLowerCase();
    clean()
    const busca = filterData(movies, stringSearch)
    printCardsFilms(busca)
})

const modal = document.getElementById("modalArea");
const btnSearchMenu = document.getElementById("btnSearchMenu");
const closeModal = document.getElementsByClassName("closeModal")[0];

btnSearchMenu.onclick = function () {
    modal.style.display = "block";
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

btnModalSearch.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function calculateAvgScore(arr) {

    const scores = arr.reduce(function (total, film) {
        const filmScore = Number(film.rt_score)
        return total + filmScore
    }, 0);
    const average = scores / arr.length
    return average.toFixed(2)
}

const avgScore = calculateAvgScore(data.films)
console.log(avgScore)