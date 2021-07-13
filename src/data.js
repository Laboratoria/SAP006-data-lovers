export const filtrarPersonagens = (personagens, filtroStatus, filtroSpecies, filtroGender) => personagens.filter(function (personagem) {
  if (
    personagem.status === filtroStatus ||
    personagem.species === filtroSpecies ||
    personagem.gender === filtroGender 
  ) {
    return personagem;
  }
}); 

export const ordemAZ = (data) => data.sort((a, b) => (a.name < b.name) ? - 1 : 1);

export const ordemZA = (data) => data.sort((a, b) => (a.name > b.name) ? - 1 : 1);
