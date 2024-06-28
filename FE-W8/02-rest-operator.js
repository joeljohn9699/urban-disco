function sum( ...numbers ) {
    let result = 0;
    for (let a of numbers) result += a;
    return result;
}

console.log( sum( 1 ) );
console.log( sum( 2, 4, 6, 8 ) );
console.log( sum( 10, 20, 30, 40, 50 ) );
