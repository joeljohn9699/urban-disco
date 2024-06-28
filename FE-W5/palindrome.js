var firstString = 'abcaaaaaacba';

var isPalindrome = function ( firstString ) {
    var left = 0;
    var right = firstString.length-1;

    while (right > left) {
        if (firstString.charAt(left) != firstString.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

var result = isPalindrome ( firstString );

if (result) {
    console.log ( 'Given string is palindrome. ');
} else { console.log( 'Given String is not palindrome.'); }