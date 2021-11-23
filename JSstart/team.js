

// let avto = {
//   manufacturer: 'Germany',
//   model: 'Opel',
//   year: 2012,
//   averageSpeed: 120,
//   fuelInTank: 70,
//   averageConsumption: 7,
//   drivers: {
//     driver1: 'Ivan',
//     driver2: 'Vova',
//   }
// }
// function displayInfo(car) {
//   for (let key in car) {
//     if (key != 'drivers') {
//       console.log(`${key} = ${car[key]}`)
//     }
//   }
// }
// // displayInfo(avto);

// function addNewDriver(car, driver) {
//   car.drivers.driver3 = driver;
// }
// // addNewDriver(avto, 'Vika')
// // console.log(avto.drivers.driver3);


// function addFuel(car, fuel) {
//   car.fuelInTank = car.fuelInTank + fuel;
// }
// addFuel(avto, 10)
// console.log(avto.fuelInTank);


// function calcTimeForTravel(car, distance)


// {
//   let time = distance / car.averageSpeed;
//   let totalTime;
//   if (time < 4) {
//     totalTime = time;
//     return totalTime;
//   } else {
//     let t = (time - time % 4) / 4;
//     totalTime = t + time;
//   }
//   return totalTime;
// }
// console.log(timeForTravel(avto, 399));







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

let avto = {
  manufacturer: 'Germany',
  model: 'Opel',
  year: 2012,
  averageSpeed: 100,
  fuelInTank: 70,
  averageConsumption: 7,
  drivers: {
    driver1: 'Ivan',
    driver2: 'Vova',
    driver3: 'Vika',
    driver4: 'Vika1',
    driver5: 'Vika4',
  }
}
let superCar = {
  manufacturer: 'Itali',
  model: 'Opel',
  year: 2012,
  averageSpeed: 200,
  fuelInTank: 200,
  averageConsumption: 7,
  drivers: {
    driver1: 'Vika',
  
  }
}

function checkForTravel(objCar, driverName, distance) {

  let timeForTravel = (distance / objCar.averageSpeed) + Math.floor((distance / objCar.averageSpeed) / 4);

  let canDrive;

  for (let key in objCar.drivers) {
    if (objCar.drivers[key] === driverName) {
      canDrive = 'YES'
      break
    } else { canDrive = 'NO' }
  }

  if (canDrive == 'YES') {
    console.log('Водій може керувати автомобілем')
  } else { console.log('Даний водій не може керувати автомобілем') }

  fuelForTravel = (distance / 100) * objCar.averageConsumption;
  if (fuelForTravel > objCar.fuelInTank) {
    console.log('Палива не вистачить, необхідно дозапарвитися')
  } else {
    console.log('щасливої дороги')
  }
  return;
}

checkForTravel(superCar, 'Vika', 12390);






///прозапас
  // let canDrive;
  // for (let key in objCar.drivers) {
  //   if (objCar.drivers[key] === driverName) {
  //     console.log("співпадіння знайдено");
  //     canDrive = true;
  //     console.log(canDrive);
  //     break
  //   } else {
  //     canDrive = false; 
  //   }
  // }
  // let displayCanDrive;
  // if (canDrive == true) {
  //   displayCanDrive = 'Цей водій може кермувати данною машиною'
  // } else {
  //   displayCanDrive = 'Цей водій НЕ може кермувати данною машиною'
  // }