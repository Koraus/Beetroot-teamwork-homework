// Завдання 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку.
// Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().



class Employee  { 
    constructor (firstName, lastName ) {
        this._firstName = firstName;
        this._lastName = lastName;
    };

    set fullName(lastName ){
        [this._firstName, this._lastName] = lastName.split(' ');
}
    get fullName (){
        return `${this._firstName} ${this._lastName}`;
    }

};

let a = new Employee ('Dmytro' , 'Yaroslavovych');
console.log(a);


function sss (a, f) {
    let g = a;
    let h = f;
    let k = {
        product : a,
        kiltist : k,
    }
    return k;
}

sss(19,)