//FUNÇÃO DE FILTRAGEM GÊNERO - filter()
export const  filtroGenero = (dataBase, condition) => {
  const resultadoGenero = dataBase.filter((personagem) => personagem.gender.toLowerCase() === condition.toLowerCase());
  return resultadoGenero;
};

//FUNÇÃO DE FILTRAGEM ESPÉCIE - filter()
export const  filtroEspecie = (dataBase, condition) => {
  const resultadoEspecie = dataBase.filter((personagem) => personagem.species.toLowerCase() === condition.toLowerCase());
  return resultadoEspecie;
};

//FUNÇÃO DE FILTRAGEM STATUS - filter()
export const  filtroStatus = (dataBase, condition) => {
  const resultadoStatus = dataBase.filter((personagem) => personagem.status.toLowerCase() === condition.toLowerCase());
  return resultadoStatus;
};

// Ordenação alfabética utilizando sort
export const ordemAlfabetica = (data, order) => {
  if (order === "AZ") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1)
  } else if (order === "ZA") {
    return data.sort((a, z) => a.name > z.name ? -1 : 1)
  } return data
};

// Função de busca por nome - filter()
export const  buscarNome = (data, condition) => {
  const resultadoLocalizacao = data.filter((personagem) => personagem.name.toLowerCase().includes(condition.toLowerCase()))
  return resultadoLocalizacao;
};

//Calculo de porcentagem por categoria 
export const calcularPorcentagem = (total, portion) => {
  const porcentagem = Math.round((portion * 100) / total);
  return porcentagem;
}; 





//--------------------------------------------------------------------------------------------------------------------------------
/*O coração deste projeto é a manipulação de dados através de arrays e objetos.
Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):
- [ ]  `filterData(data, condition)`: esta função receberia os dados e nos retornaria os que cumprem com a condição.
- [ ]  `sortData(data, sortBy, sortOrder)`: esta função recebe três parâmetros.
    - O primeiro, `data`, nos entrega os dados.
    - O segundo, `sortBy`, diz respeito a qual das informações quer usar para ordenar.
    - O terceiro, `sortOrder`, indica se quer ordenar de maneira crescente ou decrescente.
- [ ]  `computeStats(data)`: essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.
Estes nomes de funções e parâmetros são somente referência, o que vocês decidirem utilizar vai depender da sua implementação.

Estas funções devem ser*[puras](https://imasters.com.br/desenvolvimento/serie-js-e-vida-pure-functions-funcoes-puras)*e independentes do DOM. 
Estas funções serão depois usadas a partir do arquivo`src/main.js`, ao carregar a página e a cada vez que o usuário interagir com a interface 
(cliques, seleções, filtros, ordenação, etc).*/
