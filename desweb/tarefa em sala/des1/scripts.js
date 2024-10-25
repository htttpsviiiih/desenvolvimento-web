
    const input = document.querySelector('input');
    const texto = document.querySelector('p');  

    input.addEventListener('keydown', () => {

        let textoDigitado = input.value;

        if (textoDigitado == "chocolate") {
            texto.innerText = "Eu amo sorvete de chocolate!";
        }else if(textoDigitado == "morango"){
            texto.innerText = "Pode até ser gostoso, mas chocolate supera!";
        }else{
            texto.innerText = "Eita, mas sorvete é sorvete né! ";

        }
    });