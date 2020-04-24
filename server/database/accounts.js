const db = require('./db');

const accountsDb = {
    init() {
        //Check if table already exists
        db.run(`
            CREATE TABLE accounts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE,
                password TEXT
            )
        `, (err) => {
          if(err){
              //table already created
              console.log('table already created');
          } else {
              //table just created, inserting default values
              var insert = 'INSERT INTO accounts (email, password) VALUES (?,?)';
              db.run(insert, ["admin@example.com", "admin123456"]);
              db.run(insert, ["user@example.com", "user123456"]);
          }
        });
    },

    getAllAccounts(callback){
        const sql = "SELECT * FROM accounts";
        const params = [];
        db.all(sql, params, callback);
    },

    createNewAccount(email, password, callback){
        if(this._validateInput(email, password)){
            const sql = "INSERT INTO accounts (email, password) VALUES (?,?)";
            const params = [email, password];
            db.run(sql, params, callback);
        } else {
            callback(err='invalid input');
        }
    },

    editAccount(id, email, password, callback){
        if (this._validateInput(id, email, password)) {
            const sql = `
                UPDATE accounts SET
                    email = COALESCE(?, email),
                    password = COALESCE(?, password)
                    WHERE id = ?
            `;
            const params = [email, password, id];
            db.run(sql, params, callback);
        } else {
            callback(err='invalid input');
        }
    },

    deleteAccount(id, callback){
        if (this._validateInput(id)){
            const sql = 'DELETE FROM accounts WHERE id = ?';
            const params = [id];
            db.run(sql, params, callback);
        } else {
            callback(err = 'invalid input');
        }
    },

    _validateInput(...params){
        let truthy = true;
        params.forEach(p => {
            truthy = truthy && p;  
        });
        return truthy;
    }
}

module.exports = accountsDb;