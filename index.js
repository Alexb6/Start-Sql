// Je vais chercher le driver sqlite3 dans node_modules
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs'); // file system

const dbFile = 'test.db';
const db = new sqlite3.Database(dbFile); // binary file



db.serialize(() => {
    if (!fs.existsSync(dbFile)) { // assuring that a table is create the first time the code is read
        db.run('CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL UNIQUE)');
    }
    db.run('INSERT INTO products (name) VALUES (?)', 'sac');
    db.all('SELECT name FROM products', function (error, data) {
        if (!error) console.log(data);
        else console.log(error);
    })
});




