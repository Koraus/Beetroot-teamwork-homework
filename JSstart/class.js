// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Circle {
    constructor (radius){
    this._radius = radius;
    }

    get getRadius (){
        return this._radius;
    }
    set setRadius (setRadius) {
     this._radius = setRadius;
    }
    get getDiameter(){
        return this._radius * 2; 
    }

    }


let circleUser = new Circle (40);
console.log(circleUser.getRadius)
// console.log(circleUser.setRadius = 15 )
console.log(circleUser.getDiameter)
