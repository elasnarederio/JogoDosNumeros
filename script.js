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