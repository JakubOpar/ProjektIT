/**
 * Deklaracja zmiennych
 * @type {Object}
 */
let QuestionsBase; //zmienna która będzie przechowywać baze pytań pobraną z pliku JSON
/**
 * @type {HTMLElement}
 */
var quizDiv = document.getElementById('generatedquiz');
/**
 * @type {HTMLElement}
 */
var resultsDiv = document.getElementById('results');
/**
 * @type {HTMLElement}
 */
var submitButton = document.getElementById('submit');

/**
 * Blok odpowiadający za przyjęcia numeru otrzymanego ze selectQuiz.js
 * W zależności od numeru zostaje wybrany odpowiedni plik .json.
 * Z niego zostaje pobrana baza pytań. 
 */

document.addEventListener("DOMContentLoaded", function () {
  var url = new URLSearchParams(window.location.search);
  var selectedQuiz = url.get('quizNumber'); //pobranie parametru numeru quizu wybranego w quizmenu.html i wybranie odpowiedniego pliku JSON oraz wywołanie metody generateQuiz
  if (selectedQuiz == 1) {
    fetch('../Scripts/Jsons/questionseng.json')
      .then(response => response.json())
      .then(data => {
        QuestionsBase = data.questions;
        console.log("Wszystkie pytania:", QuestionsBase);
        generateQuiz(QuestionsBase, quizDiv, resultsDiv, submitButton);
      })
      .catch(error => console.error('Błąd pobierania danych:', error));
  }

  if (selectedQuiz == 2) {
    fetch('../Scripts/Jsons/questionssp.json')
      .then(response => response.json())
      .then(data => {
        QuestionsBase = data.questions;
        console.log("Wszystkie pytania:", QuestionsBase);
        generateQuiz(QuestionsBase, quizDiv, resultsDiv, submitButton);
      })
      .catch(error => console.error('Błąd pobierania danych:', error));
  }

  if (selectedQuiz == 3) {
    fetch('../Scripts/Jsons/questionsge.json')
      .then(response => response.json())
      .then(data => {
        QuestionsBase = data.questions;
        console.log("Wszystkie pytania:", QuestionsBase);
        generateQuiz(QuestionsBase, quizDiv, resultsDiv, submitButton);
      })
      .catch(error => console.error('Błąd pobierania danych:', error));
  }

  if (selectedQuiz == 4) {
    fetch('../Scripts/Jsons/questionsfr.json')
      .then(response => response.json())
      .then(data => {
        QuestionsBase = data.questions;
        console.log("Wszystkie pytania:", QuestionsBase);
        generateQuiz(QuestionsBase, quizDiv, resultsDiv, submitButton);
      })
      .catch(error => console.error('Błąd pobierania danych:', error));
  }

  if (selectedQuiz == 5) {
    fetch('../Scripts/Jsons/questionsit.json')
      .then(response => response.json())
      .then(data => {
        QuestionsBase = data.questions;
        console.log("Wszystkie pytania:", QuestionsBase);
        generateQuiz(QuestionsBase, quizDiv, resultsDiv, submitButton);
      })
      .catch(error => console.error('Błąd pobierania danych:', error));
  }
});

/**
 * @function generateQuiz()
 * funkcja odpowiadająca za wygenerowanie quizu
 * @param {Object} questions - baza pytań w formie tablicy pobrana z pliku Json.
 * @param {HTMLElement} quizContainer - div w którym ma zostać wygenerowany quiz.
 * @param {HTMLElement} resultsContainer - div w którym wyświetlany jest wynik quizu.
 * @param {HTMLElement} submitButton - przycisk odpowiadający za zatwierdzenie odpowiedzi
 */

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) { //Funkcja generująca quiz
  showQuestions(questions, quizContainer);
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  }
}

/**
 * @function showQuestions()
 * funkcja odpowiadająca za wyświetlenie pytań
 * @param {Object} questions - baza pytań w formie tablicy
 * @param {HTMLElement} quizContainer - div w którym ma zostać wygenerowany quiz.
 */

function showQuestions(questions, quizContainer) { //funkcja pokazująca pytania
  var output = [];
  var answers;

  for (var i = 0; i < questions.length; i++) { //przygotowanie odpowiedzi dla każdego pytania
    answers = [];
    for (letter in questions[i].answers) {
      answers.push(
        '<label>'
        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
        + letter + ': '
        + questions[i].answers[letter]
        + '</label>'
        + '<br>'
      );
    }
    output.push( //wygenerowanie i dodanie gotowego pytania.
      '<div class="Qcontainer"><div class="question">'+(i+1)+'. '+ questions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div></div>'
    );
  }
  quizContainer.innerHTML = output.join('');
}

/**
 * @function showResults()
 * funkcja odpowiadająca za wyswietlenie wyników quizu
 * @param {Object} questions - baza pytań w formie tablicy
 * @param {HTMLElement} quizContainer - div w którym ma zostać wygenerowany quiz.
 * @param {HTMLElement} resultsContainer - div w którym zostaną pokazane wyniku quizu.
 */

function showResults(questions, quizContainer, resultsContainer) { //funkcja pokazująca rezultat

  var answerContainers = quizContainer.querySelectorAll('.answers');
  var selectedAnswer = '';
  var correctCount = 0; //zmienna przechowywująca liczbe odpowiedzi

  var container = document.getElementsByClassName('Qcontainer');
  var questionField = document.getElementsByClassName('question');

  for (var i = 0; i < questions.length; i++) {
    selectedAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value; //wyszukiwanie zaznaczonej odpowiedzi
    if (selectedAnswer === questions[i].correctAnswer) {
      correctCount++; //jeśli poprawna zwiększ liczbe dobrych odpowiedzi i zmień kolor borderu danego pytania na lime
      container[i].style.borderColor = "lime";
      questionField[i].style.borderBottomColor = "lime";
      questionField[i].style.color = "lime";
    }
    else { //w przeciwnym przypadku zmień na czerwony i wypisz prawidłową odpowiedź
      container[i].style.borderColor = "red";
      questionField[i].style.borderBottomColor = "red";
      questionField[i].style.color = "red";
      questionField[i].innerHTML = questions[i].question + " (Prawidłowa odpowiedź: " + questions[i].correctAnswer + ")";
    }
  }

  resultsContainer.innerHTML = 'Zdobyto ' + correctCount + ' punktów z ' + questions.length + ' punktów.'; //wypisanie końcowe sumy zdobytych punktów
  var resultdiv = document.querySelector('#results');
  var circleDiv = document.createElement('div');

  //wypisanie odpowiedniego poziomu w zależności od ilości zdobytych punktów

  if (correctCount === 0) {
    circleDiv.classList.add('minicircle1');
    circleDiv.textContent = "Brak";
  }
  if (correctCount >= 1 && correctCount < 3) {
    circleDiv.classList.add('minicircle1');
    circleDiv.textContent = "A1";
  }
  if (correctCount >= 3 && correctCount < 6) {
    circleDiv.classList.add('minicircle2');
    circleDiv.textContent = "B2";
  }
  if (correctCount >= 6 && correctCount < 9) {
    circleDiv.classList.add('minicircle3');
    circleDiv.textContent = "C1";
  }
  if (correctCount >= 9 && correctCount <= 12) {
    circleDiv.classList.add('minicircle4');
    circleDiv.textContent = "C2";
  }
  resultsContainer.style.border = "2px solid var(--cfont)"
  resultdiv.appendChild(circleDiv);
}