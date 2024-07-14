const db = require('../config/database');
const fs = require('fs');
const { getFileType } = require('../utils/mime');

const createTable = `
      CREATE TABLE IF NOT EXISTS Scenes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT,
        title TEXT DEFAULT 'Title',
        character TEXT DEFAULT 'Character',
        media TEXT DEFAULT 'Media',
        tags TEXT DEFAULT 'Tags',
        fileName TEXT,
        fileType TEXT,
        flame INTEGER DEFAULT 0,
        star INTEGER DEFAULT 0
      );
    `;

// Create
exports.createScene = (req, fileName, metadata, callback) => {
  const date = Date.now();
  const { title, character, media, tags, fileType } = metadata;

  db.serialize(() => {
    db.run(createTable, (err) => {
      if (err) {
        callback(err);
      }
    });

    db.run(
      `
     INSERT INTO Scenes(date, title, character, media, tags, fileName, fileType) VALUES (?,?,?,?,?,?,?);
    `,
      [date, title, character, media, tags, fileName, fileType],
      (err) => {
        if (err) {
          callback(err);
        }
      }
    );

    db.get(
      `
      SELECT last_insert_rowid() as lastID;
    `,
      (err, result) => {
        callback(err, result.lastID);
      }
    );
  });
};

// Read
exports.getAllScenes = (callback) => {
  db.all(`SELECT * FROM Scenes`, callback);
};

exports.getSceneById = (id, callback) => {
  db.get(
    `
    SELECT * FROM Scenes WHERE id = ?
  `,
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
};

exports.getRecentCreatedScenes = (callback) => {
  db.all(
    `
       SELECT * FROM Scenes ORDER BY date LIMIT 5
    `,
    (err, result) => {
      callback(err, result);
    }
  );
};

exports.getLowViewScenes = (callback) => {
  db.all(
    `
    SELECT * FROM Scenes ORDER BY flame ASC LIMIT 10
    `,
    (err, result) => {
      callback(err, result);
    }
  );
};

exports.getHighViewScenes = (callback) => {
  db.all(
    `
            SELECT * FROM Scenes ORDER BY flame DESC LIMIT 10
        `,
    (err, result) => {
      callback(err, result);
    }
  );
};

exports.getSceneByTitle = (title, callback) => {
  db.all(
    `
    SELECT * FROM Scenes WHERE title like '%' || ? || '%';
  `,
    [title],
    (err, result) => {
      callback(err, result);
    }
  );
};

exports.getFilePathById = (id, callback) => {
  db.get(
    `
    SELECT location FROM Scenes WHERE id = ? 
  `,
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
};

exports.searchScenes = (search, callback) => {
  db.all(
    `
  SELECT * FROM Scenes WHERE title LIKE ? OR character LIKE ? OR works LIKE ?`,
    [`%${search}%`, `%${search}%`, `%${search}%`],
    (err, result) => {
      callback(err, result);
    }
  );
};

// Update

// Delete
exports.deleteSceneById = (id, callback) => {
  db.run(
    `
    DELETE FROM Scenes WHERE id = ?
  `,
    [id],
    (err) => {
      callback(err);
    }
  );
};
