"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
function bubbleSort(arr) {
    var _a;
    for (var outer = arr.length; outer >= 0; outer--) {
        for (var inner = 0; inner < outer; inner++) {
            if (arr[inner] > arr[inner + 1]) {
                _a = [arr[inner + 1], arr[inner]], arr[inner] = _a[0], arr[inner + 1] = _a[1];
            }
        }
    }
    return arr;
}
exports.bubbleSort = bubbleSort;
var unsortArray = [1, 6, 3, 9, 2, 8, 4];
var sortedArray = bubbleSort(unsortArray);
console.log(sortedArray);
