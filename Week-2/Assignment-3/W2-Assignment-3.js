function count(input) {
    // your code here
    return input.reduce((obj,item)=>{
        if(item in obj){
            obj[item]++;
        }else{
            obj[item]=1;
        }
        return obj;
    },{})
    }
    let input1 = ["a", "b", "c", "a", "c", "a", "x"];
    console.log(count(input1));
    // should print {a:3, b:1, c:2, x:1}

    
    function groupByKey(input) {
    // your code here
        return input.reduce((obj,item)=>{
            let letter=item.key;
            let number=item.value;
            if(letter in obj){
                obj[letter]+=number;
            }else{
                obj[letter]=number;
            }
            return obj;
        },{})
    }
    let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
    ];
    console.log(groupByKey(input2));
    // should print {a:6, b:1, c:7}