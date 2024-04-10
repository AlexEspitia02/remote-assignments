const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('index');
})

router.get('/data',(req, res)=>{
    const {number} = req.query;
    if(number===undefined){
        return res.send("Lack of Parameter!!!");
    }
    let turnToNumber=+number;
    if (!isNaN(turnToNumber)) {
        if(turnToNumber>1000000000){
        return res.send("你輸入的數字太大了!!!!");
        }else{
        let total = 0;
        for(let i=0 ; i<=turnToNumber; i++){
            total+=i;
        }
        return res.json(total);
        //當使用res.send時，如果要發送的是數字，Express會將它解釋為HTTP狀態碼。
        //因此，如果turnToNumber是一個數字，需要res.json來發送數字。
        }
    }else{
        return res.send(`Wrong Parameter!!!，${number}不是數字`);
    }
})

router.get('/myName',(req, res)=>{
    const name=req.cookies.username;
    if (name){
        res.render('myName', { name });
    }else{
        res.render('myName');
    }
})

router.get('/trackName',(req, res)=>{
    res.redirect(`/myName`);
})

router.post('/myName',(req, res)=>{
    const name = req.body.username;
    if (name) {
        res.cookie('username', name);
        res.redirect(`/trackName?name=${name}`);
    } else {
        res.render('myName');
    }
});

module.exports = router;