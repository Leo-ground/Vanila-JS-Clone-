/*function sayHello(name, age) {
  return `Hello! ${name} you have ${age} years of age`;
}

const greetNicolas = sayHello("Nicolas", 14);
console.log(greetNicolas);
*/

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  multiplication: function (a, b) {
    return a * b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

//console.log(greetNicolas);
const plus = calculator.plus(5, 5);
console.log(plus);

const multiplication = calculator.multiplication(3, 4);
console.log(multiplication);

const minus = calculator.minus(5, 8);
console.log(minus);

const divide = calculator.divide(8, 4);
console.log(divide);

const sqare = calculator.square(2, 4);
console.log(sqare);
