function divide( a, b ) {
    if ( typeof a == 'number' && typeof b == 'number' && b > 0 ) {
        console.log( "Answer after dividing", a, "by", b, "will be:", a/b );
    } else
    throw new Error ("Only Numbers are allowed and divisor should be greater than 0");
}

try {
    divide( 5, 2);
} catch (error) {
    console.log( error );
}

try {
    divide( 5, 0);
} catch (error) {
    console.log( error.message );
}
