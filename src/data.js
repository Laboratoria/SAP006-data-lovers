//ordenação AZ - ZA dos Filmes
export const order = (films) => {
    const result = films.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    })
    return result
};


export const decreasingOrder = (films) => (order(films).reverse());



// Filtrar por diretor
export const DirectorSelected = (films, valueSelected) => films.filter(item => item.director === valueSelected);



//Ordenação AZ-ZA dos Personagens
export const orderCharacters = (characters) => {
    const result = characters.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
    return result
};

export const decreasingOrderCharacters = (characters) => (orderCharacters(characters).reverse());


//Filtrar por gênero
export const filterByGender = (characters, valueSelected) => characters.filter(item => item.gender === valueSelected);








// export const getPeople = films => {
//     let people = []
//     for (let film of films) {
//       const chars = film.people.map (function (char){
//         char.movie = film.title
//        return char
//       })
//       people = people.concat(chars)   
//     }
//     return people
//   }







