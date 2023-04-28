// Alerta de boas-vindas
function exibirAlertaBemVindo() {
  alert('Bem-vindo!');
}

// Alerta de boa sorte
function exibirAlertaBoaSorte() {
  alert('Vamos conhecer sobre vinho!');
}

// Verifica o título da página e exibe o alerta correspondente
document.addEventListener('DOMContentLoaded', function () {
  if (document.title === 'Vinhacity') {
    exibirAlertaBemVindo();
  } else if (document.title === 'Quiz') {
    exibirAlertaBoaSorte();
  }
});

var perguntas = [
  {
    pergunta: "Qual país é conhecido por produzir Champagne?",
    respostaCorreta: "França",
    respostaErrada: "Itália"
  },
  {
    pergunta: "Qual uva é utilizada para produzir o vinho tinto Cabernet Sauvignon?",
    respostaCorreta: "Cabernet Sauvignon",
    respostaErrada: "Chardonnay"
  },
  {
    pergunta: "Qual é o nome da taça usada para degustar vinhos tintos?",
    respostaErrada: "Taça Champagne",
    respostaCorreta: "Taça Bordeaux"
  },
  {
    pergunta: "Qual dessas regiões é famosa pela produção de vinhos espumantes?",
    respostaErrada: "Napa Valley",
    respostaCorreta: "Prosecco"
  },
  {
    pergunta: "Qual é o principal componente do vinho?",
    respostaCorreta: "Álcool",
    respostaErrada: "Água"
  },
  {
    pergunta: "O vinho branco é produzido a partir de uvas:",
    respostaCorreta: "Brancas",
    respostaErrada: "Pretas"
  },
  {
    pergunta: "Qual é o teor alcoólico médio de um vinho tinto seco?",
    respostaErrada: "5%",
    respostaCorreta: "13%"
  },
  {
    pergunta: "Qual é o país de origem da uva Malbec?",
    respostaErrada: "Espanha",
    respostaCorreta: "Argentina"
  },
  {
    pergunta: "Qual é o nome dado ao processo de envelhecimento do vinho em barris de carvalho?",
    respostaCorreta: "Maturação",
    respostaErrada: "Fermentação"
  },
  {
    pergunta: "Qual é a região francesa famosa por seus vinhos tintos de alta qualidade?",
    respostaErrada: "Toscana",
    respostaCorreta: "Bordeaux"
  },
];

var perguntaAtual = 0;
var acertos = 0;
var erros = 0
var perguntasErradas = [];

// Função para exibir a pergunta atual
function exibirPergunta() {
  var perguntaElement = document.getElementById('pergunta');
  var botoesElement = document.getElementById('botoes');
  var respostaCorreta = perguntas[perguntaAtual].respostaCorreta;
  var respostaErrada = perguntas[perguntaAtual].respostaErrada;

  perguntaElement.textContent = perguntas[perguntaAtual].pergunta;

  botoesElement.innerHTML = '';

  // Gera um número aleatório para decidir a posição das alternativas
  var randomPosition = Math.floor(Math.random() * 2);

  if (randomPosition === 0) {
    var botaoCorreto = document.createElement('button');
    botaoCorreto.textContent = respostaCorreta;
    botaoCorreto.classList.add('button');
    botaoCorreto.onclick = function () {
      verificarResposta(true);
    };
    botoesElement.appendChild(botaoCorreto);

    var botaoErrado = document.createElement('button');
    botaoErrado.textContent = respostaErrada;
    botaoErrado.classList.add('button');
    botaoErrado.onclick = function () {
      verificarResposta(false);
    };
    botoesElement.appendChild(botaoErrado);
  } else {
    var botaoErrado = document.createElement('button');
    botaoErrado.textContent = respostaErrada;
    botaoErrado.classList.add('button');
    botaoErrado.onclick = function () {
      verificarResposta(false);
    };
    botoesElement.appendChild(botaoErrado);

    var botaoCorreto = document.createElement('button');
    botaoCorreto.textContent = respostaCorreta;
    botaoCorreto.classList.add('button');
    botaoCorreto.onclick = function () {
      verificarResposta(true);
    };
    botoesElement.appendChild(botaoCorreto);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  exibirPergunta();
});

// Função para verificar a resposta selecionada
function verificarResposta(respostaCorreta) {
  if (respostaCorreta) {
    acertos++;
  } else {
    erros++;
    perguntasErradas.push(perguntas[perguntaAtual].pergunta);
  }

  perguntaAtual++;

  if (perguntaAtual === perguntas.length) {
    // Fim do quiz
    exibirResultado();
  } else {
    exibirPergunta();
  }
}

// Função para exibir o resultado final
function exibirResultado() {
  var perguntaContainerElement = document.getElementById('pergunta-container');
  perguntaContainerElement.innerHTML = '';

  var resultadoElement = document.createElement('h2');
  resultadoElement.textContent = 'Quiz finalizado! Resultado:';
  perguntaContainerElement.appendChild(resultadoElement);

  var acertosElement = document.createElement('p');
  acertosElement.textContent = 'Acertos: ' + acertos;
  perguntaContainerElement.appendChild(acertosElement);

  var errosElement = document.createElement('p');
  errosElement.textContent = 'Erros: ' + erros;
  perguntaContainerElement.appendChild(errosElement);

  if (perguntasErradas.length > 0) {
    var perguntasErradasElement = document.createElement('div');
    var tituloErradasElement = document.createElement('h3');
    tituloErradasElement.textContent = 'Perguntas incorretas:';
    perguntasErradasElement.appendChild(tituloErradasElement);
    var listaErradasElement = document.createElement('ul');
    for (var i = 0; i < perguntasErradas.length; i++) {
    var itemElement = document.createElement('li');
    var perguntaErrada = perguntasErradas[i];
    var respostaCorreta = perguntas.find(pergunta => pergunta.pergunta === perguntaErrada).respostaCorreta;
    itemElement.textContent = perguntaErrada + ' (Resposta correta: ' + respostaCorreta + ')';
    listaErradasElement.appendChild(itemElement);
    }
    perguntasErradasElement.appendChild(listaErradasElement);
    perguntaContainerElement.appendChild(perguntasErradasElement);
    }
    }
    
    document.addEventListener('DOMContentLoaded', function () {
    exibirPergunta();
    });
    
    //Formulario
    
    function validateForm() {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    
    // Verifica se todos os campos estão preenchidos
    if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || emailInput.value.trim() === '') {
    alert('Por favor, preencha todos os campos.');
    return false;
    }
    
    // Verifica se o email está no formato correto
    var emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
    alert('Por favor, insira um email válido.');
    return false;
    }
    
    // Se todas as validações passaram, o formulário é enviado
    alert('Formulário enviado com sucesso!');
    return true;
    }
    
    // Associa a função de validação ao evento submit do formulário
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    validateForm();
    });