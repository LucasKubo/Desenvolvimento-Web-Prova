function pessoa(nome,cpf,dataNasc){
    this.nome = nome;
    this.cpf = cpf;
    this.dataNasc = dataNasc;
}

function calculaIdade(dataNasc){
    let anoAtual = new Date().getFullYear();
    let mesAtual = new Date().getMonth() + 1;

    // Pegando partes da string que representa cada variavel (dia, mes, ano) -- obs
    let anoNasc = dataNasc.slice(0,4);
    let mesNasc = dataNasc.slice(5,7);
    let diaNasc = dataNasc.slice(8,10);

    let idade = anoAtual - anoNasc;

    if(mesAtual < mesNasc){
        idade--;
        return idade;
    }

    if(mesAtual == mesNasc){ 
        if(new Date().getDate() < diaNasc ){ 
            idade--; 
            return idade;
        }
    }

    return idade;
}

function mostrarDados(event){
    event.preventDefault();
    //referência aos elementos da página
    let nomeIn = document.querySelector("#nomeIn");
    let cpfIn = document.querySelector("#cpfIn");
    let dataNascIn = document.querySelector("#dataNascIn");
    let nomeOut = document.querySelector("#nomeOut");
    let cpfOut = document.querySelector("#cpfOut");
    let dataNascOut = document.querySelector("#dataNascOut");
    
    //Limpando HTML
    nomeOut.textContent = "";
    cpfOut.textContent = "";
    dataNascOut.textContent = "";

    //Atribuindo valores dos elementos
    nome = nomeIn.value;
    cpf = cpfIn.value;
    dataNasc = dataNascIn.value;

    //Verificando se tudo foi preenchido
    if(nome==""){
        nomeOut.textContent = "Coloque um nome !"
        nomeIn.focus();
        return;
    }
    if(cpf == "" ){
        cpfOut.textContent = "Coloque um cpf !"
        cpfIn.focus();
        return;
    }
    if(dataNasc == ""){
        dataNascOut.textContent = "Coloque a data de nascimento"
        dataNascIn.focus();
        return;
    }

    //Criando objeto
    let usuario = new pessoa(nome,cpf,dataNasc);
    let idade = calculaIdade(usuario.dataNasc);

    //Exibindo os dados
    nomeOut.textContent = "Nome: " + usuario.nome;
    cpfOut.textContent = "CPF: " + usuario.cpf;
    dataNascOut.textContent = "Idade: " + idade;
}
let botaoCadastro = document.querySelector("#botaoCadastro");
botaoCadastro.addEventListener('click',mostrarDados)