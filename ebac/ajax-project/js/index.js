let atores = [];

function clickImportarAtores(obj, url) {

    var detalheAtor = [];

    $.get( url, function( data ) {
        detalheAtor = [];
        detalheAtor.name = `Nome: ${data['name']}`;
        detalheAtor.gender   = `Sexo: ${(data.gender == 'male'? 'Masculino': 'Feminino')}`;
        detalheAtor.hair_color = `Cor do cabelo: ${data.hair_color}`;
        detalheAtor.skin_color =  `Cor da pele: ${data.skin_color}`;
        detalheAtor.eye_color = `Cor dos olhos: ${data.eye_color}`;
        detalheAtor.birth_year = `Ano de  nascimento: ${data.birth_year}`;

        detalheAtor.url = `${data.url}`;

        imprimirDetalhesAtor(detalheAtor);
    });
}


function imprimirDetalhesAtor(ator){
    var resultado = "<ul>";
    resultado += `<li style="color: green; font-weight: bolder;">${ator.name}`;
    resultado += `<li>${ator.gender}`;
    resultado += `<li>${ator.hair_color}`;
    resultado += `<li>${ator.skin_color}`;
    resultado += `<li>${ator.eye_color}`;
    resultado += `<li>${ator.birth_year}`;
    resultado += `<li><strong">${ator.url}</strong>`;
    resultado += "</ul>"

    $('#ator').html(resultado);

    showModalAtor();

}


function clickImportarPlanetas() {

    var planetas = [];

    $.get( "https://swapi.dev/api/planets", function( data ) {
        for(var i = 0; i < data.results.length; i++){

            const planeta = data.results[i];

            planetas[i] = [];
            planetas[i].name = planeta['name'];
            planetas[i].residents = planeta['residents'];
        }

        imprimirPlanetas(planetas);
    });
}


function imprimirPlanetas(planetas){
    var resultado = "<ul>";
    for(var i = 0; i < planetas.length; i++){
        resultado += `<li><h2><span style="color: green;">Planeta: </span>${planetas[i].name}</h2>`;

        resultado += `<ul>`;
        for(var r = 0; r < planetas[i].residents.length; r++){
            resultado += `<li><a href="#" class="link-primary" onclick="clickImportarAtores(this, '${planetas[i].residents[r]}');"><h5><span style="color: green;">Personagem: </span>${r + 1}</54></a>`;
        }
        resultado += `</ul>`;
    
    }
    resultado += "</ul>"

    $('#planetas').html(resultado);

}

function showModalAtor(){
    $('#modalAtor').modal('show')
}

function hideModalAtor(){
    $('#modalAtor').modal('hide')
}

$( document ).ready(function() {
    hideModalAtor();
    $('#msg_validacao').hide();
});

function clickLimparPlanetas() {
    imprimirPlanetas("");
    $('#pesquisar').val('');
    clickCloseAlert();
}


function clickPesquisar() {

    var filtro = $("#pesquisar").val().toUpperCase();
    var planetas = [];
    var x = 0;

    $.get( "https://swapi.dev/api/planets", function( data ) {
        for(var i = 0; i < data.results.length; i++){

            const planeta = data.results[i];

            if (planeta.name.toUpperCase().includes(filtro)) {
                planetas[x] = [];
                planetas[x].name = planeta['name'];
                planetas[x].residents = planeta['residents'];
                x++;
            }
        }

        imprimirPlanetas(planetas);

        if(filtro==""){
            $('#msg_html').html(`Você não pesquisou nenhum termo!`);
        } else {
            $('#msg_html').html(`Você pesquisou o termo: [${filtro}]!`);
        }

        $('#msg_validacao').show();

    });
}

function clickCloseAlert(){
    $('#msg_validacao').hide();
}


$(document).ready(function(){
    clickImportarPlanetas();
})