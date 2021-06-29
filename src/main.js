import { filterData } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


function showCards(data) {
    document.getElementById('get-cards').innerHTML = data.map((item) => `
        <div class="info-cards">
        <div class="img-cards">
        <img src="${item.image}">
        </div>
            <ul class="list">
                <li>Nome:${item.name}</li>
                <li>Status:${item.status}</li>
                <li>Espécie:${item.species}</li>
                <li>Origem:${item.origin.name}</li>
            </ul>
        </div>
        
        `)
}
showCards(data.results);
