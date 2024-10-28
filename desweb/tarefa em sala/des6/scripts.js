const titulos = ["Sir", "Mister", "Dame", "Lord", "Lady", "Capitão", "Dama"];
const nomes = ["Arthur", "Gwendolin", "Merlin", "Lancelot", "Morgana", "Ragnar", "Eowyn"];
const classes = ["Mago", "Paladino", "Guerreiro", "Ladrão", "Bárbaro", "Feiticeiro", "Cavaleiro"];
const localizacao = ["Valfenda", "Gondor", "Asgard", "Camelot", "Nárnia", "Babilônia", "Atlantis"];

const botao = document.querySelector("button");
const p = document.querySelector('p');

function gerarNome() {
    const title = titulos[Math.floor(Math.random() * titulos.length)];
    const name = nomes[Math.floor(Math.random() * nomes.length)];
    const classe = classes[Math.floor(Math.random() * classes.length)];
    const location = localizacao[Math.floor(Math.random() * localizacao.length)];

    const nomeAventura = `${title} ${name}, o ${classe} de ${location}`;
    p.innerText = nomeAventura; 
}

botao.addEventListener("click", gerarNome);
