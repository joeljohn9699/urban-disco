var today = new Date();
console.log ( today );

var theDate = new Date( 2021, 5, 6, 5, 30);
console.log ( theDate );

var theDate2 = new Date ( 2000, 0, 1, 5, 30 );
console.log( theDate2 );

if ( theDate > theDate2 ) {
    console.log( 'The given date is after 2000');
} else { console.log ( 'the date is before 2000') };