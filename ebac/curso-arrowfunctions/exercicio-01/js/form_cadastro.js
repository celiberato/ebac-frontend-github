// FORMULARIO 2:------------------------------
const validNome = (elemento) => { 
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoNome(this);
    });
}

const validEmail = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoEmail(this);
    });
}

const validUF = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoUF(this);
    });
}

const validTelefone = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoTelefone(this);
    });
}
const validCEP = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoCEP(this);
    });
}
const validCidade = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        invocaValidacaoCidade(this);
    });
}

const campoValidado = (elemento, classe) => {
    document.querySelector(classe).innerHTML = '';
    elemento.classList.remove('erro');
    elemento.parentNode.classList.remove('erro');
}

const campoInvalido = (elemento) => {
    elemento.classList.add('erro');
    elemento.parentNode.classList.add('erro');
    document.getElementById('resultado-frm2').innerHTML = "";
}

// --------------------------------------------------




disparaEventosValidacoes();


const invocaValidacaoNome = (elemento) => {
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
    const contemTraco = elemento.value.includes('-');

    const numero = elemento.value.match(/^[\d]2-[\d]9/) ? elemento.value.replace(/-/, "") : elemento.value; 

    if(numero != "" && numero==elemento.value && contemTraco){
        campoValidado(elemento, '.erro-telefone');
    } else {
        document.querySelector('.erro-telefone').innerHTML = "• Favor preecher o campo telefone no formato 00-000000000";
        campoInvalido(elemento)
        return false;
    }

}


function invocaValidacaoCEP(elemento){
    const contemTraco = elemento.value.includes('-');

    const numero = elemento.value.match(/^[\d]5-[\d]3/) ? elemento.value.replace(/-/, "") : elemento.value; 

    if(numero != "" && numero==elemento.value && contemTraco){
        campoValidado(elemento, '.erro-cep');
    } else {
        document.querySelector('.erro-cep').innerHTML = "• Favor preecher o campo cep";
        campoInvalido(elemento)
        return false;
    }

}


function invocaValidacaoCidade(elemento){
    const texto = elemento.value; 

    if(texto != ""){
        campoValidado(elemento, '.erro-cidade');
    } else {
        document.querySelector('.erro-cidade').innerHTML = "• Favor preecher o campo cidade";
        campoInvalido(elemento)
        return false;
    }

}

function disparaEventosValidacoes(){
    const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
    const camposNome = document.querySelectorAll('input.nome');
    const camposEmail = document.querySelectorAll('input.email');
    const camposUF = document.querySelectorAll('input.uf');
    const camposTelefone = document.querySelectorAll('input.telefone');
    const camposCEP = document.querySelectorAll('input.cep');
    const camposCidade = document.querySelectorAll('input.cidade');
    
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
    const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
    const camposNome = document.querySelectorAll('input.nome');
    const camposEmail = document.querySelectorAll('input.email');
    const camposUF = document.querySelectorAll('input.uf');
    const camposTelefone = document.querySelectorAll('input.telefone');
    const camposCEP = document.querySelectorAll('input.cep');
    const camposCidade = document.querySelectorAll('input.cidade');
    
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

       
        const todosPreenchidos = 
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
