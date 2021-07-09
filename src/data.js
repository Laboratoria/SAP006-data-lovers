//////////////////FUNÇÃO DE FILTRAGEM GÊNERO - filter()
export const  filtroGenero = (data, condition) => {
  const resultadoGenero = data.filter((personagem) => personagem.gender.toLowerCase() === condition.toLowerCase());
  return resultadoGenero;
};

//////////////////FUNÇÃO DE FILTRAGEM ESPÉCIE - filter()
export const  filtroEspecie = (data, condition) => {
  const resultadoEspecie = data.filter((personagem) => personagem.species.toLowerCase() === condition.toLowerCase());
  return resultadoEspecie;
};

//////////////////FUNÇÃO DE FILTRAGEM STATUS - filter()
export const  filtroStatus = (data, condition) => {
  const resultadoStatus = data.filter((personagem) => personagem.status.toLowerCase() === condition.toLowerCase());
  return resultadoStatus;
};

//////////////////ORDENAÇÃO ALFABÉTICA UTILIZANDO SORT
export const ordemAlfabetica = (data, order) => {
  if (order === "AZ") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1)
  } else if (order === "ZA") {
    return data.sort((a, z) => a.name > z.name ? -1 : 1)
  } return data
};

//////////////////FUNÇÃO DE BUSCA POR NOME- FILTER()
export const  buscarNome = (data, condition) => {
  const resultadoLocalizacao = data.filter((personagem) => personagem.name.toLowerCase().includes(condition.toLowerCase()));
  return resultadoLocalizacao;
};

//////////////////CALCULO DE PORCENTAGEM POR CATEGORIA 
export const calcularPorcentagem = (total, portion) => {
  const porcentagem = Math.round((portion * 100) / total);
  return porcentagem;
};

// Estas funções devem ser*[puras](https://imasters.com.br/desenvolvimento/serie-js-e-vida-pure-functions-funcoes-puras)*e independentes do DOM. 
// Estas funções serão depois usadas a partir do arquivo`src/main.js`, ao carregar a página e a cada vez que o usuário interagir com a interface 
// (cliques, seleções, filtros, ordenação, etc).*/
