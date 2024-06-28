class Car {
    constructor( name, manufacturingYear) { //Defining a class and constructor in ES6
        this.name = name;
        this.manufacturingYear = manufacturingYear;
    }

    age( year ) {
        return year-this.manufacturingYear;
    }
}

const ford = new Car( 'Ford', 2012 );
console.log( ford );

let date = new Date();
let year = date.getFullYear();

var ageOfCar = 'The Car is ' + ford.age( year ) + ' years old';

console.log( ageOfCar );