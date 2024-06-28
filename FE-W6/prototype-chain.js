var print = function print ( string, number ) { // this variable gets called as the functions gets called
    console.log ( string , number);
}

function square( z ) { // print is inherited to these functions as it is set as prototype of these functions
    var area = z * z;
    print ( "Area of Square is:", area ); 
}

function rectangle( length, width ) { //
    var area = length * width;
    print ( "Area of Rectangle is:", area ); 
}

function circle( radius ) { //
    var area = 3.14 * radius * radius;
    print ( "Area of Circle is:", area ); 
}

Object.setPrototypeOf ( square, print); // sets the __proto__ of an object. 
Object.setPrototypeOf ( rectangle, print);
Object.setPrototypeOf ( circle, print);

square ( 10 ); //proto hardcodes the print function to a variable
rectangle ( 10, 10 );
circle ( 10 );
