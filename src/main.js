import {filterData} from './data.js'
import {sortData} from './data.js';
import {computeStats} from './data.js';

import data from './data/ghibli/ghibli.js'

const films = data.films



console.log(sortData(films, "Release", "Descending"))