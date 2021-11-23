let avto = {
  manufacturer: 'Germany',
  model: 'Opel',
  year: 2012,
  averageSpeed: 120,
  fuelInTank: 70,
  averageConsumption: 7,
  drivers: {
    driver1: 'Ivan',
    driver2: 'Vova',
  }
}
function displayInfo(car) {
  for (let key in car) {
    if (key != 'drivers') {
      console.log(`${key} = ${car[key]}`)
    }
  }
}
displayInfo(avto);

function addNewDriver(car, driver) {
  car.drivers.driver3 = driver;
}
addNewDriver(avto, 'Vika')
console.log(avto.drivers.driver3);


function addFuel(car, fuel) {
  car.fuelInTank = car.fuelInTank + fuel;
}
addFuel(avto, 10)
console.log(avto.fuelInTank);


function timeForTravel(car, distance) {
  let time = distance / car.averageSpeed;
  let totalTime;
  if (time < 4) {
    totalTime = time;
    return totalTime;
  } else {
    let t = (time - time % 4) / 4;
    totalTime = t + time;
  }
  return totalTime;
}
console.log(timeForTravel(avto, 399));