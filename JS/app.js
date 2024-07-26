document.addEventListener('DOMContentLoaded', () => {
    // Botões principais para mostrar inputs
    const botao1 = document.querySelector('.primeiroBotao');
    botao1.addEventListener('click', mostrarCalculo);

    const botao2 = document.querySelector('.segundoBotao');
    botao2.addEventListener('click', mostrarCalculo2);

    const botao3 = document.querySelector('.terceiroBotao');
    botao3.addEventListener('click', mostrarCalculo3);

    const botao4 = document.querySelector('.quartoBotao');
    botao4.addEventListener('click', mostrarCalculo4);
});

function mostrarCalculo() {
    // Cria os elementos se ainda não existirem
    if (!document.querySelector('.numeros')) {
        criarInputsEBotoes('primeiroInput', 'numeros', 'numeros2', 'Somar', 'somarInputs', 'resposta');
    } else {
        // Se os inputs já existem, apenas mostra-os
        toggleElementos(
            Array.from(document.querySelectorAll('#primeiroInput input, #primeiroInput button, #primeiroInput .esconder'))
        );
    }
}

function mostrarCalculo2() {
    if (!document.querySelector('.numeros3')) {
        criarInputsEBotoes('terceiroInput', 'numeros3', 'numeros4', 'Subtrair', 'subtrairInputs', 'resposta2');
    } else {
        toggleElementos(
            Array.from(document.querySelectorAll('#terceiroInput input, #terceiroInput button, #terceiroInput .esconder'))
        );
    }
}

function mostrarCalculo3() {
    if (!document.querySelector('.numeros5')) {
        criarInputsEBotoes('quintoInput', 'numeros5', 'numeros6', 'Dividir', 'dividirInputs', 'resposta3');
    } else {
        toggleElementos(
            Array.from(document.querySelectorAll('#quintoInput input, #quintoInput button, #quintoInput .esconder'))
        );
    }
}

function mostrarCalculo4() {
    if (!document.querySelector('.numeros7')) {
        criarInputsEBotoes('setimoInput', 'numeros7', 'numeros8', 'Multiplicar', 'multiplicarInputs', 'resposta4');
    } else {
        toggleElementos(
            Array.from(document.querySelectorAll('#setimoInput input, #setimoInput button, #setimoInput .esconder'))
        );
    }
}

function criarInputsEBotoes(inputId, classInput1, classInput2, textoBotao, funcaoBotao, respostaId) {
    const inputContainer1 = document.getElementById(inputId);
    
    // Cria e adiciona o primeiro input
    const input1 = document.createElement('input');
    input1.classList.add(classInput1);
    input1.placeholder = 'Digite os números aqui';
    inputContainer1.appendChild(input1);
    
    // Cria e adiciona o segundo input
    const input2 = document.createElement('input');
    input2.classList.add(classInput2);
    input2.placeholder = 'Digite os números aqui';
    inputContainer1.appendChild(input2);
    
    // Cria e adiciona o botão
    const botao = document.createElement('button');
    botao.textContent = textoBotao;
    botao.classList.add('botaodeSoma');
    botao.addEventListener('click', window[funcaoBotao]);
    inputContainer1.appendChild(botao);
    
    // Cria e adiciona o botão Esconder
    const esconderBotao = document.createElement('button');
    esconderBotao.textContent = 'Esconder';
    esconderBotao.classList.add('esconder');
    esconderBotao.addEventListener('click', () => {
        toggleElementos([input1, input2, botao, esconderBotao]);
    });
    inputContainer1.appendChild(esconderBotao);
}

function toggleElementos(elementos) {
    elementos.forEach(elemento => {
        if (elemento.style.display === 'none') {
            elemento.style.display = '';
        } else {
            elemento.style.display = 'none';
        }
    });
}

function somarInputs() {
    const valor1 = parseFloat(document.querySelector('.numeros').value);
    const valor2 = parseFloat(document.querySelector('.numeros2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    const soma = valor1 + valor2;
    const respostaContainer = document.getElementById('resposta');
    respostaContainer.textContent = 'A soma é: ' + soma;
}

function subtrairInputs() {
    const valor3 = parseFloat(document.querySelector('.numeros3').value);
    const valor4 = parseFloat(document.querySelector('.numeros4').value);

    if (isNaN(valor3) || isNaN(valor4)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    const subtrair = valor3 - valor4;
    const respostaContainer = document.getElementById('resposta2');
    respostaContainer.textContent = 'A subtração é: ' + subtrair;
}

function dividirInputs() {
    const valor5 = parseFloat(document.querySelector('.numeros5').value);
    const valor6 = parseFloat(document.querySelector('.numeros6').value);

    if (isNaN(valor5) || isNaN(valor6)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    if (valor6 === 0) {
        alert('Divisão por zero não é permitida.');
        return;
    }

    const dividir = valor5 / valor6;
    const respostaContainer = document.getElementById('resposta3');
    respostaContainer.textContent = 'A divisão é: ' + dividir;
}

function multiplicarInputs() {
    const valor7 = parseFloat(document.querySelector('.numeros7').value);
    const valor8 = parseFloat(document.querySelector('.numeros8').value);

    if (isNaN(valor7) || isNaN(valor8)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    const multiplicar = valor7 * valor8;
    const respostaContainer = document.getElementById('resposta4');
    respostaContainer.textContent = 'A multiplicação é: ' + multiplicar;
}
