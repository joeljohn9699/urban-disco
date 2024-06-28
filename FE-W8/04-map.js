const person = new Map(
    [
        [ 'firstName', 'ABC' ], //tuples in a map. essentially an array of key value pairs nested inside an array
        [ 'secondName', 'DEF' ],
        [ 'city', 'Banglore' ],
        [ 'mobileNumber', 123456789 ]
    ]
);

console.log( person.keys() );
console.log( person.values() );