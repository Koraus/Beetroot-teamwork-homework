// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

// class Circle {
//     constructor (radius, diameter ){
//     this._radius = radius;
//     this._diameter = diameter;
//     }

//     get getRadius (){
//         return this._radius;
//     }

//     set setRadius (setRadius) {
//      this._radius = setRadius;
//     }
//     get getDiameter(){
//         return this._radius * 2; 
//     }
//     circleSquare (){
//        return Math.PI * this._radius ** 2;
//     }
//     circleLength (){
//         return Math.PI * this._radius * 2;
//      }

//     }
// let circleUser = new Circle (40);
// console.log(circleUser.getRadius)
// console.log(circleUser.setRadius = 15 )
// console.log(circleUser.getDiameter)


 /* Завдання 2

Реалізуй клас, що описує канцелярський маркер. 
У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, 
поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

    Продемонструй роботу написаних методів.
*/

class Marker {

    constructor(color, quantity) {
        this.color = color;
        this.quantity = quantity;
    }  

}




function printText (text, color){
    console.log(text + color)
}

printText('dsdsdsdsd', '    red');

function check (text) {
 let inkLvl = 4;
 let canPrintC = 0;

 for (let i = 0; i <text.length;  i++){

   if( text[i] != ' ') {
    inkLvl = inkLvl - 1;
   } else
     canPrintC = i;
    ;

    printText()
 }



}

check('ab cd')

// 3

// 1234
// t ex
// let c = function ('t ex').'t ex'
// let c = 't e x';
// let numOfSpace = 0;
// let neProbil = 0;
// for (let i = 0; i < c.length; i++){
//     if (c[i] === ' ') {
//         numOfSpace = numOfSpace + 1;
//     } else neProbil = neProbil + 1;
// }
// console.log('kilkist spase ' + numOfSpace +'\n' + 'ne probil '+ neProbil)
// let inkLevel = 4;
// let str = 'Str kdd'
// for (let i = 0; i < str.length; i++){
//     if (i != ' ') {
//         inkLevel = inkLevel - 1;
//         if (inkLevel = 0) {
//             break
//         }
//     }
// }
// console.log(inkLevel)
// console.log(circleUser.circleSquare())
// console.log(circleUser.circleLength())








//********************************* 
// class Student {
//      constructor (name, secondName){
//          this._name = name;
//          this._secondName = secondName;

//     }
//     get studentName() {
//          return this._name;
//     }
//     set firstName (name) {
//         if( 3 > name.length){
//          console.log('ne pidhodyt')
         
//         }
//     }
    
//     fullName() {
//         return this._name + ' '+ this._secondName;
//     }
// };
//**********************************

