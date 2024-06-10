const car1 = {
    brand: "Zaporozhets", 
    model: "966",
    year: "1966",
};

const car2 = {
    brand: "LAZ",
    model: "695",
    owner: "Oleksii Haiduk",
}; 

const car3 = {...car1, ...car2};

console.log(car3);