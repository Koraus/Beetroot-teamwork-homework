const clickArea = document.getElementById('forClick');
const divForText = document.querySelector('.text-div');


clickArea.addEventListener('mousedown', (event) => {
    console.log("callback", this);
    this.dfdfd = 5;
    const q = [1, 2, 3].map((el) => {
        return { el: el, ctx: this.dfdfd, };
    })
    console.log(q);
});

// // //Пошук елементів DOM і присвоєння їх в змінні
// let isClicked = false;
// let startX = 0;
// let startY = 0;





// clickArea.addEventListener('mousedown', ev => {
//     isClicked = true;
//     startX = ev.clientX;
//     startY = ev.clientY;
// });
// document.addEventListener('mouseup', ev => {
//     if (!isClicked) { return; }

//     const dWidth = ev.clientX - startX;
//     const dHeight = ev.clientY - startY;
//     isClicked = false;

//     const startWidth = parseInt(window.getComputedStyle(document.getElementById('textDiv')).width);
//     divForText.style.width = `${startWidth + dWidth}px`;

//     const startHeight = parseInt(window.getComputedStyle(document.getElementById('textDiv')).height);
//     divForText.style.height = `${startHeight + dHeight}px`;
// });


// let divForText = document.querySelector('.text-div');
// let startX = 0;
// let startY = 0;
// let endX;
// let endY;
// let startWidth = parseInt(window.getComputedStyle(document.getElementById('textDiv')).width);
// function getStartWidth() {
//     return parseInt(window.getComputedStyle(document.getElementById('textDiv')).width);
// }
// let startHeight = parseInt(window.getComputedStyle(document.getElementById('textDiv')).height);
// // Відслідкувати клік  по квадратику  // event.list
// let widthDivForChange = 0;
// let heightDivForChange = 0;
// let isClicked = false;

// function coordinatesMouthX() {
//     return this.event.clientX;
// }
// function coordinatesMouthY() {
//     return this.event.clientY;
// }
// function takeCoordStart() {
//     startX = coordinatesMouthX();
//     startY = coordinatesMouthY();
//     isClicked = true;
//     console.log(event);

// }
// function takeCoordEnd() {
//     endX = coordinatesMouthX();
//     endY = coordinatesMouthY();

// }

// function calcAndRender() {
//     widthDivForChange = endX - startX;
//     heightDivForChange = endY - startY;
//     divForText.style.width = `${startWidth + widthDivForChange}px`;
//     divForText.style.height = `${startHeight + heightDivForChange}px`;
//     isClicked = false;
// }

// clickArea.addEventListener('mousedown', takeCoordStart);

// document.addEventListener('mouseup', function () {
//     if (isClicked === true) {
//         takeCoordEnd();
//         calcAndRender();

//         console.log(`
//         startX ${startX}
//         endX  ${endX}

//         startY  ${startY}
//         endY ${endY}

//        Width for change: ${widthDivForChange} 
//        Height for change:  ${heightDivForChange}
//        StyleWidthAfter: ${divForText.style.width} 
//        StyleHeightAfter: ${divForText.style.height}
//         ` )
//     }
// });






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