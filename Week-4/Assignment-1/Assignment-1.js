//第一題
function delayedResult(n1, n2, delayTime, callback) {
// your code here
    setTimeout( () => {
        let result = n1 + n2;
        callback(result);
    }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {
console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds


//第二題
function delayedResultPromise(n1, n2, delayTime) {
// your code here
    return new Promise( (resolve) => {
        setTimeout( () => {
            let result= n1 + n2;
            resolve(result);
        }, delayTime);
    });
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds


//第三題
async function main() {
// your code here, you should call delayedResultPromise here and get the result using async/await.
return await delayedResultPromise(4, 5, 3000).then(console.log);
}
main(); // result will be shown in the console after <delayTime> seconds