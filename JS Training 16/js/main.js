// Objects
// key-value pairs in curly braces

/*
const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ['Eat', 'Sleep', 'Code'],
    beverage: {
        morning: 'Coffee',
        afternoon: 'Iced Tea'
    },
    action: function() {
        return `Time for ${this.beverage.morning}`
    }
}

console.log(anotherObj.action())

const vehicle = {
    wheels: 4,
    engine: function() {
        return 'Vrroooom!';
    }
}
const truck = Object.create(vehicle)
truck.doors = 2;
console.log(truck)
console.log(truck.wheels)  // Inheritance
console.log(truck.engine());
const car = Object.create(vehicle)
car.doors = 4;
car.engine = function() {
    return 'Woooosh!'
};
console.log(car.engine());
console.log(car.wheels)
const Tesla = Object.create(car);
console.log(Tesla.wheels)
Tesla.engine = function() {
    return 'Shhhhh...';
}
console.log(Tesla.engine())
*/


/*
const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul Jones',
    drums: 'John Bonham'
};

delete band.drums
console.log(band.hasOwnProperty("drums"))

console.log(Object.keys(band))
console.log(Object.values(band))

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`)
}
*/

// destructuring objects


const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul Jones',
    drums: 'John Bonham'
};
// const { vocals, guitar, bass, drums } = band;
// console.log(guitar)
// console.log(vocals)

function sings({ vocals }) {
    return `${vocals} sings!`
}
console.log(sings(band));
