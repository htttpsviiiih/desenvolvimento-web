const botao = document.querySelector('.criar');
const lista = document.querySelector('.criando');
let contador = 0;

botao.addEventListener('click', ()=>{
    contador ++;
    const novoItem =  document.createElement('li');
    novoItem.textContent =  contador +"° Item ";

    lista.appendChild(novoItem);
  
})