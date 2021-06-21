import { filterData } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);


//const filtro = document.getElementById("filtro")

//const options = filtro.options[filtro.selectedIndex].value 


const filtro2 = document.getElementById("filtro2")

const options2 = filtro2.options[filtro2.selectedIndex].value



filterData(data, options2);
