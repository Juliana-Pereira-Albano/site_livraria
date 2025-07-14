//1- Usuário clica no botão whatsapp - executa função showMessage()
function showMessage() {
    var divMessage = document.getElementById('whats-message')
    //2- Verifica se a propriedade display tem valor none element.style.display
    if(divMessage.style.display == 'none'){
        //3- Se valor for none, modifica para block 
        divMessage.style.display = 'block'
    }else{
         //4- Caso contrário (valor está em block), modifica para none
        divMessage.style.display = 'none';
    }
}
//O termo divMessage representa tudo isso 


