{
    // фкторіал 4 
// факторіал числа 4 = 1 * 2 * 3 * 4;
// (4! = 1·2·3·4 = 24 )
// 1 * 2 = 2 
// 2 * 3 = 6
// 6 * 4 = 24
// 
// Написать функцию, которая вычисляет факториал переданного ей числа.
// 


// let userNubber = Number(prompt('Введіть перше число'));

// let userNubber = 4;

// let factorialNumber = 0;
// let n = 1;

// for (let i = 1; i < userNubber+1; i++){
      
   
//      let j = i;
     
  
//      n = (n) * (j++);
     
//      factorialNumber = (j * j++) * factorialNumber;
  
//      console.log('крок : ' + i + ' значення fN : ' + n);
// };

// console.log(factorialNumber);
}





// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// //   }


// let a = {
//     b :4, 
//     c : 'yes',
//     g : false,
// }

// let inf = '' + a.b + ' '  + "\n" + a.c + a.g;
// console.log(inf)


// function add2num (name121231231){
// console.log(name121231231 + ' Privet!') 

// };

// add2num('Dima');
// add2num('Vika');

const obj1 = {

    oneKey : 'oneKey' ,
    twoKey : 'twoKey',
    threeKey : 'threeKey',
    forKey : 'forKey',   

}

for ( let key in obj1) {
 if(key != 'forKey' ) {
    console.log(`${key} = ${obj1[key]}`)
 }

}

// let a1 = 6;
// let b1 = a1;

// let a2 = 4
// let b2 = a2



// c = b1 + b2


// console.log()


// function add (a) {
//     return {for (let i = 1; i <5; i++){console.log(i)}};
   

    
// }
// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину,
//  а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом).
//  Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки,
//  якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль

// Відстань (яку ми хочемо проїхати) / середню швидкість = час на дорогу
// якось первірити скільки зупинок на 1 годину потрібно (кожні 4 години 1 година перерва )
// чи має право керувати атомобілем водій з певним іменем (взяти імя водія і порізвняти з усіма іменами водіїв які мають право керувати автомобілем, якщо співпало, то може, якщо не співпало то не може)
// потрібно зрозуміти розхід палива на поїздку( для цього нам потрібно розділити загальну кількість км / на розхід топлива)
//якщо буде замало - повідомлення що мало і запропонувати заправити.

