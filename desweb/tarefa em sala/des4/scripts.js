
const botao = document.querySelector('.clique');
const texto = document.querySelector('p');
const limpar= document.querySelector('.limpar');

contagem = 0;
texto


botao.addEventListener('click', () => {

    contagem++;
    texto.innerText = "O botão foi clicado: " + contagem + " vezes";
})  
limpar.addEventListener('click', () => {
    contagem = 0;
    texto.innerText = "O botão foi clicado: " + contagem + " vezes";
})  