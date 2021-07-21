export const sortData = (data, sortBy, sortOrder) => {
  const compare = (a, b) => {
    if(typeof a[sortBy] !== "number") {
       if(a[sortBy] < b[sortBy]) { 
       return -1
      } else {
        return 0;
    }
    } else {
      return a[sortBy] - b[sortBy];
    }
  }
     if(sortOrder === "asc"){
     data.sort(compare);
     return data;
  
   } else {
     data.sort(compare);
     data.reverse();
     return data;
    } 
  
};


export const filterData = (data, getDirector) => {
   let filterDirector = data.filter(name => name.director.toLowerCase().includes(getDirector.toLowerCase()))
   return filterDirector
};