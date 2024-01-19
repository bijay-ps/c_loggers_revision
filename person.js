class Person {
  constructor(fullName, age, gender, citizen = "Indian") {
    this.fullName = fullName;
    this.age = age;
    this.gender = gender;
    this.citizen = citizen;
    // let gdr = gender;
  }
}

class Emp extends Person {
  constructor(fullName, age, gender, empId, desgn, dept) {
    super(fullName, age, gender);
    this.empId = empId;
    this.desgn = desgn;
    this.dept = dept;
  }
}

const john = new Person("John Doe", 30, "Male", "British");
const jane = new Person("Jane Doe", 30, "Male");
console.log(john);
console.log(jane);

const mumin = new Emp("Mumin Khan", 25, "Male", "E123", "SE", "XYZ");
// console.log(mumin);
