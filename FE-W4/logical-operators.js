var isSaturday = false, isSunday = true;
var weekend = isSaturday || isSunday;
console.log( "Is today a weekend? ", weekend );
var freeTime = true;
console.log( "Can I go to park? ", freeTime && weekend );