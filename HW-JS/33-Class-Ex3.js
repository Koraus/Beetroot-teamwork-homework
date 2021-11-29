// Завдання 3

//   Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

//   Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку.
//  Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

//  Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().


class Employee  { 
    constructor (firstName, lastName ) {
        this._firstName = firstName;
        this._lastName = lastName;
    };

    set fullName(lastName ){
        [this._firstName, this._lastName] = lastName.split(' ');
}
    get fullName2 (){
        return `${this._firstName} ${this._lastName}`;
    }

};

let a = new Employee ('Dmytro' , 'Yaroslavovych');

console.log(a);

a.fullName = 'Vasya Pupkin';
console.log(a);


// function sss (a, f) { // приклад функції яка збирає обєкт з переданих аргументів
//     let g = a;
//     let h = f;
//     let k = {
//         product : a,
//         kiltist : f,
//     }
//     return k;
// }

// console.log(sss(19,2)); 
