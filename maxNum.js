// This program finds the maximum number in an array
// lets pick the first number of the array as the highest
// lets compare that to the next number
// if the next number is higher we update is as the higest,
// if not, we keep iterating till the end of the array
function maxNum(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
var arrayNum = [2, 3, 4, 5, 6, 7, 8, 9];
var highest = maxNum(arrayNum);
console.log("The highest number is: ".concat(highest));
