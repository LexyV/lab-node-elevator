const Elevator = require('./elevator.js');
const Person = require('./person.js');

let lexy = new Person("Lexy", 3, 9);
let john = new Person("John", 5, 1);
let dumbo = new Person("Dumbo", 9, 3);
let shelby = new Person("Shelby", 2, 7);

let elevator = new Elevator();
elevator.floorUp();
elevator.floorDown();
elevator.start();