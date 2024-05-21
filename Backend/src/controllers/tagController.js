const tagModel = require('../models/tagModel');

exports.createTag = (req, res, next) => {
  try {
    const { tag_id, view_id } = req.body;
    const reqData = { tag_id, view_id };

    tagModel.createTag(reqData, (err) => {
      next(err);
    });

    res.send(500);
  } catch (err) {
    next(err);
  }
};
