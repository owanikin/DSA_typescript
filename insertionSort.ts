export function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let currentItem = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentItem) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentItem;
    }
    return arr;
}

let result = insertionSort([4, 2, 1, 3])
console.log(result);

