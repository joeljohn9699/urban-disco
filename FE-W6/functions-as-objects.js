function print( string, number ) {
    console.log ( string , number);
}

function square( z, print ) {
    var area = z * z;
    print ( "Area of Square is:", area ); 
}

function reactangle( length, width, print ) {
    var area = length * width;
    print ( "Area of Rectangle is:", area ); 
}

function circle( radius, print ) {
    var area = 3.14 * radius * radius;
    print ( "Area of Circle is:", area ); 
}

square ( 10, print);
reactangle ( 10, 10, print);
circle ( 10, print);