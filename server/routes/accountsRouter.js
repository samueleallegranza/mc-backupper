// Path > /api/accounts/
const express = require('express');
const accountsRouter = express.Router();
const accountsDb = require('../database/accounts');

//Get all accounts from database
accountsRouter.post('/list', (req, res, next)=> {
    accountsDb.getAllAccounts(function (err, rows){
        if (err) {
            res.status(400).send();
        } else {
            res.status(200).json(rows);
        }
    });
});

//Insert new account into database
accountsRouter.post('/new', (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;
    accountsDb.createNewAccount(email, password, function(err, result) {
        if(err){
            res.status(400).send();
        } else {
            res.status(200).json({
                "message": "success",
                "id": this.lastID
            });
        }
    });
});

//Edit an account of the database
accountsRouter.post('/edit', (req, res, next) => {
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    accountsDb.editAccount(id, email, password, function (err, result) {
        if(err){
            res.status(400).send();
        } else {
            res.status(200).json({
                "message": "success"
            });
        }
    });
});

//Delete an account from the database
accountsRouter.post('/delete', (req, res, next) => {
    const id = req.body.id;
    accountsDb.deleteAccount(id, function (err, result) {
        if(err){
            res.status(400).send();
        } else {
            res.status(200).json({
                "message": "success"
            });
        }
    });
});

module.exports = accountsRouter;