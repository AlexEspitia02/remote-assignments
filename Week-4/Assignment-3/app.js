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
    const { email } = req.cookies;
    const signInMessage = req.session.signInMessage || '';
    delete req.session.signInMessage;
    if (email){
        res.render('index', { email, signInMessage });
    }else{
        res.render('index');
    }
})

app.post('/', async (req, res) => {
    const { email, password, action } = req.body;
    if( action == 'register'){
        if(await checkEmailExists(email)){
            return res.render('index', {message:`這個信箱有人使用過了!!`});
        }else{
            await createUser(email, password)
            res.cookie('email', email, { httpOnly: true });
            req.session.signInMessage = `歡迎註冊成功，這裡什麼也沒有喔!!`;
            res.redirect('/');
        }
    }else if(action == 'signIn'){
        if (await signIn(email, password)) {
            res.cookie('email', email);
            req.session.signInMessage = `歡迎回來這個什麼都沒有的網頁!!`;
            res.redirect('/');
        } else {
            res.render('index', {message: '信箱或密碼錯誤，請再試一次!!'});
        }
    }else if(action == 'logout'){
        res.clearCookie('email');
        res.redirect('/');
    }
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
});