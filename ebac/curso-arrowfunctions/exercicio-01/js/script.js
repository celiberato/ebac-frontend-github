// FORMULÁRIO 1:------------------------------
var media = (p_soma, p_notas) => p_soma / p_notas.length;
var condicao = (p_media) => p_media >= 8 ? "aprovado" : "reprovado";
var proximoNumero = (p_numero) => p_numero - 1;
var todosPreenchidos = (n1, n2, n3, n4) => n1!="" && n2!="" && n3!="" && n4!=""; 
var validacaoTodosPreenchidos = (todosNumerosPreenchidos) => {
    if( !todosNumerosPreenchidos ) {
        document.getElementById('resultado-frm1').innerHTML = "• Necessário preencher todos os campos";
        return false;
    }
    return true;
}
var converteNumero = (dado) =>  dado.match(/\d*/) ? Number(dado) : 0;
var calcularMedia = ( notas ) => { m_soma = 0; notas.forEach( nota => m_soma += nota ); return media(m_soma, notas); }
var aprovacao = ( notas ) => { return 'Média: ' + calcularMedia( notas ) + ' - Resultado: ' + condicao(calcularMedia(notas)); }

var contagemRegressiva = (numero) => { if(proximoNumero > 0) contagemRegressiva( proximoNumero(numero) ) };

// FORMULARIO 2:------------------------------
var validNome = (elemento) => { 
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoNome(this);
    });
}

var validEmail = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoEmail(this);
    });
}

var validUF = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoUF(this);
    });
}

var validTelefone = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoTelefone(this);
    });
}
var validCEP = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoCEP(this);
    });
}
var validCidade = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoCidade(this);
    });
}

var campoValidado = (elemento, classe) => {
    document.querySelector(classe).innerHTML = '';
    elemento.classList.remove('erro');
    elemento.parentNode.classList.remove('erro');
}

var campoInvalido = (elemento) => {
    elemento.classList.add('erro');
    elemento.parentNode.classList.add('erro');
    document.getElementById('resultado-frm2').innerHTML = "";
}

// --------------------------------------------------




/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        var todosNumerosPreenchidos = todosPreenchidos(
                document.getElementsByClassName('n1'), 
                document.getElementsByClassName('n2'),
                document.getElementsByClassName('n3'),
                document.getElementsByClassName('n4'));


        validacaoTodosPreenchidos(todosNumerosPreenchidos);
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {
            let numero = converteNumero(dados.get(key));
            if(!isNaN(numero)) {
                notas.push(numero);
            }
        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado-frm1').innerHTML = texto;

    });

disparaEventosValidacoes();


var invocaValidacaoNome = (elemento) => {
    if(elemento.value != ""){
        campoValidado(elemento, '.erro-nome');
    } else {
        document.querySelector('.erro-nome').innerHTML = "• Favor preencher o nome";
        campoInvalido(elemento)
        return false;
    }
}

function invocaValidacaoEmail(elemento){
    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
    if(elemento.value.match(emailValido)) {
        campoValidado(elemento, '.erro-email');
    } else {
        document.querySelector('.erro-email').innerHTML = "• Favor preecher o campo email";
        campoInvalido(elemento)
        return false;
    }

}

function invocaValidacaoUF(elemento){
    const listaUF = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "GO", "ES", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SP", "SC", "SE", "TO"];

    if(listaUF.includes(elemento.value.toUpperCase())) {
        campoValidado(elemento, '.erro-uf');
    } else {
        document.querySelector('.erro-uf').innerHTML = "• Favor preecher o campo UF no formato XX";
        campoInvalido(elemento)
        return false;
    }

}


function invocaValidacaoTelefone(elemento){
    let contemTraco = elemento.value.includes('-');

    let numero = elemento.value.match(/^[\d]2-[\d]9/) ? elemento.value.replace(/-/, "") : elemento.value; 

    if(numero != "" && numero==elemento.value && contemTraco){
        campoValidado(elemento, '.erro-telefone');
    } else {
        document.querySelector('.erro-telefone').innerHTML = "• Favor preecher o campo telefone no formato 00-000000000";
        campoInvalido(elemento)
        return false;
    }

}


function invocaValidacaoCEP(elemento){
    let contemTraco = elemento.value.includes('-');

    let numero = elemento.value.match(/^[\d]5-[\d]3/) ? elemento.value.replace(/-/, "") : elemento.value; 

    if(numero != "" && numero==elemento.value && contemTraco){
        campoValidado(elemento, '.erro-cep');
    } else {
        document.querySelector('.erro-cep').innerHTML = "• Favor preecher o campo cep";
        campoInvalido(elemento)
        return false;
    }

}


function invocaValidacaoCidade(elemento){
    let texto = elemento.value; 

    if(texto != ""){
        campoValidado(elemento, '.erro-cidade');
    } else {
        document.querySelector('.erro-cidade').innerHTML = "• Favor preecher o campo cidade";
        campoInvalido(elemento)
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
