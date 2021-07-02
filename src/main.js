// import { example } from './data.js';
import data from './data/lol/lol.js';

// TODOS ELEMENTOS HTML
const elements = data.data;
const objects = Object.values(elements);

const index = document.getElementById("index");

const header = document.createElement("header");
index.appendChild(header);
const nav = document.createElement("nav");
header.appendChild(nav);
const ul = document.createElement("ul");
nav.appendChild(ul);

const li = document.createElement("li");
ul.appendChild(li);
const a = document.createElement("a");
a.setAttribute("href", "index.html")
li.appendChild(a);
const imgLogo = document.createElement("img");
imgLogo.setAttribute("src", "img/logo.png");
imgLogo.setAttribute("id", "img-logo");
a.appendChild(imgLogo);

const menu = document.createElement("section");
menu.setAttribute("id", "menu");
index.appendChild(menu);

const filters = document.createElement("section");
filters.setAttribute("id", "filters");
index.appendChild(filters);

const divFilters = document.createElement("div");
divFilters.setAttribute("id", "div-filters");
filters.appendChild(divFilters);

const imgSearch = document.createElement("img");
imgSearch.setAttribute("src", "img/search.png");
imgSearch.setAttribute("id", "img-search");
divFilters.appendChild(imgSearch)
const inputSearch = document.createElement("input");
inputSearch.setAttribute("id", "input-search");
inputSearch.setAttribute("placeholder", "Digite o nome do campeão...");
divFilters.appendChild(inputSearch);

const divCategories = document.createElement("div");
divCategories.setAttribute("id", "categories");
divFilters.appendChild(divCategories);
const imgController = document.createElement("img");
imgController.setAttribute("class", "icons");
imgController.setAttribute("src", "img/controller.png");
divCategories.appendChild(imgController);
const imgSlayer = document.createElement("img");
imgSlayer.setAttribute("class", "icons");
imgSlayer.setAttribute("src", "img/slayer.png");
divCategories.appendChild(imgSlayer);
const imgTank = document.createElement("img");
imgTank.setAttribute("class", "icons");
imgTank.setAttribute("src", "img/tank.png");
divCategories.appendChild(imgTank);
const imgMarksman = document.createElement("img");
imgMarksman.setAttribute("class", "icons");
imgMarksman.setAttribute("src", "img/marksman.png");
divCategories.appendChild(imgMarksman);
const imgMage = document.createElement("img");
imgMage.setAttribute("class", "icons");
imgMage.setAttribute("src", "img/mage.png");
divCategories.appendChild(imgMage);
const imgFighter = document.createElement("img");
imgFighter.setAttribute("class", "icons");
imgFighter.setAttribute("src", "img/fighter.png");
divCategories.appendChild(imgFighter);

const selectDifficulty = document.createElement("select");
selectDifficulty.setAttribute("id", "difficulties");
divFilters.appendChild(selectDifficulty);
const difficultyValue = document.createElement("option");
difficultyValue.setAttribute("value", "all");
difficultyValue.innerHTML = "Todas as dificuldades"
selectDifficulty.appendChild(difficultyValue);
const difficultyValue1 = document.createElement("option");
difficultyValue1.setAttribute("value", "easy");
difficultyValue1.innerHTML = "Fácil"
selectDifficulty.appendChild(difficultyValue1);
const difficultyValue2 = document.createElement("option");
difficultyValue2.setAttribute("value", "medium");
difficultyValue2.innerHTML = "Médio"
selectDifficulty.appendChild(difficultyValue2);
const difficultyValue3 = document.createElement("option");
difficultyValue3.setAttribute("value", "hard");
difficultyValue3.innerHTML = "Díficil"
selectDifficulty.appendChild(difficultyValue3);

const orderSelector = document.createElement("select");
orderSelector.setAttribute("id", "orders");
divFilters.appendChild(orderSelector);
const ordenarAtoZ = document.createElement("option");
ordenarAtoZ.setAttribute("value", "A-Z");
ordenarAtoZ.setAttribute("id", "A-Z");
ordenarAtoZ.innerHTML = "A-Z"
orderSelector.appendChild(ordenarAtoZ);
const ordenarZtoA = document.createElement("option");
ordenarZtoA.setAttribute("value", "Z-A");
ordenarZtoA.setAttribute("id", "Z-A");
ordenarZtoA.innerHTML = "Z-A"
orderSelector.appendChild(ordenarZtoA);

