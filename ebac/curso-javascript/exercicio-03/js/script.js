function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        let todosPreenchidos = document.getElementsByClassName('n1')!="" && 
                document.getElementsByClassName('n2')!="" &&
                document.getElementsByClassName('n3')!="" &&
                document.getElementsByClassName('n4')!="";


        if( !todosPreenchidos ) {
            document.getElementById('resultado-frm1').innerHTML = "• Necessário preencher todos os campos";
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado-frm1').innerHTML = texto;

    });

disparaEventosValidacoes();

function validNome(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        invocaValidacaoNome(this);
    });

}

function invocaValidacaoNome(elemento){
    if(elemento.value == ""){
        document.querySelector('.erro-nome').innerHTML = "• Favor preencher o nome";
        elemento.classList.add('erro');
        elemento.parentNode.classList.add('erro');
        return false;
    } else {
        document.querySelector('.erro-nome').innerHTML = '';
        elemento.classList.remove('erro');
        elemento.parentNode.classList.remove('erro');
    }
}


function validEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        invocaValidacaoEmail(this);

    });

}


function invocaValidacaoEmail(elemento){
    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
    if(elemento.value.match(emailValido)) {
        document.querySelector('.erro-email').innerHTML = "";
        elemento.classList.remove('erro');
        elemento.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.erro-email').innerHTML = "• Favor preecher o campo email";
        elemento.classList.add('erro');
        elemento.parentNode.classList.add('erro');
        return false;
    }

}

function validUF(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        invocaValidacaoUF(this);
    });

}


function invocaValidacaoUF(elemento){
    const listaUF = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "GO", "ES", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SP", "SC", "SE", "TO"];

    if(listaUF.includes(elemento.value.toUpperCase())) {
        document.querySelector('.erro-uf').innerHTML = "";
        elemento.classList.remove('erro');
        elemento.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.erro-uf').innerHTML = "• Favor preecher o campo UF no formato XX";
        elemento.classList.add('erro');
        elemento.parentNode.classList.add('erro');
        return false;
    }

}

function validTelefone(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        invocaValidacaoTelefone(this);
    });

}

function invocaValidacaoTelefone(elemento){
    let contemTraco = elemento.value.includes('-');

    let numero = elemento.value.match(/^[\d]2-[\d]9/) ? elemento.value.replace(/-/, "") : elemento.value; 

    if(numero != "" && numero==elemento.value && contemTraco){
        document.querySelector('.erro-telefone').innerHTML = "";
        elemento.classList.remove('erro');
        elemento.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.erro-telefone').innerHTML = "• Favor preecher o campo telefone no formato 00-000000000";
        elemento.classList.add('erro');
        elemento.parentNode.classList.add('erro');
        return false;
    }

}

function validCEP(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();


        invocaValidacaoCEP(this);

    });

}

function invocaValidacaoCEP(elemento){
    let contemTraco = elemento.value.includes('-');

    let numero = elemento.value.match(/^[\d]5-[\d]3/) ? elemento.value.replace(/-/, "") : elemento.value; 

    if(numero != "" && numero==elemento.value && contemTraco){
        document.querySelector('.erro-cep').innerHTML = "";
        elemento.classList.remove('erro');
        elemento.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.erro-cep').innerHTML = "• Favor preecher o campo cep";
                    
        elemento.classList.add('erro');
        elemento.parentNode.classList.add('erro');
        return false;
    }

}

function validCidade(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        invocaValidacaoCidade(this);

    });

}


function invocaValidacaoCidade(elemento){
    let texto = elemento.value; 

    if(texto != ""){
        document.querySelector('.erro-cidade').innerHTML = "";
        elemento.classList.remove('erro');
        elemento.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.erro-cidade').innerHTML = "• Favor preecher o campo cidade";
                    
        elemento.classList.add('erro');
        elemento.parentNode.classList.add('erro');
        return false;
    }

}

function disparaEventosValidacoes(){
    let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
    let camposNome = document.querySelectorAll('input.nome');
    let camposEmail = document.querySelectorAll('input.email');
    let camposUF = document.querySelectorAll('input.uf');
    let camposTelefone = document.querySelectorAll('input.telefone');
    let camposCEP = document.querySelectorAll('input.cep');
    let camposCidade = document.querySelectorAll('input.cidade');
    
    for( let emFoco of camposNome) {
        validNome(emFoco);
    }
    
    
    for( let emFoco of camposEmail) {
        validEmail(emFoco);
    }
    
    for( let emFoco of camposUF) {
        validUF(emFoco);
    }
    
    for( let emFoco of camposTelefone) {
        validTelefone(emFoco);
    }
    
    for( let emFoco of camposCEP) {
        validCEP(emFoco);
    }
    
    for( let emFoco of camposCidade) {
        validCidade(emFoco);
    }    
}


function invocaValidacoes(){
    let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
    let camposNome = document.querySelectorAll('input.nome');
    let camposEmail = document.querySelectorAll('input.email');
    let camposUF = document.querySelectorAll('input.uf');
    let camposTelefone = document.querySelectorAll('input.telefone');
    let camposCEP = document.querySelectorAll('input.cep');
    let camposCidade = document.querySelectorAll('input.cidade');
    
    for( let emFoco of camposNome) {
        invocaValidacaoNome(emFoco);
    }
    
    
    for( let emFoco of camposEmail) {
        invocaValidacaoEmail(emFoco);
    }
    
    for( let emFoco of camposUF) {
        invocaValidacaoUF(emFoco);
    }
    
    for( let emFoco of camposTelefone) {
        invocaValidacaoTelefone(emFoco);
    }
    
    for( let emFoco of camposCEP) {
        invocaValidacaoCEP(emFoco);
    }
    
    for( let emFoco of camposCidade) {
        invocaValidacaoCidade(emFoco);
    }    
}

const formulario2 = document.getElementById('formulario-02');

if(formulario2)
    formulario2.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        invocaValidacoes();

       
        let todosPreenchidos = 
                document.getElementById('nome').value!="" &&
                document.getElementById('email').value!="" &&
                document.getElementById('telefone').value!="" &&
                document.getElementById('cidade').value!="" &&
                document.getElementById('uf').value!="";

        if(todosPreenchidos){
            document.getElementById('resultado-frm2').innerHTML = "Formulário de cadastro enviado com sucesso!";
        } else {
            document.getElementById('resultado-frm2').innerHTML = "Favor preencher todos os campos obrigatórios!";
        }

    });
