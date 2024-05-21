const db = require('../config/database');
const fs = require('fs');
const { getFileType } = require('../utils/mime');

const createTable = `
      CREATE TABLE IF NOT EXISTS Scenes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT,
        location TEXT UNIQUE,
        type TEXT,
        title TEXT DEFAULT 'TEMP',
        character TEXT DEFAULT 'TEMP',
        works TEXT DEFAULT 'TEMP',
        flame INTEGER DEFAULT 0,
        star INTEGER DEFAULT 0
      );
    `;

// Create
exports.createScene = (req, callback) => {
  const { location, type, title, people, group, flame, star } = req.body;
  const date = Date.now();

  db.serialize(() => {
    db.run(createTable, (err) => {
      if (err) {
        callback(err);
      }
    });

    db.run(
      `
     INSERT INTO Scenes(date, location, type, title, character, works, flame, star) VALUES (?,?,?,?,?,?,?,?);
    `,
      [date, location, type, title, character, works, tags, flame, star],
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

exports.createScenesByDir = async (req, callback) => {
  const { directory } = req.body;
  // const date = Date.now();
  const date = 1711806402708;
  console.log(directory);

  try {
    await new Promise((resolve, reject) => {
      db.run(createTable, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    const files = await fs.promises.readdir(directory);
    for (const file of files) {
      const location = `${directory}\\${file}`;
      const type = getFileType(file);

      await new Promise((resolve, reject) => {
        db.run(
          `
            INSERT OR IGNORE INTO Scenes(date, title, location, type) VALUES (?,?,?,?);
          `,
          [date, file, location, type],
          (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          }
        );
      });
    }

    const result = await new Promise((resolve, reject) => {
      db.all(
        `
          SELECT * FROM Scenes WHERE date = ?
        `,
        [date],
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    console.log(result);
    callback(null, result);
  } catch (error) {
    console.error(error);
    callback(error);
  }
};

// Read

// dont need this one
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
exports.updateInitScene = async (reqData, callback) => {
  const { id, title, character, works } = reqData;
  db.run(
    `
    UPDATE Scenes SET title = ?, character = ?, works = ? WHERE id = ?;
  `,
    [title, character, works, id],
    (err) => {
      callback(err);
    }
  );
};

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
