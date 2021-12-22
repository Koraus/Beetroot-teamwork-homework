// Створити HTML-сторінку з блоком тексту в рамці. 
// Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

let clickArea = document.getElementById('forClick');
let divForText = document.querySelector('.text-div');

// clickArea.addEventListener('click', function (event){
//     clickArea.classList.add('ok');
// });


// mousedown
// mousemove
// mouseup

let startX = 0;
let startY = 0;
let endX;
let endY = 0;
let startWidth = parseInt(window.getComputedStyle(document.getElementById('textDiv')).width);
let startHeight = parseInt(window.getComputedStyle(document.getElementById('textDiv')).height);



clickArea.addEventListener('mousedown', function (event) {
    event.stopPropagation()
    forClick()
});


function forClick(params) {
    document.addEventListener('mousedown', function (event) {
        startX = event.clientX;
        startY = event.clientY;
    });

    document.addEventListener('mouseup', function (event) {
        endX = event.clientX;
        endY = event.clientY;
        widthDivForChange = endX - startX;
        heightDivForChange = endY - startY;

        divForText.style.width = `${startWidth + widthDivForChange}px`;
        divForText.style.height = `${startHeight + heightDivForChange}px`;

    });

}


