// To check if a string is a palindrome. A palindrome is a word which reads the same backward as forward
// such as radar, lawal, civic

function isPalindrome(str: string): boolean {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')

    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true
}


const str1 = 'Civic'
const isItPali = isPalindrome(str1)

console.log(isItPali);
