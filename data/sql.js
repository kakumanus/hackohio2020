
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./Delivery', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');

});

let query = 'SELECT Mean_Travel_Time AS mean FROM All_Hourly_Aggregate WHERE Source_ID = ? AND Dest_ID = ? ORDER BY Mean_Travel_Time DESC LIMIT 3;';

db.all(query, [''], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.mean);
    });
  });

db.close();