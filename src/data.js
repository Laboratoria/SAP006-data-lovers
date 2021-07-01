// Função de filtro com base no genero, especie, status, ordem - utilizando filter()

//FUNÇÃO DE FILTRAGEM GÊNERO
export const  filtroGenero = (dataBase, condition) => {
  const resultadoGenero = dataBase.filter((personagem) => personagem.gender.toLowerCase() === condition.toLowerCase());
  return resultadoGenero;
};

//FUNÇÃO DE FILTRAGEM ESPÉCIE
export const  filtroEspecie = (dataBase, condition) => {
  const resultadoEspecie = dataBase.filter((personagem) => personagem.species.toLowerCase() === condition.toLowerCase());
  return resultadoEspecie;
};

//FUNÇÃO DE FILTRAGEM STATUS
export const  filtroStatus = (dataBase, condition) => {
  const resultadoStatus = dataBase.filter((personagem) => personagem.status.toLowerCase() === condition.toLowerCase());
  return resultadoStatus;
};


//ORDENAÇÃO ALFABÉTICA UTILIZANDO SORT
export const ordenarAlfabeticaAZ = (data) => {
  const resultadoAZ = data.sort((a, z) => a.name > z.name ? 0 : -1)
	return resultadoAZ;
};

//ORDENAÇÃO ALFABÉTICA UTILIZANDO SORT INVERSO
export const ordenarAlfabeticaZA = (data) => {
  const resultadoZA = data.sort((a, z) => a.name < z.name ? -1 : 1)
	return resultadoZA;
};

//CÁLCULO AGREGADO DE PORCENTAGEM
export const calculoDePorcentagem = (dataBase, data) => {
  const porcentagem = Math.round((data.length * 100) / dataBase.length);
  return porcentagem;
};





/*function sortBy (tipo) {
data.sort((a, b) => {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
      else {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      }
      return 0;
})
};*/





//(data.length / database.length) * 100 - calculo de % de um grupo de elementos
//hora de exibir na tela, colocar a %
//quantidade de personagem que vai filtrar / por quantidade total de personagens do filtro = % da quantidade *100




/*O coração deste projeto é a manipulação de dados através de arrays e objetos.

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
(cliques, seleções, filtros, ordenação, etc).*/
