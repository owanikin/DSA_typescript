// // This program finds the maximum number in an array
// // lets pick the first number of the array as the highest
// // lets compare that to the next number
// // if the next number is higher we update is as the higest,
// // if not, we keep iterating till the end of the array
// function maxNum(array: number[]): number {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max
// }
// const arrayNum = [2,3,4,5,6,7,8,9]
// let highest = maxNum(arrayNum)
// console.log("Some of the best of the kind of things there");
// console.log(`The highest number is: ${highest}`);
// check for a palindrome
// 1. you want to first clean the strings for caps, space & special characters
// 2. you want to compare the first string to the last string for a match 
// 3. if they match you want to return thaat its a string
// 4. if not you want to keep iterating till its false.
function isPalindrome(str) {
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
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
var str = "segun";
var isPalin = isPalindrome(str);
console.log(isPalin);
// Get the maximum number in an array
// you want to make the first number in an array as the highest
// compare it with the next, if the next is higher you make it the hghest if not you keep itereating till the end
function maxNum(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
var arr = [1, 2, 90, 112];
var isHighest = maxNum(arr);
console.log(isHighest);
