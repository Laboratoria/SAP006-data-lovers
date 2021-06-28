// Função de filtro cpm base no genero, utilizando reduce/arrow function
export const  filtroGenero = (dataBase, condition) => {
  const resultado = dataBase.filter((inicial) => inicial.gender === condition);
  return resultado;
};


export const calcularPorcentagem = (data, dataBase, condition) => data.reduce((inicial, total) => {
  return inicial + (total[dataBase] === condition);
},0)








