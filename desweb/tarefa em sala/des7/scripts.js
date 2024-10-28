
const imagem = document.querySelector("img");
const texto = document.querySelector("p");

    imagem.addEventListener("click", function(e){
        texto.innerText = "Você encostou em mim? Péssima ideia... espero que não goste muito da sua sanidade!";
    })

    imagem.addEventListener("mouseenter", function(){
        texto.innerText = "Ah, um toque curioso? Espero que goste de pesadelos eternos , porque é o que vem de brinde!"; //não funci0ona, pq eu n sei(?)
    })
    imagem.addEventListener("mousemove", function(){
        texto.innerText = "Não ouse!";
    })
    
    imagem.addEventListener('mouseleave', function(){
        texto.innerText = "Muito bem, achei que estava louco!!!!";
    })
