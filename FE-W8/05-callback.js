function add( first, second, method ) {
    setTimeout(() => {
        method( first + second );
    }, 10000 );
}

console.log( add( 10, 20, function( value ) { //print function defined inside the argument
    console.log( value );
}))