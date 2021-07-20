import {} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

function cardPersonagem(data) {
  document.getElementById("foto").innerHTML = data
    .map(
      (personagem) =>
        ` <li class = "container-card">
      <div class = "imagem">
        <img src = "${personagem.image}">
      </div>
     <p class = "info">
          Nome: ${personagem.name} <br>
          Status: ${personagem.status} <br>
          Gênero: ${personagem.gender}
     </p>
    </li>
  `
    )
    .join("");
}
cardPersonagem(data.results);
//const arrayTest = ["rick", "Summer", "Morty"];

//const btnFiltrar = () => {
//  const valorSelecionado = btnPesquisar.value;
// const retornaValor = example(arrayTest);
// cardPersonagem(retornaValor);
//exemple()
/*função do dataJS para filtrar personagens*/
//};
//const btnPesquisar = document.getElementById("btn-pesquisar");

//btnPesquisar.addEventListener("click", btnFiltrar);

//btnFiltrar.cardPersonagem(data.results);
/*const filtro = document.querySelectorAll("li") pode ser usado em li
usando o filter
const dados = info.filter((dadoPerso) => {
  console.log(dadosPerso.status);
  o SORT usado em uma array serve para colocar em ordem alfabetica
  o MAP retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
}); 
*/
