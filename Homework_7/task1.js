function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback();
    } 
        else {
            oddCallback();
        }
}


function handleEven() {
console.log("число парне");
}

function handleOdd() { 
console.log("число не парне");
}

handleNum(7, handleEven, handleOdd);
handleNum(100, handleEven, handleOdd);