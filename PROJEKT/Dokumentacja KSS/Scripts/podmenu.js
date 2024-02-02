function toggleList(button) { //funkcja która jako argument przyjmuje przycisk który został właśnie naciśnięty
    const parentLi = button.parentElement;
    const ul = parentLi.querySelector('ul');
    ul.classList.toggle('ulactive'); //dodawanie lub usuwanie klasy .ulactive
}