var priceOfPhone = 30000, bankBalance = 25000;
var creditLimit = 3000;
if ( priceOfPhone < bankBalance ) {
    console.log( 'I can buy the phone' );
} else if ( priceOfPhone < bankBalance + creditLimit ){
    console.log( 'I can buy the phone' );
} else {
    console.log( "I can't buy the phone" );
    console.log( 'You need to have an extra of:', (priceOfPhone - (bankBalance + creditLimit)));
}