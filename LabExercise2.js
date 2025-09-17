//Najnin Sultana, Lab Exercise 2
//Exercise 1:
const name = ['Randy Savage', 'Ric Flai', 'Hulk Hogan','Jhon Smith'];
const printName = (arr) => {
  for (const nm of arr) {
    console.log(`Name: ${nm}`);
  }
};

printName(name);

//Exercise 2:
const capitalize = ([first, ...rest]) => 
  first.toUpperCase() + rest.join("");

console.log(capitalize("hello")); // Output: Hello
console.log(capitalize("world")); // Output: World


//Exercise 3:

const colors = ["red", "green", "blue", "yellow"];

const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);
// Output: ["Red", "Green", "Blue", "Yellow"]

//Exercise 4:
const numbersArr = [5, 12, 25, 40, 7, 18, 30];

const filteredNumbers = numbersArr.filter(num => num >= 20);

console.log(filteredNumbers);
// Output: [25, 40, 30]



//Exercise 5:
const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, val) => acc + val, 0);
const product = nums.reduce((acc, val) => acc * val, 1);

console.log("Sum:", sum);       // Sum: 15
console.log("Product:", product); // Product: 120

//Exercise 6:
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);  // call parent constructor
    this.balance = balance;
  }
}

const mySedan = new Sedan("Toyota Camry", 2022, 15000);

console.log(mySedan);
// Output: Sedan { model: 'Toyota Camry', year: 2022, balance: 15000 }
