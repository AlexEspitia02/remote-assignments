function maxReduce(numbers) {
    // your code here, for-loop method preferred
    let theMaxNumber=numbers.reduce((maxNumber,number)=>{
        if(maxNumber>number){
            return maxNumber;
        }
        else{
            return number
        }
        })
    return theMaxNumber;
}

function maxForLoop(numbers) {
    // your code here, for-loop method preferred
    let MaxNumber=0;
    for(let i=0;i<numbers.length;i++){
        if(MaxNumber<numbers[i]){
            MaxNumber=numbers[i];
        }
    }
    return MaxNumber;
}


function findPosition(numbers, target) {
// your code here, for-loop method preferred
    for(let i=0;i<numbers.length;i++){
        if(target===numbers[i]){
            return i;
        }
    }
    return -1;
}
console.log(maxReduce([1, 2, 4, 5])); // should print 5
console.log(maxReduce([5, 2, 7, 1, 6])); // should print 7
console.log(maxForLoop([4, 7, 6, 9, 8 ,2 ,3])); // should print 9
console.log(maxForLoop([6, 2, 3, 4, 1])); // should print 6
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1