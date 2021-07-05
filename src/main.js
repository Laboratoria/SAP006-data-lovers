import ordersAbc from './data.js';
import data from './data/lol/lol.js';

// TODOS ELEMENTOS HTML
const elements = data.data;
let objects = Object.values(elements);

const index = document.getElementById("index");
const header = document.querySelector("header")

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
const divMenu = document.createElement("div");
divMenu.setAttribute("id", "div-menu");
menu.appendChild(divMenu)
const divGo = document.createElement("div");
divGo.setAttribute("id", "div-go");
divMenu.appendChild(divGo)
const pMenu = document.createElement("p");
pMenu.setAttribute("id", "p-menu");
pMenu.innerHTML = `BUSQUE<br> POR UM CAMPEÃO`
divGo.appendChild(pMenu)
const buttonMenu = document.createElement("button");
buttonMenu.setAttribute("id", "button-menu");
buttonMenu.innerHTML = `<a href="#root" id="a-menu">CAMPEÕES</a>`
divGo.appendChild(buttonMenu);
const divImgMenu = document.createElement("div");
divImgMenu.setAttribute("id", "div-img-menu");
divGo.appendChild(divImgMenu)
const imgMenu = document.createElement("img");
imgMenu.setAttribute("id", "menu-img-character")
imgMenu.setAttribute("src", "img/character.png")
divImgMenu.appendChild(imgMenu)

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
imgController.setAttribute("id", "controller");
imgController.setAttribute("src", "img/controller.png");
divCategories.appendChild(imgController);
const imgSlayer = document.createElement("img");
imgSlayer.setAttribute("class", "icons");
imgSlayer.setAttribute("id", "slayer");
imgSlayer.setAttribute("src", "img/slayer.png");
divCategories.appendChild(imgSlayer);
const imgTank = document.createElement("img");
imgTank.setAttribute("class", "icons");
imgTank.setAttribute("id", "tank");
imgTank.setAttribute("src", "img/tank.png");
divCategories.appendChild(imgTank);
const imgMarksman = document.createElement("img");
imgMarksman.setAttribute("class", "icons");
imgMarksman.setAttribute("id", "marksman");
imgMarksman.setAttribute("src", "img/marksman.png");
divCategories.appendChild(imgMarksman);
const imgMage = document.createElement("img");
imgMage.setAttribute("class", "icons");
imgMage.setAttribute("id", "mage");
imgMage.setAttribute("src", "img/mage.png");
divCategories.appendChild(imgMage);
const imgFighter = document.createElement("img");
imgFighter.setAttribute("class", "icons");
imgFighter.setAttribute("id", "fighter");
imgFighter.setAttribute("src", "img/fighter.png");
divCategories.appendChild(imgFighter);

