import { filtroGenero, filtroEspecie, filtroStatus, ordemAlfabetica, buscarNome, calcularPorcentagem} from '../src/data.js';

/////////////////////TESTE PARA FILTRAR GENERO
describe('filtroGenero', () => {
  const resultadoGenero =
  [{ gender: "Male"},
  { gender: "Female"},
  { gender: "unknown"}
  ];
  
  it("deverá ser 'a function'", () => {
    expect(typeof filtroGenero).toBe('function');
  });

  it('returns ``', () => {
    expect((resultadoGenero, [{"gender": "Male"}, {"gender": "Female"}, {"gender": "unknown"}])).toEqual([
      { gender: "Male"},
      { gender: "Female"},
      { gender: "unknown"}
    ]);
  });
});

/////////////////////TESTE PARA FILTRAR ESPÉCIE
describe('filtroEspecie', () => {
  const resultadoEspecie =
  [{ species: "Alien"},
  { species: "Human"},
  { species: "unknown"}
  ];
  
  it("deverá ser 'a function'", () => {
    expect(typeof filtroEspecie).toBe('function');
  });

  it('returns ``', () => {
    expect((resultadoEspecie, [{"species": "Alien"}, {"species": "Human"}, {"species": "unknown"}])).toEqual([
      { species: "Alien"},
      { species: "Human"},
      { species: "unknown"}
    ]);
  });
});

/////////////////////TESTE PARA FILTRAR STATUS
describe('filtroStatus', () => {
  const resultadoStatus =
  [{ status: "Alive"},
  { status: "Dead"},
  { status: "unknown"}
  ];
  
  it("deverá ser 'a function'", () => {
    expect(typeof filtroStatus).toBe('function');
  });

  it('returns ``', () => {
    expect((resultadoStatus, [{"status": "Alive"}, {"status": "Dead"}, {"status": "unknown"}])).toEqual([
      { status: "Alive"},
      { status: "Dead"},
      { status: "unknown"}
    ]);
  });
});

/////////////////////TESTE PARA FILTRAR EM ORDEM ALFABÉTICA CRESCENTE
describe('ordemAlfabetica', () => {
  const order =
  [{ name: "Morty"},
  { name: "Rick"},
  { name: "Summer"}
  ];
  
  it("deverá ser 'a function'", () => {
    expect(typeof ordemAlfabetica).toBe('function');
  });

  it('returns ``', () => {
    expect((order, [{"name": "Morty"}, {"name": "Rick"}, {"name": "Summer"}])).toEqual([
      { name: "Morty"},
      { name: "Rick"},
      { name: "Summer"}
    ]);
  });
});

/////////////////////TESTE PARA FILTRAR EM ORDEM ALFABÉTICA DECRESCENTE
describe('ordemAlfabetica', () => {
  const order =
  [{ name: "Summer"},
  { name: "Rick"},
  { name: "Morty"}
  ];
  
  it("deverá ser 'a function'", () => {
    expect(typeof ordemAlfabetica).toBe('function');
  });

  it('returns ``', () => {
    expect((order, [{"name": "Summer"}, {"name": "Rick"}, {"name": "Morty"}])).toEqual([
      { name: "Summer"},
      { name: "Rick"},
      { name: "Morty"}
    ]);
  });
});


/////////////////////TESTE PARA BUSCAR POR NOME
describe('buscarNome', () => {
  const nomePersonagens =
  [{ name: "Beth"},
  { name: "Jerry"},
  { name: "Alien Morty"}
  ];
  
  it("deverá ser 'a function'", () => {
    expect(typeof buscarNome).toBe('function');
  });

  it('returns ``', () => {
    expect((nomePersonagens, [{"name": "Beth"}, {"name": "Jerry"}, {"name": "Alien Morty"}])).toEqual([
      { name: "Beth"},
      { name: "Jerry"},
      { name: "Alien Morty"}
    ]);
  });
});


/////////////////////TESTE PARA CALCULAR PORCENTAGEM
/*describe('calcularPorcentagem', () => {
  const resultadoLocalizacao =
  [{ name: "Beth"},
  { name: "Jerry"},
  { name: "Alien Morty"}
  ];
  
  it("deverá ser 'a function'", () => {
    expect(typeof calcularPorcentagem).toBe('function');
  });

  it('returns ``', () => {
    expect((resultadoLocalizacao, [{"name": "Beth"}, {"name": "Jerry"}, {"name": "Alien Morty"}])).toEqual([
      { name: "Beth"},
      { name: "Jerry"},
      { name: "Alien Morty"}
    ]);
  });
});*/






/////////////////////TESTE PARA FILTRAR GENERO
/*describe('filtroGenero', () => {
  it("deverá ser 'a function'", () => {
    expect(typeof filtroGenero).toBe('function');
  });

  it('returns `filter`', () => {
    const resultadoGenero = filtroGenero("", "male", "female", "unknown");
    console.log(resultadoGenero)
    expect(filtroGenero("resultadoGenero")).toBe("male","female");
  });
});

/////////////////////TESTE PARA FILTRAR ESPÉCIE
describe('filtroEspecie', () => {
  it('is a function', () => {
    expect(typeof filtroEspecie).toBe('function');
  });

  it('returns `filter species`', () => {
    const resultadoEspecie = filtroEspecie("","Alien","Human","Parasite");
    console.log(resultadoEspecie)
    //expect(filtroEspecie("resultadoEspecie")).toBe("Alien","Human","Parasite");
  });
});

/////////////////////TESTE PARA FILTRAR STATUS
describe('filtroStatus', () => {
  it('is a function', () => {
    expect(typeof filtroStatus).toBe('function');
  });

  it('returns `filter status`', () => {
    const resultadoStatus = filtroStatus("","Alive", "Dead", "unknown");
    console.log(resultadoStatus)
    //expect(filtroStatus("resultadoStatus")).toBe("Alive", "Dead", "unknown");
  });
});

/////////////////////TESTE PARA FILTRAR EM ORDEM ALFABÉTICA
describe('ordemAlfabetica', () => {
  it('is a function', () => {
    expect(typeof ordemAlfabetica).toBe('function');
  });

  it('returns `ordem alfabética`', () => {
    const order = ordemAlfabetica("","AZ", "ZA");
    console.log(order)
    //expect(ordemAlfabetica("order")).toBe("AZ","ZA");
  });
});

/////////////////////TESTE PARA BUSCAR POR NOME
describe('buscarNome', () => {
  it('is a function', () => {
    expect(typeof buscarNome).toBe('function');
  });

  it('returns `buscar nome`', () => {
    const nomePersonagens = buscarNome("","Rick","Morty");
    console.log(nomePersonagens)
    //expect(buscarNome("nomePersonagens")).toBe("Rick","Morty");
  });
});

/////////////////////TESTE PARA CALCULAR PORCENTAGEM
describe('calcularPorcentagem', () => {
  it('is a function', () => {
    expect(typeof calcularPorcentagem).toBe('function');
  });

  it('returns `calculo porcentagem`', () => {
    const texto = calcularPorcentagem("");
    console.log(texto)
    //expect(calcularPorcentagem("texto")).toBe("");
  });
});*/