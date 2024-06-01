const isPersonAdult = (age) => {
    const expression = 18 < age;

    return expression;
} 

console.log(isPersonAdult(25));
console.log(isPersonAdult(15));