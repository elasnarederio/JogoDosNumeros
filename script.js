let numeroSecreto;
let tentativas = 0;

function gerarNumeroAleatorio(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            //Gera um número de 1 até 100
            numeroSecreto = Math.floor(Math.random()*100) + 1;
            resolve(numeroSecreto);
        }, 2000);
    });
}

function verificarPalpite(palpite){
    return new Promise((resolve, reject) => {
        tentativas++;
        if(palpite < 1 || palpite >100){
            reject("Por favor, digite um número entre 1 e 100");
        }else if(palpite === numeroSecreto){
            resolve("Parabéns! Você acertou o número!");
        }else if(palpite < numeroSecreto){
            resolve("Muito baixo! Jogue novamente!");
        }else {
            resolve("Muito alto! Jogue novamente!");
        }
    });
}

async function iniciarJogo(){
    await gerarNumeroAleatorio();
    const botaoEnviar = document.getElementById("enviar");
    const inputPalpite = document.getElementById("palpite");
    const resultado = document.getElementById("resultado");
    const tentativasDisplay = document.getElementById("tentativas");
}