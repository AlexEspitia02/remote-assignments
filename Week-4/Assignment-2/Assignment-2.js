function ajax(src, callback) {
    // your code here
    //1.創建對象
    const xhr = new XMLHttpRequest();
    //2.初始化 設置類型與URL
    xhr.open('GET',src);
    //3.發送
    xhr.send();
    //4.處理響應結果
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4){
            if(xhr.status === 200){
                let json=JSON.parse(xhr.response);
                callback(json);
            }
        }
    }
}

function render(data) {
    // your code here
    // document.createElement() and appendChild() methods are preferred.
    for (let i = 0; i < data.length ; i++){
        let newDiv = document.createElement("div"); 
        newDiv.innerHTML =  
        `
        <h1>${data[i].name}</h1>
        <p>Price: ${data[i].price}</p>
        <p>Description: ${data[i].description}</p>
        `;
        document.querySelector(".content").appendChild(newDiv);
        newDiv.setAttribute('class','product');
    }
}

ajax(
    'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products',
    function (response) {
    render(response);
    }
); // you should get product information in JSON format and renderdata in the page