// Função de filtro com base no genero, especie, status, ordem - utilizando filter()
export const  filtroGenero = (dataBase, condition) => {
  const resultadoGenero = dataBase.filter((personagem) => personagem.gender === condition);
  return resultadoGenero;
};

export const  filtroEspecie = (dataBase, condition) => {
  const resultadoEspecie = dataBase.filter((personagem) => personagem.species === condition);
  return resultadoEspecie;
};

export const  filtroStatus = (dataBase, condition) => {
  const resultadoStatus = dataBase.filter((personagem) => personagem.status === condition);
  return resultadoStatus;
};

/*export const statisticData = (dataBase, data) => {
  const percentage = Math.round((data.length * 100) / dataBase.length);
  return percentage;
};

const filtragem = {
  filtragemGenero:function (dataBase, condition){
    const resultadoGenero = dataBase.filter((inicial) => inicial.gender === condition);
  return resultadoGenero;
  },
  filtragemEspecie:function (dataBase, condition){
    const resultadoEspecie = dataBase.filter((inicial) => inicial.species === condition);
  return resultadoEspecie;
  },
  filtragemPorStatus:function (dataBase, condition) {
    const resultadoResult = dataBase.filter((item) => item.status === condition);
    return filterResult;
}

export default filtragem;*/













/*
O coração deste projeto é a manipulação de dados através de arrays e objetos.

Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):

- [ ]  `filterData(data, condition)`: esta função receberia os dados e nos retornaria os que cumprem com a condição.
- [ ]  `sortData(data, sortBy, sortOrder)`: esta função recebe três parâmetros.
    - O primeiro, `data`, nos entrega os dados.
    - O segundo, `sortBy`, diz respeito a qual das informações quer usar para ordenar.
    - O terceiro, `sortOrder`, indica se quer ordenar de maneira crescente ou decrescente.
- [ ]  `computeStats(data)`: essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.

Estes nomes de funções e parâmetros são somente referência, o que vocês decidirem utilizar vai depender da sua implementação.

Estas funções devem ser *[puras](https://imasters.com.br/desenvolvimento/serie-js-e-vida-pure-functions-funcoes-puras)* e independentes do DOM. 
Estas funções serão depois usadas a partir do arquivo `src/main.js`, ao carregar a página e a cada vez que o usuário interagir com a interface 
(cliques, seleções, filtros, ordenação, etc).

*/