const divDifficulty = document.createElement("div");
divDifficulty.setAttribute("id", "div-difficulty");
divFilters.appendChild(divDifficulty)
const selectDifficulty = document.createElement("button");
selectDifficulty.setAttribute("id", "difficulties");
selectDifficulty.innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`
divDifficulty.appendChild(selectDifficulty);
const difficultyAll = document.createElement("button");
difficultyAll.setAttribute("id", "all");
difficultyAll.style.display = "none"
difficultyAll.setAttribute("class", "difficulties");
difficultyAll.innerHTML = "Todas as Dificuldades"
divDifficulty.appendChild(difficultyAll);
const difficultyEasy = document.createElement("button");
difficultyEasy.setAttribute("id", "easy");
difficultyEasy.style.display = "none"
difficultyEasy.setAttribute("class", "difficulties");
difficultyEasy.innerHTML = `<img id="easy-img" src="img/easy.png"/>`
divDifficulty.appendChild(difficultyEasy);
const difficultyMedium = document.createElement("button");
difficultyMedium.setAttribute("id", "medium");
difficultyMedium.style.display = "none"
difficultyMedium.setAttribute("class", "difficulties");
difficultyMedium.innerHTML = `<img id="medium-img" src="img/medium.png"/>`
divDifficulty.appendChild(difficultyMedium);
const difficultyHard = document.createElement("button");
difficultyHard.setAttribute("id", "hard");
difficultyHard.style.display = "none"
difficultyHard.setAttribute("class", "difficulties");
difficultyHard.innerHTML = `<img id="hard-img" src="img/hard.png"/>`
divDifficulty.appendChild(difficultyHard);

document.getElementById("difficulties").addEventListener("click", function(){
    if(document.getElementById("all").style.display == "none"){
            document.getElementById("all").style.display = "flex";
            document.getElementById("img-select").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/up.png"/>`
 
    }else{
            document.getElementById("all").style.display = "none"
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`
    }
 })
 document.getElementById("difficulties").addEventListener("click", function(){
    if(document.getElementById("easy").style.display == "none"){
            document.getElementById("easy").style.display = "flex";
            document.getElementById("img-select").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/up.png"/>`
 
    }else{
            document.getElementById("easy").style.display = "none"
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`
    }
 })
 document.getElementById("difficulties").addEventListener("click", function(){
    if(document.getElementById("medium").style.display == "none"){
            document.getElementById("medium").style.display = "flex";
            document.getElementById("img-select").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/up.png"/>`
 
    }else{
            document.getElementById("medium").style.display = "none"
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`
    }
 })
 document.getElementById("difficulties").addEventListener("click", function(){
    if(document.getElementById("hard").style.display == "none"){
            document.getElementById("hard").style.display = "flex";
            document.getElementById("img-select").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-up" src="img/up.png"/>`
 
    }else{
            document.getElementById("hard").style.display = "none"
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`
    }
 })


const orderSelector = document.createElement("div");
orderSelector.setAttribute("id", "order-selector");
divFilters.appendChild(orderSelector);
const ordenar = document.createElement("button");
ordenar.setAttribute("id", "ordenar");
ordenar.setAttribute("class", "order");
ordenar.innerHTML = `A-Z <img id="img-select1" src="img/select.png"/>`
orderSelector.appendChild(ordenar);
const ordenarAtoZ = document.createElement("button");
ordenarAtoZ.setAttribute("id", "A-Z");
ordenarAtoZ.setAttribute("class", "orders");
ordenarAtoZ.innerHTML = `A-Z`
ordenarAtoZ.style.display = "none"
orderSelector.appendChild(ordenarAtoZ);
const ordenarZtoA = document.createElement("button");
ordenarZtoA.setAttribute("id", "Z-A");
ordenarZtoA.setAttribute("class", "orders");
ordenarZtoA.style.display = "none"
ordenarZtoA.innerHTML = `Z-A`
orderSelector.appendChild(ordenarZtoA);
document.getElementById("ordenar").addEventListener("click", function(){
    ordenarZtoA.innerHTML = `Z-A`
    if(document.getElementById("A-Z").style.display == "none"){
        document.getElementById("ordenar").style.display = "none"
        document.getElementById("A-Z").style.display = "flex"
        document.getElementById("A-Z").style.justifyContent = "center"
    } else{
        document.getElementById("A-Z").style.display = "none"
    }
    if(document.getElementById("Z-A").style.display == "none"){
        document.getElementById("Z-A").style.display = "flex"
    } else{
        document.getElementById("Z-A").style.display = "none"
    }
})

const divImgResponsive = document.createElement("div");
divImgResponsive.setAttribute("id", "div-img-responsive");
index.appendChild(divImgResponsive);
const imgController1 = document.createElement("img");
imgController1.setAttribute("class", "icons-responsivo");
imgController1.setAttribute("id", "controller1");
imgController1.setAttribute("src", "img/controller.png");
divImgResponsive.appendChild(imgController1);
const imgSlayer1 = document.createElement("img");
imgSlayer1.setAttribute("class", "icons-responsivo");
imgSlayer1.setAttribute("id", "slayer1");
imgSlayer1.setAttribute("src", "img/slayer.png");
divImgResponsive.appendChild(imgSlayer1);
const imgTank1 = document.createElement("img");
imgTank1.setAttribute("class", "icons-responsivo");
imgTank1.setAttribute("id", "tank1");
imgTank1.setAttribute("src", "img/tank.png");
divImgResponsive.appendChild(imgTank1);
const imgMarksman1 = document.createElement("img");
imgMarksman1.setAttribute("class", "icons-responsivo");
imgMarksman1.setAttribute("id", "marksman1");
imgMarksman1.setAttribute("src", "img/marksman.png");
divImgResponsive.appendChild(imgMarksman1);
const imgMage1 = document.createElement("img");
imgMage1.setAttribute("class", "icons-responsivo");
imgMage1.setAttribute("id", "mage1");
imgMage1.setAttribute("src", "img/mage.png");
divImgResponsive.appendChild(imgMage1);
const imgFighter1 = document.createElement("img");
imgFighter1.setAttribute("class", "icons-responsivo");
imgFighter1.setAttribute("id", "fighter1");
imgFighter1.setAttribute("src", "img/fighter.png");
divImgResponsive.appendChild(imgFighter1)

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
let limit = 16;
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
        <p id="difficulty">Difficulty: ${difficulty}</p>`
    }
}
showCharacters(items);

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
document.getElementById("pagination").innerHTML = paginationItems;

