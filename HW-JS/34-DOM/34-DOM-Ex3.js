// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

// Я не нашёл как считать значение css-свойства, поэтому сделал по классу active

// if ()

// console.log( lamp1.style['opacity'] );

document.getElementById('switch').onclick = function () {
    // находим все элементы с классом .lamp и добалвяем в коллекцию lamps
    let lamps = document.querySelectorAll('.lamp');

    // объявляем вспомогательную переменную;
    // присваиваем по-умолчанию значение меньше нуля чтобы программа 
    // срабатывала даже если ни у одного элемента нет класса active;
    let j = -1;

    // перебираем коллекцию lamps 
    for (let i = 0; i < lamps.length; i++) {
        if (lamps[i].classList.contains('active')) {
            lamps[i].classList.remove('active');
            j = i + 1;
        }
    }
    // условие которое проверяет есть ли элемент с индексом j в коллекции
    // если нет - то j = 0
    if (j >= lamps.length || j < 0) {
        j = 0;
    }
    // присваиваем следующему элементу класс active
    lamps[j].classList.add('active');
}
