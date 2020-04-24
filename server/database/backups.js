const db = require('./db');

const backupsDb = {
    init() {
        //Check if table already exists
        db.run(`
            CREATE TABLE backups (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                schedule TEXT,
                path TEXT,
                before_scripts TEXT,
                after_scripts TEXT,
                account_id INTEGER,
                num_backups INTEGER
            )
        `, (err) => {
            if (err) {
                //table already created
                console.log('table already created');
            } else {
                //table just created, inserting default values
            }
        });
    },

    getAllBackups(callback){
        const sql = "SELECT * FROM backups";
        const params = [];
        db.all(sql, params, callback);
    },

    createNewBackup(backupObj, callback){
        if(this._validateInput(backupObj)){
            const sql = `
                INSERT INTO backups (
                    id, name, schedule, path, before_scripts, after_scripts, account_id, num_backups
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `
            const params = [backupObj.name, backupObj.schedule, backupObj.path, backupObj.before_scripts, backupObj.after_scripts, backupObj.account_id, backupObj.num_backups];
            db.run(sql, params, callback);
        } else {
            callback(err='invalid input');
        }
    },

    _validateInput(bObj){
        let valid = true;
        //Checkinf values that mustn't be falsy
        if (!(bObj.id && bObj.name && bObj.path && bObj.account_id && bObj.num_backups)){
            valid = false;
        }
        //Check cron format
        const cronRegex = RegExp('/^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-3])|\*\/([0-9]|1[0-9]|2[0-3])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/');
        if(!(cronRegex.test(bObj.schedule))){
            valid = false;
        }
    }

}

module.exports = backupsDb;