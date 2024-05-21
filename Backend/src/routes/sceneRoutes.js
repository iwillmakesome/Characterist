const express = require('express');
const router = express.Router();
const SceneController = require('../controllers/sceneController');

// Create
router.post('/', SceneController.createScene);

// remove this one
router.post('/directory', SceneController.createScenesByDir);

// Read
router.get('/', (req, res, next) => {
  const queryType = Object.keys(req.query)[0];
  if (!queryType) {
    return SceneController.getAllScenes(req, res, next);
  } else if (queryType === 'title') {
    return SceneController.getSceneByTitle(req, res, next);
  } else if (queryType === 'id') {
    return SceneController.getSceneById(req, res, next);
  } else if (queryType === 'search') {
    return SceneController.searchScenes(req, res, next);
  } else {
    res.status(400).send('Invalid queryType');
  }
});
router.get('/recent', SceneController.getRecentCreatedScenes);
router.get('/low', SceneController.getLowViewScenes);
router.get('/high', SceneController.getHighViewScenes);

// Update
// remove this one
router.patch('/init', SceneController.updateInitScene);

// Delete
router.delete('/', SceneController.deleteSceneById);

module.exports = router;
