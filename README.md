# Studio Ghibli - Data Lovers

Projeto criado para organizar, filtrar e selecionar dados e apresentar em uma página web de acordo com a necessidade de usuários.

Para visualizar, acesse [aqui.](link)

![print-app-home]()

## Índice

- [1. Resumo do projeto](#1-resumo-do-projeto)
- [2. Introdução](#2-introducao)
- [3. Pesquisa](#3-pesquisa)
- [4. Histórias de usuários](#3-historias-de-usuarios)
- [5. Desenvolvimento do protótipo](#5-desenvolvimento-do-prototipo)
- [6. Testes de usabilidade ](#6-testes-de-usabilidade)
- [7. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)


---
## 1. Resumo do projeto

Studio ghibli - Data Lovers é uma aplicação web desenvolvida a partir de um data set contendo informações sobre lançamentos, personagens, diretores e avaliações de cada um dos filmes. 

Neste projeto foi desenvolvido um protótipo para a interface gráfica para visualizar os dados de maneira adequada aos usuários, pesquisa de usuários e testes de usabilidade.

Estes são os dados utilizados:

* [Studio Ghibli](src/data/ghibli/ghibli.json).
  Lista de animações e personagens do [Studio Ghibli](https://ghiblicollection.com/).
  - [Pesquisa com seguidores de Studio Ghibli](src/data/ghibli/README.md)


Projeto desenvolvido por [Lediane Machado](https://github.com/ledi-mach) e [Carolina Alvim.](https://github.com/caroAlvim)

## 2. Introdução

Segundo a [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read) 90% dos dados que existem hoje foram gerados durante os últimos dois anos. A cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem precedentes.

Apesar disso, os dados por si só são de pouca utilidade. Para que essas grandes quantidades de dados se convertam em **informação** compreensível para os usuários, precisamos entender e processar estes dados. Uma forma simples de fazer isso é criando _interfaces_ e _visualizações_.


## 3. Pesquisa

Utilizando o Google Forms, realizamos uma pesquisa visando descobrir qual é a idade dos nossos usuários e quais seriam os seus interesses na aplicação web que seria desenvolvida.

Obtivemos os seguintes resultados:

![print-idade]()

* 40,7% dos usuários tem entre 16-21 anos e mais de 30% tem entre 22-33 anos.

![print-fa]()
* 53,7% já conhecem as animações e se declaram fãs das animações.

![interesse-site]()
* Parte significativa dos entrevistados afirmaram ter interesse em pesquisar filmes por diretor, ano de lançamento e por ordem alfabética dos personagens.



## 4. História dos usuários

Após a análise das respostas do formulário, identificamos três usuários:

### Hitória 1

![historia-um]()

### História 2

![historia-dois]()

### História 3

![historia-tres]()



## 5. Protótipo

![prototipo]()

![paleta-ghibli]()



## 6. Objetivos de aprendizagem

Neste projeto, o objetivo principal é aprender a desenhar e construir uma interface web onde se possa visualizar e manipular dados, entendendo o que o usuário necessita.

Para isso, foi utilizado:

### HTML e CSS

* [Uso de HTML semântico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* Uso de seletores de CSS.
* Construir sua aplicação respeitando o desenho realizado (protótipo).
* [Uso de flexbox em CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM e Web APIs

* Uso de seletores de DOM.
* Gerenciamento de eventos de DOM.
* [Manipulação dinâmica de DOM.](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o) (appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* Uso de condicionais (if-else | switch | operador ternário)
* Uso de laços (for | for..in | for..of | while)
* Uso de funções (parâmetros | argumentos | valor de retorno)
* Manipular arrays (filter | map | sort | reduce)
* Manipular objects (key | value)
* Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) | [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* Diferenciar entre expression e statements.
* Diferenciar entre tipos de dados atômicos e estruturados.

### Testing

* [Teste unitário.](https://jestjs.io/docs/pt-BR/getting-started)

### Estrutura do código e guia de estilo

* Organizar e dividir o código em módulos (Modularização)
* Uso de identificadores descritivos (Nomenclatura | Semântica)
* Uso de linter (ESLINT)

### Git e GitHub

* Uso de comandos de git (add | commit | pull | status | push)
* Gerenciar repositórios de GitHub (clone | fork | gh-pages)
* Colaboração no Github (branches | pull requests | |tags)




O coração deste projeto é a manipulação de dados através de arrays e objetos.

Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):

- `filterData(data, condition)`: esta função receberia os dados e nos retornaria os que cumprem com a condição.

- `sortData(data, sortBy, sortOrder)`: esta função recebe três parâmetros. O primeiro, `data`, nos entrega os dados. O segundo, `sortBy`, diz respeito a qual das informações quer usar para ordenar. O terceiro, `sortOrder`, indica se quer ordenar de maneira crescente ou decrescente.

- `computeStats(data)`: essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.


