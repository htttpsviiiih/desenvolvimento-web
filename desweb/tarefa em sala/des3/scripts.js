

const textoMudar = document.querySelector('h1');
const tela = document.querySelector('.tela');


textoMudar.addEventListener('click', ()=>{

    alter = "MENTIRA, HAHAHAHAHAHAH!";
    textoMudar.innerText = alter;
})
    
textoMudar.addEventListener("click", ()=>{
    let bgColor = 'rgb(' + Math.random()*225 + ',' + Math.random()*255 + ',' + Math.random() * 255 + ')';
    
    tela.style.backgroundColor = bgColor;
})