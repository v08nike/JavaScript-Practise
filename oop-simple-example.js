// Encapsulation: define a Person class with properties and methods
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  great() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Inheritance: define a Student class that inherits from the Person class
class Student extends Person {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }

  info(){
    console.log(`${this.name} is ${this.age} years old and goes to ${this.school}.`);
  }
}

// Abstraction: define an abstract Shape class with a common draw() method
abstract class Shape {
  abstract draw(): void;
}

// Polymorphism: define subclasses of Shape that implement the draw() method in their own way
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle...");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a rectangle");
  }
}