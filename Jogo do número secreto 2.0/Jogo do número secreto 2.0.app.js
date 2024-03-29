let tentativas=1
function exibirTexto(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
}
function limparCampo(tag) {
    preenchimento=document.querySelector(tag);
    preenchimento.value=' '; 
}
exibirTexto('h1','Bem-vindo ao jogo do número secreto');
exibirTexto('p','Escolha um número entre 1 e 100');
// funções são responsáveis por executar algo específico dentro do meu código
function gerarNumero() {
    return parseInt(Math.random() * 100 +1);
}
let numero= gerarNumero();
function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas==1? `1 tentativa`: `${tentativas} tentativas`;
        if (chute == numero) {
        console.log(`Você está com ${palavraTentativa}`);
        exibirTexto('h1','Acertou!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTexto('p',`Você descobriu o número secreto com ${palavraTentativa}`);
        } else {
            tentativas ++;
            limparCampo('input');
            console.log(`Você está com ${palavraTentativa}`);
            exibirTexto('h1','Você errou');
            console.log(`Só pra avisar, o número secreto é ${numero} e não ${chute}`);
            if (chute > numero) {
                exibirTexto('p',`O número secreto é menor que `+chute);
            } else {
                exibirTexto('p',`O número secreto é maior que `+chute) ;
            }
    }
}    
function reiniciarJogo(){
    limparCampo('input');
    exibirTexto('h1','Bem-vindo ao jogo do número secreto');
    exibirTexto('p','Escolha um número entre 1 e 100');
    tentativas=1;
    numero=gerarNumero();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}   
