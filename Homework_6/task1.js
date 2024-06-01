//function declaration

function calculate(width, height) {
    const result = width * height;

    return result;
}

console.log(calculate(15, 18));

//function expression

const calculateExpression = function(width, height) {
    const result = width * height;

    return result;
}

console.log(calculateExpression(5, 10));

//arrow function

const arrowFunction = (width, height) => {
    const result = width * height;

    return result;
}

console.log(arrowFunction(11, 3));