const sceneModel = require('../models/sceneModel');
const tagModel = require('../models/tagModel');

// Create
exports.createScene = async (req, res, next) => {
  try {
    const resultID = await new Promise((resolve, reject) => {
      sceneModel.createScene(req, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
    res.send(`Scene Added with ID: ${resultID}`);
  } catch (err) {
    next(err);
  }
};

// remove this one
exports.createScenesByDir = async (req, res, next) => {
  try {
    const result = await new Promise((resolve, reject) => {
      sceneModel.createScenesByDir(req, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
};

// Read
exports.getSceneById = async (req, res, next) => {
  try {
    const { id } = req.query;
    const tagModelPromise = new Promise((resolve, reject) => {
      tagModel.getTagsBySceneId(id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const sceneModelPromise = new Promise((resolve, reject) => {
      sceneModel.getSceneById(id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const [sceneModelResult, tagModelResult] = await Promise.all([
      sceneModelPromise,
      tagModelPromise,
    ]);

    sceneModelResult.tags = tagModelResult.map((tag) => tag.name);
    res.json(sceneModelResult);
  } catch (err) {
    next(err);
  }
};

exports.getAllScenes = (req, res, next) => {
  try {
    sceneModel.getAllScenes((err, result) => {
      if (err) {
        next(err);
      } else {
        res.json(result);
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.getRecentCreatedScenes = (req, res, next) => {
  try {
    sceneModel.getRecentCreatedScenes((err, result) => {
      if (err) {
        next(err);
      } else {
        res.json(result);
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.getLowViewScenes = (req, res, next) => {
  try {
    sceneModel.getLowViewScenes((err, result) => {
      if (err) {
        next(err);
      } else {
        res.json(result.sort(() => Math.random() - 0.5).slice(0, 3));
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.getHighViewScenes = (req, res, next) => {
  try {
    sceneModel.getHighViewScenes((err, result) => {
      if (err) {
        next(err);
      } else {
        res.json(result.sort(() => Math.random() - 0.5).slice(0, 3));
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.getSceneByTitle = (req, res, next) => {
  try {
    const { title } = req.query;
    sceneModel.getSceneByTitle(title, (err, result) => {
      if (err) {
        return next(err);
      } else {
        res.json(result);
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.searchScenes = (req, res, next) => {
  try {
    const { search } = req.query;
    sceneModel.searchScenes(search, (err, result) => {
      if (err) {
        next(err);
      } else {
        res.json(result);
      }
    });
  } catch (err) {
    next(err);
  }
};

// Update

exports.updateInitScene = async (req, res, next) => {
  try {
    const { id, type, title, character, works, tags } = req.body;
    const sceneData = { id, type, title, character, works };

    // update Initial Scene
    await new Promise((resolve, reject) => {
      sceneModel.updateInitScene(sceneData, (err) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve();
        }
      });
    });
    for (const tag of tags) {
      // update Tag Table
      const tagId = await new Promise((resolve, reject) => {
        tagModel.createTag(tag, (err, result) => {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        });
      });

      const tagData = { tag_id: tagId.id, scene_id: sceneData.id };
      // update Tag and Scene Table
      await new Promise((resolve, reject) => {
        tagModel.createTagAndSceneRelation(tagData, (err) => {
          if (err) {
            reject(new Error(err));
          } else {
            resolve();
          }
        });
      });
    }

    res.send(500);
  } catch (err) {
    next(err);
  }
};

// Delete
exports.deleteSceneById = (req, res, next) => {
  try {
    const { id } = req.query;
    sceneModel.deleteSceneById(id, (err) => {
      if (err) {
        next(err);
      } else {
        res.status(200);
      }
    });
  } catch (err) {
    next(err);
  }
};
