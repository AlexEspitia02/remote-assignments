function binarySearchPosition(numbers, target) {
// your code here
    //宣告變數
    let start = 0;
    let end = numbers.length - 1;
    let middle;
    while (start <= end) {
        //取中間值
        middle = Math.floor((start + end) / 2)
        //判斷搜尋左右方向  
        if (target < numbers[middle]) {
        //向右邊尋找
        end = middle - 1   
        } else if (target > numbers[middle]) {
        //向左邊尋找
        start = middle + 1
        } else {
        return middle  //回傳資料結構中的 索引值 index
        }
    }
    return -1  //未找到回傳 -1
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3