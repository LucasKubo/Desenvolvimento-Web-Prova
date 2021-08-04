function salvarPlaca(event){
    event.preventDefault();
    let placaIn = document.querySelector("#placaIn");
    let placa = placaIn.value;

    if(placa == ""){ //Verifica se uma placa foi inserida
        return false; //Indica que a placa não foi salva
    }

    localStorage.setItem("placa",placa);
    let placaSalva = localStorage.getItem("placa");
    return true; //Indica que a placa foi salva
}

function calculaTicket(event) {
    event.preventDefault();
    let valorIn = document.querySelector("#valorIn");
    let tempoOut = document.querySelector(".tempoOut");
    let trocoOut = document.querySelector(".trocoOut");
    let placaOut = document.querySelector(".placaOut")

    let valorPago = Number(valorIn.value);
    let troco = 0;
    let tempo = 0;

    tempoOut.textContent = "";
    trocoOut.textContent = "";
    placaOut.textContent = "";

    if(!salvarPlaca(event)){ //Verifica se a placa foi salva
        placaOut.textContent = "Digite uma placa !";
        placaIn.focus();
        return;
    }

    if(isNaN(valorPago)){
        tempoOut.textContent = "Valor inválido";
        valorIn.focus();
        return;
    }
    if(valorPago < 1){
        tempoOut.textContent = "Valor insuficiente";
        valorIn.focus();
        return;
    }else if(valorPago < 1.75){
        tempo = 30;
        troco = valorPago - 1;
        tempoOut.textContent = "Você tem " + tempo + " minutos de estacionamento";
        if (troco != 0){
            trocoOut.textContent = "Seu troco é R$ " + troco.toFixed(2);
        }
    }else if(valorPago < 3){
        tempo = 60;
        troco = valorPago - 1.75;
        tempoOut.textContent = "Você tem " + tempo + " minutos de estacionamento";
        if (troco != 0){
            trocoOut.textContent = "Seu troco é R$ " + troco.toFixed(2);
        }
    }else{
        tempo = 120;
        troco = valorPago - 3;
        tempoOut.textContent = "Você tem " + tempo + " minutos de estacionamento";
        if (troco != 0){
            trocoOut.textContent = "Seu troco é R$ " + troco.toFixed(2);
        }
    }
    localStorage.setItem("tempo",tempo);
}

let botaoEnviar = document.getElementById("botao-enviar");
botaoEnviar.addEventListener("click",calculaTicket);