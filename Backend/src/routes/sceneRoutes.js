const express = require('express');
const router = express.Router();
const SceneController = require('../controllers/sceneController');

// const multer = require('multer');
// const path = require('path');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const uploadPath = path.join(__dirname, '../../public', '/scenes');
//     console.log(uploadPath);
//     cb(null, uploadPath);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // 파일 이름 설정
//   },
// });

// const upload = multer({ storage: storage });
//
// Create
router.post('/', SceneController.createScene);

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

// Delete
router.delete('/', SceneController.deleteSceneById);

module.exports = router;
