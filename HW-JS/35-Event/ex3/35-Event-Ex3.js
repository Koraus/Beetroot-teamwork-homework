// Створити HTML-сторінку з блоком тексту в рамці. 
// Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

let clickArea = document.getElementById('forClick');
let divForText = document.querySelector('.text-div');

let startX;
let startY = 0;
let endX;
let endY = 0;
let startWidth = parseInt(window.getComputedStyle(document.getElementById('textDiv')).width);
let startHeight = parseInt(window.getComputedStyle(document.getElementById('textDiv')).height);

clickArea.addEventListener('mousedown', forClick);

// // mousedown
// // mousemove
// // mouseup


function forClick(evenMouseD) {








    document.addEventListener('mouseup', function (event) {
        endX = event.clientX;
        endY = event.clientY;
        widthDivForChange = endX - startX;
        heightDivForChange = endY - startY;

        divForText.style.width = `${startWidth + widthDivForChange}px`;
        divForText.style.height = `${startHeight + heightDivForChange}px`;



        console.log(`
        startX ${startX}
        endX  ${endX}
        startY  ${startY}
        endY ${endY}

       Width for change: ${widthDivForChange} 
       Height for change:  ${heightDivForChange}
        ` )
    });

}


//функція яка при кліку записує кординати




// function coordinatesMouthDowX() {
//     return this.event.clientX;
// }
// function coordinatesMouthDowY() {
//     return this.event.clientY;
// }

// function coordinatesMouthUpX() {
//     return this.event.clientX;
// }
// function coordinatesMouthUpY() {
//     return this.event.clientY;
// }





function coordinatesMouthX() {
    return this.event.clientX;
}
function coordinatesMouthY() {
    return this.event.clientY;
}

function coordinateDifference(start, end) {
    return end - start ; 

}



coordinateDifference();

// Відслідкувати клік  по квадратику
//
// Отримати координати натисканняМиші (coordinatesMouthX, coordinatesMouthY)
// Записати отримані координати в змінні

// Отримати координати відпусканняМиші (coordinatesMouthX, coordinatesMouthY)
// Записати отримані координати в змінні

// Отримати різницю координат X coordinateDifference
// Отримати різницю координат Y coordinateDifference

// Отримати значення поточної ширини div
// Записати отримані координати в змінні

// Отримати значення поточної висоти div
// Записати отримані координати в змінні

// зміна поточного значення ширини div

// зміна поточного значення висоти div