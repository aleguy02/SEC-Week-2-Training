// JavaScript Classes

// class Pizza {
//   constructor(pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = 'original';
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust
//   }
// }


// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize)
//     this.type = 'The Works'
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
//   }
// }

// const mySpecialty = new SpecialtyPizza('medium')
// mySpecialty.slice()

/*
class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;  // underscore indicates that these variable are intended to be private
    this._crust = 'original';
  }
  getCrust() {
    return this._crust;
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust
  }
}
*/

// Factory Function
/*
function pizzaFactory(pizzaSize) {
  const crust = 'original';
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} pizza`)
  }
}

const myPizza = pizzaFactory('small');
myPizza.bake();
myPizza.crust = 'Crunchy'  // the crust variable is private
myPizza.bake()
*/

class Pizza {
  crust = 'original'
  #sauce = 'traditional'
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust
  }
  hereYouGo() {
    console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`)
  }
}

const myPizza = new Pizza('large')
myPizza.hereYouGo()
console.log(myPizza.crust);
console.log(myPizza.sauce)