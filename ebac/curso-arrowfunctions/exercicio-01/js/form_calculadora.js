// FORMULÁRIO 1:------------------------------
const media = (p_soma, p_notas) => p_soma / p_notas.length;
const condicao = (p_media) => p_media >= 8 ? "aprovado" : "reprovado";
const proximoNumero = (p_numero) => p_numero - 1;
const todosPreenchidos = (n1, n2, n3, n4) => n1!="" && n2!="" && n3!="" && n4!=""; 
const validacaoTodosPreenchidos = (todosNumerosPreenchidos) => {
    if( !todosNumerosPreenchidos ) {
        document.getElementById('resultado-frm1').innerHTML = "• Necessário preencher todos os campos";
        return false;
    }
    return true;
}
const converteNumero = (dado) =>  dado.match(/\d*/) ? Number(dado) : 0;
const calcularMedia = ( notas ) => { m_soma = 0; notas.forEach( nota => m_soma += nota ); return media(m_soma, notas); }
const aprovacao = ( notas ) => { return 'Média: ' + calcularMedia( notas ) + ' - Resultado: ' + condicao(calcularMedia(notas)); }

const contagemRegressiva = (numero) => { if(proximoNumero > 0) contagemRegressiva( proximoNumero(numero) ) };


/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        const todosNumerosPreenchidos = todosPreenchidos(
                document.getElementsByClassName('n1'), 
                document.getElementsByClassName('n2'),
                document.getElementsByClassName('n3'),
                document.getElementsByClassName('n4'));


        validacaoTodosPreenchidos(todosNumerosPreenchidos);
        
        const dados = new FormData(this);

        const notas = [];

        for(let key of dados.keys()) {
            const numero = converteNumero(dados.get(key));
            if(!isNaN(numero)) {
                notas.push(numero);
            }
        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado-frm1').innerHTML = texto;

    });

