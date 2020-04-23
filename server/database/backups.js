const db = require('./db');

const backupsDb = {
    init() {
        console.log('initializing backups DB');
    },
    db() {
        return db;
    }
}

module.exports = backupsDb;