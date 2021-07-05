// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/



export const ordemAlfabetica = (data, order) => {
  if (order === "crescente") {
    return data.sort((a, z) => a.title > z.title ? 1 : -1)
  } else if (order === "decrescente") {
    return data.sort((a, z) => a.title > z.title ? -1 : 1)
  } return data
};



