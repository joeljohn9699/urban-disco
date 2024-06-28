const person = {
    first : 'Virat',
    last : 'Kohli',
    twitter : '@vkohli',
    company : 'Cricketer'
}

function displayName( { first, last } ) { //object destructing in the arguments
    console.log( `${first} ${last}` ); //template string used to print first and last name using backtick.
}

displayName( person );