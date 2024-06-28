var number = [ 33,45,2,88,36,17,81,50,28 ];
console.log( number );

number.sort();
console.log( number );

number.sort( function ( x, y ) {
    return x - y;
});
console.log( number );

number.push( 105, 501 );
console.log( number );

number.sort( function ( x, y ) {
    return y - x;
});
var slicedNumbers = number.slice ( 0, 5 );
console.log( slicedNumbers );