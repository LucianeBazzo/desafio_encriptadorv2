const textoEntrada = document.querySelector(".texto-entrada");
const mensagem = document.querySelector(".texto-saida");
const botoes = document.querySelectorAll('button');

//funcao para identificar qual botao foi clicado
function criptografar(event) {
    
    const entrada = textoEntrada.value;
    const button = event.target;

    if (entrada === '') {
        return;
    }

    if (button.className === 'btn-criptografar') {
        mensagem.value = codificarMensagem(entrada, 0);
    } else {
        mensagem.value = codificarMensagem(entrada, 1);
    }

    textoEntrada.value = "";
    mensagem.style.backgroundImage = 'none';
    document.querySelector('.alerta-de-saida').innerHTML = '';

    alterarCorBotao(button)
}

//Funcao para alterar a cor do botão clicado.
function alterarCorBotao(btn) {

    botoes.forEach(botao => {
        botao.style.backgroundColor = '#6e9987';
        botao.style.color = '#e0e4ce';       
    });

    btn.style.backgroundColor = '#6e9987';
    btn.style.color = '#e0e4ce';
}

//Funcao para copiar a msg encriptada
function copiarMensagem(event){

    if (mensagem.value === '') {
        return;
    }

    navigator.clipboard.writeText(mensagem.value);
    mensagem.value = '';
    document.querySelector('.alerta-de-saida').innerHTML = 'Texto copiado para a área de transferêencia.';
    mensagem.style.backgroundRepeat = 'no-repeat';

    alterarCorBotao(event.target)
}

//Funcao para criptografar e descriptografar mensagem
function codificarMensagem(strMensagem, tipo) {
  
    strMensagem = strMensagem.toLowerCase();

    let matrizChaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    if (tipo == 1) {
        matrizChaves = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];      
    }

    for (let i = 0; i < matrizChaves.length; i++) {
        if (strMensagem.includes(matrizChaves[i][0])) {
            strMensagem = strMensagem.replaceAll(matrizChaves[i][0], matrizChaves[i][1]);
        }
        
    }

    return strMensagem;

}



