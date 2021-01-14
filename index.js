var btnInc = document.getElementById('inc');
var btnDec = document.getElementById('dec');

var btnReset = document.getElementById('rst');

var correctText = document.getElementById('correct');
var wrongText = document.getElementById('wrong');

const rulesMessage = document.getElementById('rules');

var winningMessage = document.getElementById('winning-message');

var counterText = document.getElementById('counter-text');

var counter = 0;
var correctAnswers = 0;
var wrongAnswers = 0;

counterText.textContent = counter;

btnInc.addEventListener('click', function () {
  counter++;

  checkCounterTens(counter);

  resetStateWhenCounterMax();

  counterText.textContent = counter;
});

btnDec.addEventListener('click', function () {
  counter--;

  disableDecButtonWhenCounterMax();

  counterText.textContent = counter;

  if (counter === -1 || counter < -1) {
    counter = -1;
    return (counterText.textContent = "You can't go down anymore");
  }
});

function resetStateWhenCounterMax() {
  if (counter === 101) {
    resetDefaultStyles();
  }
}

function disableDecButtonWhenCounterMax() {
  if (counter === 100) {
    btnDec.disabled = true;
  }
}

function checkCounterTens(counter) {
  if (
    counter === 10 ||
    counter === 20 ||
    counter === 30 ||
    counter === 40 ||
    counter === 50 ||
    counter === 60 ||
    counter === 70 ||
    counter === 80 ||
    counter === 90 ||
    counter === 100
  ) {
    var firstNumber = Math.trunc(Math.random() * 10) + 1;
    var secondNumber = Math.trunc(Math.random() * 10) + 1;

    var answer = firstNumber + secondNumber;

    var userAnswer = prompt(`What is ${firstNumber} + ${secondNumber}`);

    if (counter === 100) {
      correctText.textContent = '';
      wrongText.textContent = '';
      rulesMessage.textContent = '';
      winningMessage.textContent = "you've won the game!".toUpperCase();
      winningMessage.style.color = 'green';
      return;
    }

    if (Number(userAnswer) === answer) {
      alert('Correct!');
      correctAnswers++;
      correctText.textContent = `Correct answers: ${correctAnswers}`;
    } else {
      alert('Incorrect!');
      wrongAnswers++;
      restartGameIfAnswerIncorrect();
      wrongText.textContent = `Wrong answers: ${wrongAnswers}`;
    }
  }
}

function restartGameIfAnswerIncorrect() {
  counter = 0;
  correctAnswers = 0;
  winningMessage.textContent =
    'For every 10 points, you must answer a mathematic question, Max is 100';
  correctText.textContent = `Correct answers: ${correctAnswers}`;
  counterText.textContent = counter;
}

function resetDefaultStyles() {
  counter = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  winningMessage.textContent =
    'For every 10 points, you must answer a mathematic question, Max is 100';
  correctText.textContent = `Correct answers: ${correctAnswers}`;
  wrongText.textContent = `Wrong answers: ${wrongAnswers}`;
  counterText.textContent = counter;
}

btnReset.addEventListener('click', function () {
  resetDefaultStyles();
});
