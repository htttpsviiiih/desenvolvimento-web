
let contador = 10;

const regressiva = document.querySelector('h1')

const botao = document.querySelector('button');


botao.addEventListener('click', () =>{
    contador = 10
    let intervalo = setInterval(()=>{
        regressiva.innerText = contador;
        contador--; 
        if (contador == -1) {
            clearInterval(intervalo);
        }
    },1000);
})