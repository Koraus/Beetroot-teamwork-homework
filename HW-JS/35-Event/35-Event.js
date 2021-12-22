// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. 
// При натисканні Ctrl + E,
//  замість div з'являється textarea з тим же текстом, який тепер можна редагувати.


// При натисканні Ctrl +, замість textarea з'являється div з уже зміненим текстом. 

// Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.



let textDiv = document.getElementById('text-fild');
let textArea = document.getElementById('text-area');

document.addEventListener('keydown', function(event) {
    event.preventDefault()
    if ( (event.code == 'KeyE' || event.code === 'Comma' ) && event.ctrlKey ) {

        textDiv.classList.add('whid');

        textArea.classList.remove('whid');
    }
   
  });