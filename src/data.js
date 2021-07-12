
export const personagensFiltrados = personagens.filter(function (personagem) {
    if (
      personagem.status === filtroStatus ||
      personagem.species === filtroSpecies ||
      personagem.gender === filtoGender 
    ) {
      return personagem;
    }
  });
  mostrarCartoes(personagensFiltrados);
};
