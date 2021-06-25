
import data from './data/ghibli/ghibli.js';
const printCard = document.getElementById("listaGlibi")
const studioGlibli = data
const film = studioGlibli.films
console.log(studioGlibli)
let filme = ''
for (let i = 0; film.length > i; i++ ){
   filme = film[i].title
   console.log(filme)
}
   const listOfStudio = film.reduce((accumulator, film) => {
     accumulator += `
     <li class="lista-de-studio"> 
      <p class="nome-do-filme"> Titulo: ${film.title} </p> 
      <img class="imagem-do-poster" src=" ${film.poster}">
      <p class="nome-do-filme"> Descrição: ${film.description} </p>    
      <p class="nome-do-filme"> Director: ${film.director} </p>
      <p class="nome-do-filme"> Producer: ${film.producer} </p>
      <p class="nome-do-filme"> Release_date: ${film.release_date} </p>
      <p class="nome-do-filme"> Rt_score: ${film.rt_score} </p>
     </li>`
     return accumulator
   },[])
   
 const printList= document.getElementById("lista-impressa")
   printList .innerHTML = listOfStudio
   
 



        
    
    



    

   
   
       

             




    
        
            
    

          /**return data += studioGlibli
    document.write(`${studioGlibli}`)}
    function cards() */
//console.log(example, data);
