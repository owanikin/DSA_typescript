"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
function insertionSort(arr) {
    // 1. We start at index 1, because the first item is considered sorted
    for (var i = 1; i < arr.length; i++) {
        // 2. We store the current item value so it be placed right.
        var currentItem = arr[i];
        // 3. This is the index of the item to the left of current item
        var j = i - 1;
        // 4. This loop iterates over the items in the sorted array (the items from the current to the beginning)
        // If the item we're looking at is greater that the current item, we copy its value to the next slot. This is the actual sorting
        while (j >= 0 && arr[j] > currentItem) {
            arr[j + 1] = arr[j];
            j--;
        }
        // 5. We insert the current item into the sorted array
        arr[j + 1] = currentItem;
    }
    return arr;
}
exports.insertionSort = insertionSort;
var result = insertionSort([4, 2, 1, 3]);
console.log(result);
