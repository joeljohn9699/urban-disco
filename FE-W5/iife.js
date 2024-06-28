const rectArea = (function ( x, y) {
    return x * y;
})( 5, 10 );

var squArea = (function ( z ) {
    return z * z;
})( 10 );

const circArea = (function ( a ) { 
    return 3.14 * a * a;
})( 7 );

console.log( "The Area of rectangle is:", rectArea );
console.log ( "The area of square is:" , squArea );
console.log ( "The area of circle is:" , circArea );