const db = require('../config/database');

exports.createPeople = (name, group, callback) => {
  db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS people(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE,
            view_group TEXT
        )
    `);

    db.run(
      `
        INSERT INTO people(name, view_group) VALUES (?, ?); 
    `,
      [name, group],
      (err) => {
        callback(err);
      }
    );
  });
};

exports.getAllPeople = (callback) => {
  db.get(`SELECT * FROM people`, callback);
};
