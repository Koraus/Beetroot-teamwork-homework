"use strict";

// let start = 8;
// let end = 10;
// function isSeven (num){
//    if (num == 7) {
//        return true;
//    } else { 
//        return false;
//    }
// }
// function diapazon (num1, num2){
//     for (i = num1; i <=num2; i++){
//        if (isSeven(i)) {
//            console.log('Seven is in diapazon');
//        } else {
//             console.log('Seven is not in diapazon');
//        } 
//     }
// }
// diapazon(start, end);
//console.log(isSeven());
var start = 2;
var end = 10;

function findOddNumber(startNumber, endNumber) {
  for (var i = startNumber; i <= endNumber; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

findOddNumber(30, 45);
var arr1 = ['44', 44, true, 0];
console.log(arr1);
arr1.push(55);
console.log(arr1);