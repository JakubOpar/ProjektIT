/**
 * @function toggleFAQAnswer()
 * funkcja przełączająca styl display między none a block
 * @param {HTMLElement} clickedElement - kliknięty element
 */
function toggleFAQAnswer(clickedElement) {//funkcja przyjmuje jako argument kliknięty element
    var FAQanswer = clickedElement.querySelector('.FAQanswer');
    FAQanswer.style.display = (FAQanswer.style.display === 'block') ? 'none' : 'block'; // przełączenie właściwości display między none a block
}
/**
 * block odpowiadający za znalezienie elemntu klikniętego i wywołaniu na nim funkcji toggleFAQAnswer
 */
document.addEventListener('DOMContentLoaded', function () { //ustawnie sułachacza reagującego kiedy cała strona jest załadowana
    var FAQcontainers = document.querySelectorAll('.FAQcontainer');

    FAQcontainers.forEach(function (container) {//funkcja przyjmująca dany div jako argument
        container.addEventListener('click', function (event) { //ustawienie słuchacza reagujacego na kliknięcia
            toggleFAQAnswer(container);//wywołanie funkcji powodującej wyskoczenie odpowiedzi
        });
    });
});