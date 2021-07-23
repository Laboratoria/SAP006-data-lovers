
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

export const filterByDirector = (films,director) =>{
    console.log(films)
    console.log(director)
}















