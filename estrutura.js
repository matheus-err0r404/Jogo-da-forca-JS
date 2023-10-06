// Lista de palavras para o jogo
var word = String
var words = ["programacao", "site", "javascript", "codigo", "python", "github", "algoritmo", "funcao", "software", "variavel", "linguagem", "biblioteca", "objeto", "depuracao", "internet", "nuvem", "smartphone", "robotica", "aplicativos", "ciberataque", "automacao", "ptocessador"];

// Escolha aleatória de uma palavra
var word = words[Math.floor(Math.random() * words.length)].toLowerCase();

// Número máximo de tentativas
var maxGuesses = 7;

// Inicialização do jogo
var guesses = [];
var remainingGuesses = maxGuesses;


// Mostra uma mensagem de vitória
var gameWon = false;
var correctLetter = false;
// Mostra a palavra como _ _ _ _ _ no início do jogo
var displayWord = "";
for (var i = 0; i < word.length; i++) {
  displayWord += "_ ";
}
document.getElementById("word").textContent = displayWord;

// Função para atualizar a tela com as letras adivinhadas corretamente

setTimeout(function() {
  location.reload();
}, 2000);

function updateWord() {
  var numCorrect = 0;
  for (var i = 0; i < word.length; i++) {
    if (guesses.indexOf(word[i]) >= 0) {
      numCorrect++;
    }
  }

if (numCorrect === word.length) {
    gameWon = true;
    var playAgain = confirm("É teetraa! Você ganhou!Deseja jogar novamente?");
    if (playAgain){
      location.reload();
    } else {
    var thankYou = alert("Obrigado Por Jogar!");
    }
} 
var gameLost = false;  


if (remainingGuesses === 0) { 
    gameLost = true;
    alert("Você perdeu! A palavra era: " + word);
    var playAgain = confirm("Deseja jogar novamente?");
    if (playAgain){
      location.reload();
    } else {
    var thankYou = alert("Obrigado Por Jogar!");
    }
}
 

  var displayWord = "";
  for (var i = 0; i < word.length; i++) {
    if (guesses.indexOf(word[i]) >= 0) {
      displayWord += word[i] + " ";
    } else {
      displayWord += "_ ";
    }
  }
  document.getElementById("word").textContent = displayWord;
}

// Função para atualizar a tela com as letras já utilizadas
function updateLetters() {
  document.getElementById("letters").textContent = "Letras que voce tentou: " + guesses.join(", ");
}

// Função para atualizar a tela com o número de tentativas restantes
function updateGuesses() {
  document.getElementById("guesses").textContent = "Tentativas restantes: " + remainingGuesses;
}

// Função para verificar se a letra inserida pelo usuário está na palavra

function guess() {
  var letter = document.getElementById("letter").value.toLowerCase();

  if (!/^[a-z]$/.test(letter)) {
    alert("Digite apenas uma letra válida.");
  } else if (guesses.indexOf(letter) >= 0) {
    alert("Você já usou essa letra. Tente outra.");
  } else {
    if (word.indexOf(letter) >= 0) {
      // A letra está na palavra, mas não diminua o número de tentativas.
      correctLetter = true;
    } else {
      remainingGuesses--;

    }

    guesses.push(letter);
    document.getElementById("letter").value = "";

    updateLetters();
    updateWord();
    updateGuesses();
  }
}  
   
// Inicialização da tela
updateLetters();
updateGuesses();

// Adiciona um evento ao campo de entrada para processar a tentativa quando Enter for pressionado

document.getElementById("letter").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // Verifica se a tecla pressionada é Enter (código 13)
    event.preventDefault(); // Impede o comportamento padrão (atualizar a página)
    guess(); // Chama a função guess quando o Enter é pressionado
  }
});



// Adiciona um evento ao botão para processar a tentativa
document.getElementById("guess-button").addEventListener("click", guess);