// FUNÇÃO DE BUSCAR PERSONAGEM POR NOME
document.getElementById("input-search").addEventListener("input", function () {
    const textName = document.getElementById("input-search").value.toLowerCase();
    const champions = objects.filter(item => item.name.toLowerCase().includes(textName));
    const championsCards = champions.slice(offset, offset + limit);
    showCharacters(championsCards)
})

// FUNÇÃO PRA ORDENAR ALFABETICAMENTE
document.getElementById("A-Z").addEventListener("click", function(){
    document.getElementById("ordenar").style.display = "flex"
    document.getElementById("ordenar").innerHTML = `A-Z <img id="img-select1" src="img/select.png"/>`
    document.getElementById("ordenar").style.padding = "2px 0px 0px 6px"
    document.getElementById("img-select1").style.padding = "3px 7px"
    document.getElementById("A-Z").style.display = "none"
    document.getElementById("Z-A").style.display = "none"

    let championsAZ = ordersAbc.orderAZ(objects); 
    let orderChampionsAZ = championsAZ.slice(offset, offset + limit)

    showCharacters(orderChampionsAZ)
})
document.getElementById("Z-A").addEventListener("click", function(){
    document.getElementById("ordenar").style.display = "flex"
    document.getElementById("ordenar").innerHTML = `Z-A <img id="img-select1" src="img/select.png"/>`
    document.getElementById("ordenar").style.padding = "2px 0px 0px 6px"
    document.getElementById("img-select1").style.padding = "3px 7px"
    document.getElementById("A-Z").style.display = "none"
    document.getElementById("Z-A").style.display = "none"

    let championsZA = ordersAbc.orderZA(objects); 
    let orderChampionsZA = championsZA.slice(offset, offset + limit);
    showCharacters(orderChampionsZA)
})

// FUNÇÃO PRA MUDAR DIFICULDADES
document.getElementById("all").addEventListener("click", function (){
    document.getElementById("difficulties").innerHTML = `Todas as Dificuldades <img id="img-select" src="img/select.png"/>`
    document.getElementById("all").style.display = "none";
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("difficulties").style.fontSize = "15px"
    document.getElementById("difficulties").style.padding = "0px"
    document.getElementById("img-select").style.padding = "0px"
    showCharacters(items);
})

document.getElementById("easy").addEventListener("click", function(){
    document.getElementById("difficulties").innerHTML = `<img id="easy-img" src="img/easy.png"/><img id="img-select" src="img/select.png"/>`
    document.getElementById("all").style.display = "none";
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("easy-img").style.width = "60%";
    document.getElementById("easy-img").style.float = "left"
    document.getElementById("easy-img").style.padding = "0px 0px 0px 20px"
    document.getElementById("img-select").style.padding = "5px 0px"

    const showEasyCharacterCards = ordersAbc.filterDifficultyMenor(objects, 3)
    const showEasyCharacters = showEasyCharacterCards.slice(offset, offset + limit);
    showCharacters(showEasyCharacters) 
})
document.getElementById("medium").addEventListener("click", function(){
    document.getElementById("difficulties").innerHTML = `<img id="medium-img" src="img/medium.png"/><img id="img-select" src="img/select.png"/>`
    document.getElementById("all").style.display = "none";
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("medium-img").style.width = "60%";
    document.getElementById("medium-img").style.float = "left"
    document.getElementById("medium-img").style.padding = "0px 0px 0px 20px"
    document.getElementById("img-select").style.padding = "5px 0px"

    const showMediumCharacterCards = ordersAbc.filterDifficultyMenor(objects, 7)
    const showMediumCharacters = showMediumCharacterCards.slice(offset, offset + limit);
    showCharacters(showMediumCharacters)
})
document.getElementById("hard").addEventListener("click", function(){
    document.getElementById("difficulties").innerHTML = `<img id="hard-img" src="img/hard.png"/><img id="img-select" src="img/select.png"/>`
    document.getElementById("all").style.display = "none";
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("hard-img").style.width = "60%";
    document.getElementById("hard-img").style.float = "left"
    document.getElementById("hard-img").style.padding = "0px 0px 0px 20px"
    document.getElementById("img-select").style.padding = "5px 0px"

    const showHardCharacterCards = ordersAbc.filterDifficultyMaior(objects, 8);
    const showHardCharacters = showHardCharacterCards.slice(offset, offset + limit);
    showCharacters(showHardCharacters)
})