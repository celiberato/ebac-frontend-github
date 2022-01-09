const HTML_ERRO_INSCREVER = '#msg-erro-inscrever';
const HTML_ERRO_CADASTRO = '#msg-erro-cadastro';
const HTML_ERRO_CONTATO = '#msg-erro-contato';


$(document).ready(function(){

    let qtProdutos = $('.card-text').length;

    const duracao = 200;

    for(i = 0; i < qtProdutos; i++){
        $('.card-text:nth('  + i + ')').on('mouseenter', function(){
            $(this).fadeOut(duracao).fadeIn(duracao);
        });        

        $('.img-produto:nth('  + i + ')').on('mouseenter', function(){
            $(this).fadeOut(duracao).fadeIn(duracao);
        });        

    }

    // mascaras-------------------------------------
    $('.cep').mask('00000-000');
    $('.telefone').mask('0000-0000');

    // inscrever-me---------------------------------
    $('#nome').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_INSCREVER);
    })

    $('#email').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_INSCREVER);
    })

    $('.form-inscrever').on('submit', function(e){
        e.preventDefault();

        $('#msg-erro-inscrever').html('');

        validate($('#nome'), HTML_ERRO_INSCREVER);
        validate($('#email'), HTML_ERRO_INSCREVER);

        if($('#nome').hasClass('invalid') || $('#email').hasClass('invalid')){
            return false;
        }
        $('#modal-1').modal('hide');
    })
    //--------------------------------------------


    // cadastro-----------------------------------
    $('#nome-cadastro').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_CADASTRO);
    })
    $('#email-cadastro').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_CADASTRO);
    })
    $('#endereco').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_CADASTRO);
    })
    $('#cidade').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_CADASTRO);
    })
    $('#estado').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_CADASTRO);
    })
    $('#cep').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_CADASTRO);
    })
    $('#bairro').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_CADASTRO);
    })
    $('#telefone').on('blur', function(e){
        e.preventDefault();

        validate($(this), HTML_ERRO_CADASTRO);
    })


    $('.form-cadastro').on('submit', function(e){
        e.preventDefault();

        $(HTML_ERRO_CADASTRO).html('');

        validate($('#nome-cadastro'), HTML_ERRO_CADASTRO);
        validate($('#email-cadastro'), HTML_ERRO_CADASTRO);
        validate($('#cidade'), HTML_ERRO_CADASTRO);
        validate($('#endereco'), HTML_ERRO_CADASTRO);
        validate($('#estado'), HTML_ERRO_CADASTRO);
        validate($('#cep'), HTML_ERRO_CADASTRO);
        validate($('#bairro'), HTML_ERRO_CADASTRO);
        validate($('#telefone'), HTML_ERRO_CADASTRO);
    
        if($('#nome-cadastro').hasClass('invalid') 
            || $('#email-cadastro').hasClass('invalid')
            || $('#cidade').hasClass('invalid')
            || $('#endereco').hasClass('invalid')
            || $('#estado').hasClass('invalid')
            || $('#cep').hasClass('invalid')
            || $('#bairro').hasClass('invalid')
            || $('#telefone').hasClass('invalid')){
            
            return false;
        } else {
            $('#msg-sucesso-cadastro').html('Cadastro efetuado com sucessso!');
            $('.form-cadastro')[0].reset();
        }      
    })
    //-------------------------------------------
    
    $('#btnInscrever').on('click', function(e){
        e.preventDefault();

        inscreverMe(this);
    })


    // contato-----------------------------------
    $('#nome-contato').on('blur', function(e){
        e.preventDefault();

        $('#msg-sucesso-contato').html('');

        validate($(this), HTML_ERRO_CONTATO);
    })
    $('#email-contato').on('blur', function(e){
        e.preventDefault();

        $('#msg-sucesso-contato').html('');

        validate($(this), HTML_ERRO_CONTATO);
    })


    $('.form-contato').on('submit', function(e){
        e.preventDefault();

        $(HTML_ERRO_CONTATO).html('');

        validate($('#nome-contato'), HTML_ERRO_CONTATO);
        validate($('#email-contato'), HTML_ERRO_CONTATO);
    
        if($('#nome-contato').hasClass('invalid') 
            || $('#email-contato').hasClass('invalid')){
            
            return false;
        } else {
            $('#msg-sucesso-contato').html('Contato efetuado com sucessso!');
            $('.form-contato')[0].reset();
        }      
    })
    //-------------------------------------------
});

function validate(elemento, erro){
    if(elemento.val()==''){
        elemento.addClass('invalid');
        $(erro).append('• O campo ' + elemento.attr('name') + ' é obrigatório<br>');
        return false;
    } else {
        elemento.removeClass('invalid');
    }        
}


function inscreverMe(e){
    $('#nome').val('');
    $('#email').val('');

    $('#modal-1').modal('show');
}

