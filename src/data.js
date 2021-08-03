/export const order = (films) => {
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




export const DirectorSelected = (films, valueSelected) => films.filter(item => item.director === valueSelected);




export const orderCharacters = (people) => {
    const result = people.sort(function (a, b) {
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

export const decreasingOrderCharacters = (people) => (orderCharacters(people).reverse());








export const filterBy = (arr, key, value) =>
    arr.filter((item) => item[key] === value);



export const computeGender = (gender, people) => {
    return Math.round((gender.length / people.length) * 100);
}



export const filterBy = (arr, key, value) =>
    arr.filter((item) => item[key] === value);

 main

export const computeGender = (gender, people) => {
    return Math.round((gender.length / people.length) * 100);
}















