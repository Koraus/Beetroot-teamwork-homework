const clickArea = document.querySelector('.clickArea');
let startCoordX = 0;
let startCoordY = 0;
let textDiv = document.querySelector('.textDiv');

let isHappend = false;

clickArea.addEventListener('mousedown', function (ev) {
    startCoordX = ev.clientX;
    startCoordY = ev.clientY;
    isHappend = true;
});

document.addEventListener('mouseup', function (ev) {

    if (isHappend) {
        isHappend = false;
        let widthResszing = ev.clientX - startCoordX;
        let heightResszing = ev.clientY - startCoordY;
        let startWidth = parseInt(window.getComputedStyle(textDiv).width);
        let startHeigt = parseInt(window.getComputedStyle(textDiv).height);
        textDiv.style.width = `${startWidth + widthResszing}px`;
        textDiv.style.height = `${startHeigt + heightResszing}px`;
    }
    //console.log(widthResszing, heightResszing, textDiv.style.width, textDiv.style.height);
});