//змінні
{
// var a;
// let b;
// const c;
}
//типи
{
// console.log(typeof(1)); // число
// console.log(typeof('1')); // строка
// console.log(typeof(' ')); //  пробіл
// console.log(typeof('')); //  пуста строка
// console.log(typeof(true)); // булеве значення
// console.log(typeof(false)); // булеве значення
}

{// Порівняння
// == (перед тим як зрівняти значення - привде до одного типу і потім виконає ===) // 
// === (порівняє типи данних і занчення) 
// let a = 'Yes';
// console.log( 1 ==  '1'); // 1 і строка 1
// console.log( 1 ===  '1'); // 1 і строка 1
// console.log( a ===  'Yes'); // 1 і строка 1
// console.log( a ===  'yes'); // 1 і строка 1
// console.log (typeof(Number(a)) + ' ' + a )
}
{//Умови

// const a = 'Yes'
// if (a === "yes") {
//     console.log('JS зайшов в тіло умови')
// } else {  console.log('JS Не зайшов в тіло умови') };
    
}

{// Цикли
// for (let i = 1; true; i++){
//     console.log('Я зараз на кроці ' + i);
//     if (i === 20){
//         break;
//     }
// }
}

//  { //Функції
//Напиши всі можливі варіанти створення функцій.
// let t = 10;
// function addTwoNumbers(number1, number2){
// // let result = number1 + number2;
// t = t +1;
// // console.log(result)
// // // return result;
// }

// console.log('58row ' + t );
// let r = console.log(addTwoNumbers());
// console.log('60row ' + t );

// let c = 18;
// let g = 2;

// let r = addTwoNumbers(c, g);
// console.log( 'r '+ r);

// }
//спосіб 1
// console.log(nameOffunction(2,4,6));

// function nameOffunction(a, f, h){
//     let c = a + f + h
//     return c;
// }
// спосіб2
// let g;
// g = 10;
// console.log(g);
// g = function  (a, f, h){
//     let c = a + f + h
//     return c;
// }
// console.log(g(2,4,7));

// g = 10;
// console.log(g)

// спосіб 3
// let g = (a,b) => a + b;
// console.log(g(10,12));
// console.log(g)



// Створи функцію, яка буде виводити кількість переданих їй аргументів.
// function displayNumOfArg (...arr){
//     let num = arr.length;
//     console.log(num)
// }
// displayNumOfArg(4,4,4,4,4)

//  Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

// function compareTwoNumbers(number1, number2) {
//     if (number1 < number2) {
//         return -1;
//     } else if (number1 > number2) {
//         return 1;
//     } else if (number1 === number2) {
//         return 0;
//     } else {
//         return 'Неправильное значение'
//     }
// }
// console.log (compareTwoNumbers(345, 500))

// function compareTwoNumbers(number1, number2) {
//     if (number1 < number2) {
//         return -1;
//     } if (number1 > number2) {
//         return 1;
//     } if (number1 === number2) {
//         return 0;
//     }
//         return 'Неправильное значение'
// }
// console.log(compareTwoNumbers(4,1));

// Напиши функцію, 
// яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function uniteThreeNumbers(number1, number2, number3) {
        let result = "" + number1 + number2 + number3;
        return parseInt(result);

   
}
console.log(uniteThreeNumbers(1, 4, 3));
console.log(typeof(uniteThreeNumbers(1, 2, 3)));
