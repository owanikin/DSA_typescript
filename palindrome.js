// To check if a string is a palindrome. A palindrome is a word which reads the same backward as forward
// such as radar, lawal, civic
function isPalindrome(str) {
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var left = 0;
    var right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
var str1 = 'Civic';
var isItPali = isPalindrome(str1);
console.log(isItPali);
