"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.
var Circle =
/*#__PURE__*/
function () {
  function Circle(radius, diameter) {
    _classCallCheck(this, Circle);

    this._radius = radius;
    this._diameter = diameter;
  }

  _createClass(Circle, [{
    key: "circleSquare",
    value: function circleSquare() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  }, {
    key: "circleLength",
    value: function circleLength() {
      return Math.PI * this._radius * 2;
    }
  }, {
    key: "getRadius",
    get: function get() {
      return this._radius;
    }
  }, {
    key: "setRadius",
    set: function set(setRadius) {
      this._radius = setRadius;
    }
  }, {
    key: "getDiameter",
    get: function get() {
      return this._radius * 2;
    }
  }]);

  return Circle;
}();

var circleUser = new Circle(40);
console.log(circleUser.getRadius); // console.log(circleUser.setRadius = 15 )

console.log(circleUser.getDiameter);
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

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, quantity) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.quantity = quantity;
  }

  _createClass(Marker, [{
    key: "printText",
    value: function printText(text) {}
  }]);

  return Marker;
}(); // 3
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


var inkLevel = 4;
var str = 'Str kdd';

for (var i = 0; i < str.length; i++) {
  if (i != ' ') {
    inkLevel = inkLevel - 1;

    if (inkLevel = 0) {
      break;
    }
  }
}

console.log(inkLevel);
console.log(circleUser.circleSquare());
console.log(circleUser.circleLength());