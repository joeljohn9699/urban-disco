console.log ( Math.min (5,78,23,41,67,84,22,10,1) );
console.log ( Math.max (5,78,23,41,67,84,22,10,1) );

var mathArray = [ 5,78,23,41,67,84,22,10,1 ];

var mean = function ( mathArray ) {
    var sum = 0;
    for ( var i = 0; i <= mathArray.length; i++ ) {
        sum += mathArray[i];
    }

    var count = mathArray.length;
    return ( sum / count );
}

console.log( 'Mean of the values is :' , mean (mathArray) );
console.log ( 'ceil values of mean is :', Math.ceil( mean (mathArray)) );