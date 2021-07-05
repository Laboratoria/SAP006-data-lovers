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
  const resultadoLocalizacao = data.filter((personagem) => personagem.name.toLowerCase().includes(condition.toLowerCase()));
  return resultadoLocalizacao;
};

//Calculo de porcentagem por categoria 
export const calcularPorcentagem = (total, portion) => {
  const porcentagem = Math.round((portion * 100) / total);
  return porcentagem;
}; 
