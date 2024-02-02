/**
 * @type {Number}
 */
let slideIndex = 1; //domyślne rozpoczęcie od zdjęcia 1
showSlides(slideIndex);

/**
 * @function plusSlides()
 * funkcja odpowiadająca za pokazanie następnego lub poprzedniego zdjęcia
 * @param {Number} n - numer zdjęcia
 */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * @function currentSlide()
 * funkcja odpowiadająca za pokazanie odpowiedniego zdjęcia w zależności od klikniętej kropki
 * @param {Number} n - numer zdjęcia
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * @function showSlides()
 * funkcja odpowiadająca za wyświetlnie zjęcia o podanym numerze
 * @param {Number} n - numer zdjęcia
 */
function showSlides(n) {  //funkcja przyjmująca jako argument numer zdjęcia
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 } //jeśli numer większy od ilości zdjęć przejdź do pierwszego
    if (n < 1) { slideIndex = slides.length } //jeśli mniejszy od 1 przejdź do ostatniego zdjęcia
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } //ustawienie kazdemu zdięcia display none
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" act", "");
    }// usuwanie clasy act z każdej kropki
    //pokazanie odpowiedniego zdjęcia oraz ustawienie aktywnej kropki odpowiadającej danemu zdjęciu
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " act";
}