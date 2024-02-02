/**
 * blok odpowiadający za wywyłanie fukcji przyjmującej jako argument tekst atrybutu alt w znaczniku img
 * następnie następuje przekierowanie na stronę z quizem wraz z podaniem numeru quizu
 */

document.addEventListener("DOMContentLoaded", function () { //ustawnie sułachacza reagującego kiedy cała strona jest załadowana
    var quizPanel = document.querySelector('.menuquizpanel');
    quizPanel.addEventListener('click', function (event) { //ustawienie słuchacza reagujacego na kliknięcia
        var target = event.target;
        if (target.tagName === 'IMG') { //jeśli cel to obraz wywołaj funkcje getQuizNumber...
            var option = target.alt.toLowerCase(); //numer quizu wybierany jest poprzez sprawdzenie atrybutu alt w img
            var quizNumber = getQuizNumber(option);
            window.location.href = '../Pages/quiz.html?quizNumber=' + quizNumber;//... i przenieś na stronę quiz.html przekazując numer wybranego quizu
        }
    });

/**
 * @function getQuizNumber()
 * funkcja zwracająna numer w zależnosci od atrybutu alt w znaczniku img
 * @param {String} option - text z artybutu alt znacznika img
 * @returns {Number}
 * 
 * @example
 * getQuizNumber('uk') zwróci wartość 1
 * 
 * @example
 * getQuizNumber('a') zwróci wartość -1
 */

    function getQuizNumber(option) { //funkcja przyjmująca jako argument string odpowiadający alt w danym img
        switch (option) {
            case 'uk':
                return 1;
            case 'sp':
                return 2;
            case 'ge':
                return 3;
            case 'fr':
                return 4;
            case 'it':
                return 5;
            default:
                return -1;
        }
    }
});
