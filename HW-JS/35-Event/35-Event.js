// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. 
// При натисканні Ctrl + E,
//  замість div з'являється textarea з тим же текстом, який тепер можна редагувати.


// При натисканні Ctrl +, замість textarea з'являється div з уже зміненим текстом. 

// Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.



let textDiv = document.getElementById('text-fild');
let textArea = document.getElementById('text-area');

document.addEventListener('keydown', function (event) {
    // event.preventDefault()
    if (event.code == 'KeyE' && event.ctrlKey) {
        // event.preventDefault()
        textDiv.classList.add('whid');
        textArea.classList.remove('whid');
        textArea.value = textDiv.innerText;
    }



});

document.addEventListener('keydown', function (event) {

    // event.returnValue = false;
    if (event.code == 'Equal' && event.ctrlKey) {
        // event.preventDefault()
       textArea.classList.add('whid');
       textDiv.classList.remove('whid');
       textDiv.innerText = textArea.value; 
     
    }


     
   

});



