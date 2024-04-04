function binarySearchPosition(numbers, target) {
// your code here
    let start = 0;
    let end = numbers.length - 1;
    let middle;
    while (start <= end) {
        middle = Math.floor((start + end) / 2)
        if (target < numbers[middle]) {
        end = middle - 1   
        } else if (target > numbers[middle]) {
        start = middle + 1
        } else {
        return middle
        }
    }
    return -1
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3