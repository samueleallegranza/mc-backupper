const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = __dirname + '/db.sqlite';

const db = new sqlite3.Database(DBSOURCE, (err) => {
    console.log('Error: ' + err);
});

module.exports = db;
