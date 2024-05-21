// file request control
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const viewModel = require('../models/sceneModel');

exports.files = (req, res, next) => {
  const filePath = req.query.location;
  try {
    res.sendFile(filePath);
  } catch (err) {
    next(err);
  }
};

exports.preview = (req, res, next) => {
  const fileType = req.query.type;
  const contentId = req.query.id;

  viewModel.getFilePathById(contentId, (err, result) => {
    if (err || result === undefined) {
      return next(err);
    }
    const filePath = result.location;

    if (fileType === 'image') {
      res.sendFile(filePath);
    } else if (fileType === 'video') {
      const thumbnailPath = process.cwd() + '/src/public/thumbnails';
      const thumbnailName = `thumbnail${Date.now()}.png`;

      ffmpeg(filePath)
        .screenshots({
          count: 1,
          folder: thumbnailPath,
          filename: thumbnailName,
          size: '320x200',
        })
        .on('end', function () {
          res.sendFile(`${thumbnailPath}/${thumbnailName}`, (err) => {
            if (err) {
              next(err);
            } else {
              fs.unlink(`${thumbnailPath}/${thumbnailName}`, (unlinkErr) => {
                if (unlinkErr) {
                  next(unlinkErr);
                }
              });
            }
          });
        })
        .on('error', function (err) {
          console.error(err);
          return res.json({ success: false, err });
        });
    }
  });
};
