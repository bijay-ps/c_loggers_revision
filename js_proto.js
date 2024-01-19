function Person(fName, lName, citizenShip) {
  this.fName = fName;
  this.lName = lName;
  //   this.citizenShip = citizenShip;
  //   this.greet = function () {
  //     console.log(`Hello my name is ${this.fName}`);
  //   };
}

Person.prototype.citizenShip = "Indian";
Object.prototype.greet = function () {
  console.log(`Hello my name is ${this.fName}`);
};
const subha = new Person("Subha", "Ranjan", "Indian");

const farhan = new Person("Farhan", "Ahamad", "Indian");

console.log(subha);
console.log(farhan);

farhan.greet();
