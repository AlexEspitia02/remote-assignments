import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import {createUser, checkEmailExists, signIn} from './database.js'

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: 'auto', httpOnly: true }
}));

app.set('view engine', 'pug');

app.get("/", (req, res) => {
    res.render('index');
}) ;

app.get("/signUp", (req, res) => {
    const { email } = req.cookies;
    req.session.signUpMessage = `歡迎註冊成功，這裡什麼也沒有喔!!`;
    res.render('signUp', { email, signUpMessage: req.session.signUpMessage });
});

app.get("/signIn", (req, res) => {
    const { email } = req.cookies;
    req.session.signInMessage = `歡迎回來這個什麼都沒有的網頁!!`;
    res.render('signIn', { email, signInMessage: req.session.signInMessage });
});

app.post('/', async (req, res) => {
    const { email, password, action } = req.body;
    if( action == 'register'){
        if(await checkEmailExists(email)){
            return res.render('index', {message:`這個信箱有人使用過了!!`});
        }else{
            await createUser(email, password);
            res.cookie('email', email);
            res.redirect('/signUp');
        }
    }else if(action == 'signIn'){
        if (await signIn(email, password)) {
            res.cookie('email', email);
            res.redirect('/signIn');
        } else {
            res.render('index', {message: '信箱或密碼錯誤，請再試一次!!'});
        }
    }
});

app.post('/signUp', async (req, res) => {
    res.clearCookie('email');
    res.redirect('/');
});

app.post('/signIn', async (req, res) => {
    res.clearCookie('email');
    res.redirect('/');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
});