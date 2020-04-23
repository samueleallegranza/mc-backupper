// Path > /api/auth/
const express = require('express');
const accountsRouter = express.Router();

const cookieParser = require('cookie-parser');
accountsRouter.use(cookieParser()); 



accountsRouter.post('/login', (req, res, next)=>{
    console.log(req.body)
    if (req.body.username && req.body.password){
        if (
            req.body.username === process.env.MCBACKUPPER_USERNAME &&
            req.body.password === process.env.MCBACKUPPER_PASSWORD
        ){
            //Logged in correctly
            res.cookie('username', req.body.username, { maxAge: 600000 });
            res.cookie('password', req.body.password, { maxAge: 600000 });
            res.status(200).send();
        } else {
            //Wrong credentials
            res.status(403).send();
        }
    } else{
        //Bad request parameters
        res.status(400).send();
    }
})

module.exports = accountsRouter;