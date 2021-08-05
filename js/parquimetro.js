function salvarPlaca(event){
    event.preventDefault();
    let placaIn = document.querySelector("#placaIn");
    let placa = placaIn.value;

    if(placa){ //Verifica se uma placa foi inserida
        localStorage.setItem("placa",placa);
        return true; //indicia que a placa foi salva
    }
    return false; //Indica que a placa não foi salva
}

//Recebe um valor e calcula o tempo reservado
function calculaTempo(valorPago) { 
    let tempo = 0;
    
    if(valorPago < 1){
        return tempo;
    }else if(valorPago < 1.75){
        return tempo = 30;
    }else if(valorPago < 3){
        return tempo = 60;
    }else{
        return tempo = 120;
    }
}

//Recebe um valor e calcula o troco
function calculaTroco(valorPago){
    let troco = 0;
    
    if(valorPago < 1.75){
        return troco = valorPago - 1;
    }else if(valorPago < 3){
        return troco = valorPago - 1.75;
    }else{
        return troco = valorPago - 3;
    }
}

function mostraTicket(event){
    event.preventDefault();
    let valorIn = document.querySelector("#valorIn");
    let valorPago = valorIn.value;
    let ticketResultado = document.querySelector(".ticket-resultado");

    //Limpando HTML e localStorage
    ticketResultado.textContent = "";
    localStorage.clear();

    //Verifica se a placa foi salva
    if(!salvarPlaca(event)){ 
        ticketResultado.textContent = "Digite uma placa !";
        placaIn.focus();
        return;
    }

    //calcula o tempo
    let tempo = calculaTempo(valorPago);

    if(tempo == 0){ //Se não tiver tempo reservado, significa que o valor é insuficiente
        ticketResultado.textContent = "Valor insuficiente";
        valorIn.focus();
        return;
    }else{
        //Após validar o tempo, verifica se há troco
        let troco = calculaTroco(valorPago);
        if (troco == 0){
            ticketResultado.textContent = "Você tem " + tempo + " minutos de estacionamento";
        }else{
            ticketResultado.innerHTML = "Você tem " + tempo + " minutos de estacionamento" + "<br>"+
                                            "Seu troco é R$ " + troco.toFixed(2);
        }
        localStorage.setItem("tempo",tempo);
    }  
}

let botaoEnviar = document.getElementById("botao-enviar");
botaoEnviar.addEventListener("click",mostraTicket);