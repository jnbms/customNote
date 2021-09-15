const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./pet.db');

// insert one row into the student table
db.run(`INSERT INTO pets(name, old) VALUES('멍멍이', 3)`, function (err) {
    if (err) {
        return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// close the database connection
db.close();