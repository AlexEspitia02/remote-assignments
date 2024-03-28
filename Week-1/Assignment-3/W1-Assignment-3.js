function countAandB(input) {
// your code here
    var aLetter=input.reduce((total,letter)=>{
        if(letter === 'a'){
            total+=1;
            return total;
        }
        return total;
    },0)
    var bLetter=input.reduce((total,letter)=>{
        if(letter === 'b'){
            total+=1;
            return total;
        }
        return total;
    },0)
    var theAnswer=`${aLetter+bLetter} (${aLetter} ‘a’ letters and ${bLetter} ‘b’ letter)`;
    return theAnswer;
}
function toNumber(input) {
// your code here
    var toNumber=input.map(letter=>{
        var umber=letter.charCodeAt()-96;
        return umber;
    });
    return toNumber;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1));            // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1));              // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));            // should print 0
console.log(toNumber(input2));              // should print [5, 4, 3, 4, 5]