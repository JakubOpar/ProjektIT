const burgerMenu = document.querySelector('ol');
const burgerButton = document.querySelector('.burger');
burgerButton.addEventListener('click',function(){ //Dodanie słuchacza który będzie odpowiadał za dodawanie lub usuwanie clasy .avtive
    burgerMenu.classList.toggle('active');
    })