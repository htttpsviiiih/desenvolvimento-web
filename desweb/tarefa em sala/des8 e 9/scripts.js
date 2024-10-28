const input = document.querySelectorAll("input");
const texto = document.querySelectorAll("p")[0];


input[0].addEventListener('input', () => {
    let textoDigitado = input[0].value;

    if (textoDigitado === "chocolate") {
        texto.innerText = "Eu amo sorvete de chocolate!";
    } else if (textoDigitado === "flocos") {
        texto.innerText = "Ahh, mas chocolate é o meu favorito...";
    } else {
        texto.innerText = "Ahh, eu esperava um sabor de sorvete...";
    }
});

input[1].addEventListener("click", () => {
    let bgColor1 = 'rgb(45, 45, 45)';
    let bgColor2 = 'rgb(28, 28, 28)';
    let bgColor3 = 'rgb(220,220,220)';

    document.body.style.backgroundColor = bgColor1;
    container.style.backgroundColor = bgColor2;
    p.style.color = bgColor3;
});

input[2].addEventListener("click", () => {
    let bgColor1 = 'rgb(201, 201, 201)';
    let bgColor2 = 'rgb(184, 177, 169)';
    let bgColor3 = 'rgb(0,0,0)';

    document.body.style.backgroundColor = bgColor1;
    container.style.backgroundColor = bgColor2;
    p.style.color = bgColor3;
});

