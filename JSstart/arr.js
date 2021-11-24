//NEXT
//Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
//Array.isArray(obj)
//console.log(Array.isArray(product))


//NEXT
//Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
//arr.indexOf(searchElement[, fromIndex = 0])
//console.log(product.indexOf('last'))
//console.log(product.indexOf('last', [fromIndex = 0]))


//NEXT
//???Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива (англ.). Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.
//arr.sort([compareFunction])
//var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//     return a - b;
//   });
//   console.log(numbers); // [1, 2, 3, 4, 5]


//NEXT
//Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов. Array.prototype.concat()
//var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
/*
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
*/
//console.log(product.concat(colors))


//NEXT
//Метод slice() возвращает новый массив, содержащий копию части исходного массива. Array.prototype.slice()
//arr.slice([begin[, end]])
//console.log(product.slice(0, -1));


//NEXT
//Array.prototype.forEach()
//Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);

/*
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach((element) => {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// комментарий: как вы видите пропущенное значение между 3 и 7 не вызывало функцию callback.


const items = ['item1', 'item2', 'item3']
const copy = []
console.log(copy)
до
for (let i = 0; i < items.length; i++) {
  copy.push(items[i])
}

после
items.forEach(function(item){
  copy.push(item)
})
console.log(copy)
*/

//NEXT
/*Array.prototype.map()
Сводка
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
Синтаксис
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Возвращает элемент для new_array
}[, thisArg])

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]

*/

//NEXT
//Array.prototype.includes()
//Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
//console.log(product.includes('last'))
//console.log(product.includes('last', [fromIndex = 0]))



// let moloko = 'wdw';

// const product = [
//     'Moloko',
//     4,
//     moloko,
//     'last',
//     'lastlsat'
// ]

// const colors = [
//     'Yellow',
//     5,
//     'Blue',
//     'Green'
// ]








//FOR HISTORY
// for (let i = 0; i < product.length; i++) {
//     console.log(product[i])
// }

//  for (let i of product) {
//      console.log(i)
// }
// console.log(product[product.length - 1]);

//let a = product.pop() + ' я все ще в сиситемі'
// console.log(product)
//console.log(a)

//console.log(product)
//product.push('Text')
//console.log(product)


// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);

// let items = ['a', 'b', 'c'];
// let copy

// items.forEach(function(item){
//     copy.push(item)
//   })
//   console.log(copy)



// Задача 1
// Домашнє завдання

// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, 
// який містить
// назву продукту,
//  кількість 
//  і куплений він чи ні, 
//  ціну за одиницю товару, 
//  Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.
 
const shoppingList = [
     {
        productName : 'tomatoes',
        quantity : 4 ,
        bought : true,
        unitPrice : 5,
    },
    {
        productName : 'apples',
        quantity : 2 ,
        bought : false,
        unitPrice : 3,
    },
    {
        productName : 'bananas',
        quantity : 10 ,
        bought : true,
        unitPrice : 6,
    },
    
]

function buyProduct(arr, nameOfProduct ) {
    let a = arr.filter(inBusket => inBusket.productName === nameOfProduct);
    return a;
}
console.log(buyProduct(shoppingList, 'bananas'));



//Робота функції що виводить список непридбаних продуктів спочатку, роботу робимо над копією ісходного масиву.
// let shoppingListForWork = shoppingList.slice()
// function compareProduct(arr) {
//     arr.sort( function (left, right) {
//       return (left.bought - right.bought);
//     })
// }
// compareProduct(shoppingListForWork);
// console.log(shoppingListForWork);
////
