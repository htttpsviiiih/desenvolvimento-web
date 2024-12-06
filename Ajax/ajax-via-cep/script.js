function buscar (cep){

let ajax = new XMLHttpRequest();

ajax.open('GET', 'https://viacep.com.br/ws/'+cep+'/json/', true);

ajax.onload = function(){
    if (ajax.status == 200) {
        console.log('Resposta: ', JSON.parse(ajax.responseText));

        loading.style.display = "none";


        let endereco = JSON.parse(ajax.responseText);


        let resultado = document.querySelector('.resultado');

        resultado.innerHTML = "logradouro: " + endereco.logradouro + "<br>" + "Bairro: " + endereco.bairro;


    }else {
        console.error('Erro: ', ajax.status, ajax.statusText);
    }
}

ajax.send(null);

}

let loading = document.querySelector('.carregando');


let button = document.querySelector('button');

button.addEventListener('click', ()=>{

loading.style.display = "block";


let input = document.querySelector('input');

let cep = input.value;

    buscar(cep);

});