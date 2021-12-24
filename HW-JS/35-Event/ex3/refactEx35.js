//Пошук елементів DOM і присвоєння їх в змінні

let clickArea = document.getElementById('forClick');
let divForText = document.querySelector('.text-div');
let startX;
let startY = 0;
let endX;
let endY = 0;
let startWidth = parseInt(window.getComputedStyle(document.getElementById('textDiv')).width);
let startHeight = parseInt(window.getComputedStyle(document.getElementById('textDiv')).height);
// Відслідкувати клік  по квадратику  // event.list
let widthDivForChange = 0;
let heightDivForChange = 0;
let isClicked = false;

function coordinatesMouthX() {
    return this.event.clientX;
}
function coordinatesMouthY() {
    return this.event.clientY;
}
function takeCoordStart() {
    startX = coordinatesMouthX();
    startY = coordinatesMouthY();
    isClicked = true;
    console.log(isClicked)
}
function takeCoordEnd() {
    endX = coordinatesMouthX();
    endY = coordinatesMouthY();
    console.log('take');

}

function calcAndRender() {
    widthDivForChange = endX - startX;
    heightDivForChange = endY - startY;
    divForText.style.width = `${startWidth + widthDivForChange}px`;
    divForText.style.height = `${startHeight + heightDivForChange}px`;
    isClicked = false;
}

clickArea.addEventListener('mousedown', takeCoordStart);
document.addEventListener('mouseup', function () {
    if (isClicked === true) {
        takeCoordEnd();
        calcAndRender();
        console.log('2 ' + isClicked)
    }
});







// Отримати координати натисканняМиші (coordinatesMouthX, coordinatesMouthY)
// Записати отримані координати в змінні
// startX = coordinatesMouthX();
// startY = coordinatesMouthY();

// Отримати координати відпусканняМиші (coordinatesMouthX, coordinatesMouthY)
// Записати отримані координати в змінні
// endX = coordinatesMouthX();
// endY = coordinatesMouthY();

// Отримати різницю координат X coordinateDifference
// Отримати різницю координат Y coordinateDifference
// widthDivForChange = endX - startX;
// heightDivForChange = endY - startY;

// Отримати значення поточної ширини div
// Записати отримані значення в змінні

// Отримати значення поточної висоти div
// Записати отримані значення в змінні

// зміна поточного значення ширини div

// divForText.style.width = `${startWidth + widthDivForChange}px`;
// зміна поточного значення висоти div
// divForText.style.height = `${startHeight + heightDivForChange}px`;