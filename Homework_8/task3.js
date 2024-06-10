const numbersArray = [10, 20, 30, 40, 50];
const sumArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sumArray);