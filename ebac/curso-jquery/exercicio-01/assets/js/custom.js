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

});