"use strict";

// let a = {
//     func1 : function (a,b ) { 
//          let  c = a + b 
//          return c ; } ,
//     func2 : function nameOfFunction (a,b ) { 
//             let  c = a + b 
//             return c ; } ,      
// }
// console.log(  a.func1(4,4));
// console.log(  a.func2(4,15));
// let b = {};
// b.func1(4,10)
var car = {
  dirivers: {
    driversName: {
      driversZarplata: function driversZarplata(UAH, time) {
        var zarplata = UAH * time;
        return zarplata;
      }
    }
  }
}; // console.log(car.dirivers.driversName.driversZarplata(10,8))

console.log(car.driversName.driversZarplata(10, 8)); // console.log(add(4,9) + 5);
// console.log(true == '1')
// console.log(false == '0')
// console.log(true == '11') 

console.log(5 + 1);