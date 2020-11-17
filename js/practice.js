// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// const hotel = new Hotel('Resort Hotel', 5, 100);
// console.log(hotel);

// const hotel2 = new Hotel('Kamelia', 4, 80);
// console.log(hotel2);

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//     console.log(this.guestCount);
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);

// hotel.greet('Mango');
// hotel.addGuests(50);
// hotel.removeGuests(50);

// const animal = { eats: true };
// const dog = { barks: true, eats: false };

// dog.__proto__ = animal;

// console.log(dog.barks);
// console.log(dog.eats);

// const animal = { eats: true };
// const dog = Object.create(animal);
//dog.barks = true;

// console.log(dog.barks);
// console.log(dog.eats);
// console.log(dog);

//const dog = { barks: true };
// for (const key in dog) {
//   console.log(dog.hasOwnProperty(key));
// }

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);
// console.log(dogKeys); // ['barks']

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// // console.log(Guest.prototype);
// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// console.log(mango);

// const poly = new Guest('Poly', 36);

// mango.showGuestInfo();
// poly.showGuestInfo();

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// console.log(Guest);
// Guest.prototype = {
//   constructor: Guest,
// };

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// //console.log(Car.prototype);

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// myCar.changePrice(20000);
// console.log(myCar);
