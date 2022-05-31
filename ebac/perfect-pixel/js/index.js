function enviarForm(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    

    if(nome.length==0 || email.length==0 || mensagem.length==0 ){
        document.getElementById("msg_validcao_sucesso").style.visibility = "hidden";
        document.getElementById("msg_validcao_erro").style.visibility = "visible";
    } else {
        document.getElementById("msg_validcao_sucesso").style.visibility = "visible";
        document.getElementById("msg_validcao_erro").style.visibility = "hidden";
    }
}