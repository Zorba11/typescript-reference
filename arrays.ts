const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f670'],
  ['corolla'],
  ['mercedez']
];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toLowerCase()
});

// Flexible types
const importantDates: (Date | string) [] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(30);

