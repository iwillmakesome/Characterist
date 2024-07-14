const db = require('../config/database');

const createTagTable = `
    CREATE TABLE IF NOT EXISTS Tags(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT UNIQUE,
        searchCount INTEGER
    );
`;

const createTagAndViewTable = `
      CREATE TABLE IF NOT EXISTS TagAndView(
        tag_id INTEGER,
        view_id INTEGER,
        PRIMARY KEY (tag_id, view_id)
      );
`;

exports.createTag = (name, callback) => {
  db.serialize(() => {
    // create table
    db.run(createTagTable, (err) => {
      if (err) {
        callback(err);
      }
    });

    db.run(
      `
     INSERT OR IGNORE INTO Tags (name) VALUES (?);
    `,
      [name],
      (err) => {
        if (err) {
          callback(err);
        }
      }
    );

    db.get(
      `
      SELECT id FROM Tags WHERE name = (?);
    `,
      [name],
      (err, result) => {
        callback(err, result);
      }
    );
  });
};

exports.createTagAndViewRelation = (reqData, callback) => {
  const { tag_id, view_id } = reqData;

  db.serialize(() => {
    // create table
    db.run(createTagAndViewTable, (err) => {
      if (err) {
        callback(err);
      }
    });

    db.run(
      `
     INSERT OR IGNORE INTO TagAndView (tag_id, view_id) VALUES (?,?);
    `,
      [tag_id, view_id],
      (err) => {
        callback(err);
      }
    );
  });
};

exports.getTagsByViewId = (id, callback) => {
  db.all(
    `SELECT Tags.name FROM Tags JOIN TagAndView ON Tags.id = TagAndView.tag_id WHERE TagAndView.view_id = ?
  `,
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
};
