import { example } from './data.js';
import data from './data/lol/lol.js';

let dados = data.data1
let campeoes
//let c = 1

console.log(dados.Aatrox.info)

window.addEventListener("load", inicia)    
    function inicia() {  
        
        for (campeoes in dados){
        //console.log(campeoes)    
        let d = document.createElement("div")
        //d.class = 'card'
        let texto = document.createTextNode(campeoes)
        
            //let im = document.querySelector('div'); 
            let image = document.createElement("img");
            image = new Image(200, 150); // Largura (width) e altura (height).
            image.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeoes}_0.jpg`;
    
               
        
            d.appendChild(texto)  
            d.appendChild(image);      
            document.body.appendChild(d) 
            
        
    
        }

        
    window.addEventListener("load", inicia)

    }
    
    
    





/*

window.addEventListener("load", inicia)    
    function inicia() {  
        
        for (campeoes in dados){
        let d = document.createElement("div")
        d.class = 'card'
        let texto = document.createTextNode(campeoes)
        d.appendChild(texto)
        document.body.appendChild(d)
    }
    
    window.addEventListener("load", inicia)
    
}


let resultado = 1
console.log(resultado)

console.log(Object.keys(data.data1).length)

let tipo = data.data1.Aatrox.name

for (let c=0; c < teste.length; c++){
    let c1 = document.querySelector('div#'+'${c}')
    c1.innerHTML = tipo



}

let c1 = document.querySelector('div#'+)
    c1.innerHTML = tipo

let teste = Object.keys(data.data1.Aatrox.img)
console.log(teste)

console.log(data.data1.Aatrox.name)

console.log(data.data1)





let dados = data.data1
let campdivs = []
let campeoes

for (campeoes in dados){
    campdivs.push(campeoes)
      
}
console.log(campeoes)
console.log(campdivs)

//console.log(data['data']['Aatrox'])

/*let c1 = document.querySelector('div#res')
    c1.innerHTML = resultado

let c2 = document.querySelector('div#res2')
    c2.innerHTML = resultado

let c3 = document.querySelector('div#res3')
    c3.innerHTML = resultado

let c4 = document.querySelector('div#res4')
    c4.innerHTML = resultado

console.log(resultado)

console.log(example, data);

//func. BUSCA 
funcion search(e) {    
    if(e.key === "Enter") {
        let searchText = document.querySelector('div#busca').value
    
    }
}
document.addEventListener("keypress", search)
*/