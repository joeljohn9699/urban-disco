var obj=[
    {name:"One",val:55},
    {name:"Two",val:48},
    {name:"Three",val:2},
    {name:"Four",val:105},
    {name:"Five",val:65},
]

obj.forEach (function ( item ) { //iterates through each items in an array and returns the item.
    if (item.val%2 == 0) {
        console.log ( item ); 
    } 
});

var resultArray = obj.filter ( function ( item ) { //filters the specific reslts from an array to a resulting array
    return item.val > 50
});
console.log ( resultArray );

var resultArray2 = obj.map ( function (item) { //maps the new values onto a new array from the old one.
    return item.val * item.val;
});
console.log( resultArray2 );

//some, every and reduce. some and every are similar to filter and map