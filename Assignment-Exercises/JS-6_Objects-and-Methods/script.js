// Step 1: Create a car object
let car = {
    make: "Ford",
    model: "Raptor F-150",
    year: 2010
}

// Step 2: Create a function to describe the car
function getDescription(car) {
    return `This car is a ${car.year} ${car.make} ${car.model}.`
}

// Step 3: Call the function and display the result
console.log(getDescription(car));
