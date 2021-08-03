import { decreasingOrder, order , DirectorSelected } from '../src/data.js';
const films = [
  {
    
    "title": "Hannibal",
    "director": "Juliete",
  },
  {
   
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki", 
  },
{
  "title": "StarWars",
    "director": "Beatriz", 
},
]

const valueSelected = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
  },
  {
   
    "title": "The Tale of the Princess Kaguya",
    "director": "Isao Takahata", 
  },
{
  "title": "StarWars",
    "director": "Beatriz",   
  },
]


describe('order', () => {
  it('is a function', () => {
    expect(typeof order).toBe('function');
  });

  it('espero receber a lista de filmes ordenados' , () => {
    expect(order(films) ).toEqual([{"director": "Hayao Miyazaki", "title": "Castle in the Sky"}, {"director": "Juliete", "title": "Hannibal"}, {"director": "Beatriz", "title": "StarWars"}]);
  });
  it('espero receber como retorno o valor 0 , caso os titulos dos filmes sejam iguais', () => {
    expect(order(films)).toEqual([{"director": "Hayao Miyazaki", "title": "Castle in the Sky"}, {"director": "Hayao Miyazaki", "title": "Castle in the Sky"}, {"director": "Juliete", "title": "Hannibal"}, {"director": "Beatriz", "title": "StarWars"}]);
  
  });

  it('espero receber a lista de filmes em ordem decrescente' , () => {
      expect(decreasingOrder(films)).toEqual([{"director":"Yoshifumi Kondō" , "title":"Whisper of the Heart"},{"director": "Juliete", "title": "Hannibal"}, {"director": "Beatriz", "title": "StarWars"}]);
    });


it.only('espero receber a lista de filmes filtrados pelo nome do diretor' , () => {
    expect(DirectorSelected(valueSelected)).toEqual([{"director":"Hayao Miyazaki" , "title":"Castle in the Sky"}, {"director":"Isao Takahata" , "title":"The Tale of the Princess Kaguya"}, {"director":"Beatriz" , "title":"StarWars"}]);

});