const sectionPagination = document.createElement("section");
sectionPagination.setAttribute("id", "paginated");
index.appendChild(sectionPagination);

const divPagination = document.createElement("div");
divPagination.setAttribute("id", "pagination");
divPagination.classList.add("pagination");
sectionPagination.appendChild(divPagination);

const footer = document.querySelector("footer");
const pFooter = document.createElement("p");
pFooter.setAttribute("id", "p-footer");
pFooter.innerHTML = `copyright@2021 | feito por <a href="https://github.com/LarissaSiq" 
target="blank">Larissa Siqueira</a> e <a href="https://github.com/larissavilelasobral" 
target="new">Larissa Vilela</a></p>`
footer.appendChild(pFooter);

// PAGINAÇÃO
function pagination(page, total, limit) {
    let pageSize = Math.ceil(total / limit);

    let _pagination = {
        page: page,
        total: total,
        limit: limit,
        pages: pageSize
    };

    if (page > 1) {
        let prev = page - 1;
        _pagination.previous = prev;
    }

    let remaining = total - (page * limit);

    if (remaining > 0) {
        _pagination.next = page + 1;
    }

    return _pagination;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, objects, value) {
            vars[objects] = value;
        });
    return vars;
}
let pageQuery = getUrlVars()["pagina"];
let page = parseInt(pageQuery) || 1;
let limit = 12;
let offset = (page - 1) * limit;
let total = objects.length;
let items = objects.slice(offset, offset + limit);
let paginationResult = pagination(page, total, limit)

// FUNÇÃO QUE MOSTRA PERSONAGENS NA TELA
function showCharacters(items) {
    const divContainer = document.getElementById("root");
    divContainer.setAttribute("class", "container");
    divContainer.innerHTML = ``;


    for (let i = 0; i < items.length; i++) {
        let divCards = document.createElement("div");
        divCards.setAttribute("class", "cards")
        divContainer.appendChild(divCards);

        let divFrontCard = document.createElement("div");
        divFrontCard.setAttribute("class", "front-card");
        divCards.appendChild(divFrontCard);

        let divBackCard = document.createElement("div");
        divBackCard.setAttribute("class", "back-card");
        divCards.appendChild(divBackCard);

        let imageCharacters = document.createElement("img");
        imageCharacters.setAttribute("class", "imageCharacters");

        const name = items[i].name;
        const title = items[i].title;
        const splash = items[i].splash;
        const blurb = items[i].blurb;

        divFrontCard.innerHTML = `<h1>${name}</h1><h2>${title}</h2><img class="image-characters"src="${splash}"><p>${blurb}</p>`;

        const img = items[i].img;
        const partype = items[i].partype;
        const tags = items[i].tags;
        const attack = items[i].info.attack;
        const defense = items[i].info.defense;
        const magic = items[i].info.magic;
        const difficulty = items[i].info.difficulty;

        divBackCard.innerHTML = `<h3>${name}</h3><img class="profile-characters" src="${img}"><h4>${tags}</h4><h4>${partype}</h4>
        <p id="attack">Attack: ${attack}</p><p id="defense">Defense: ${defense}</p><p id="magic">Magic: ${magic}</p>
        <p id="difficulty">Difficulty: ${difficulty}</p>"`
    }
}
showCharacters(items);

// FUNÇÃO DE BUSCAR PERSONAGEM POR NOME
    document.getElementById("input-search").addEventListener("input", function () {
        const textName = document.getElementById("input-search").value.toLowerCase();
        const champions = items.filter(items => items.name.toLowerCase().includes(textName));
        showCharacters(champions)
})
// CRIAÇÃO DAS PAGINAS DA PAGINAÇÃO
if(pageQuery > paginationResult.pages){
    const divContainer = document.getElementById("root");
    divContainer.setAttribute("class", "container");
    divContainer.innerHTML = `Nenhum item encontrado`;
    divContainer.style.color = "#6e787e";
    divContainer.style.fontSize = "50px"
    divContainer.style.fontFamily = "Nova Cut"
    divContainer.style.padding = "40px"

    document.getElementById("pagination").style.display = "none"
}
let paginationItems = "";
for (let i = 0; i <= paginationResult.pages; i++) {
    let paginaAtiva = i+1
    paginationItems += `<a class="pagination-link`+paginaAtiva+`" id="pagination-link" href="?pagina=`+paginaAtiva+`">`+paginaAtiva+`</a>`
}
document.getElementById("pagination").innerHTML = paginationItems
