const peopleModel = require('../models/peopleModel');

exports.createPeople = (req, res, next) => {
  try {
    const { name, group } = req.body;

    peopleModel.createPeople(name, group, (err) => {
      if (err) {
        next(err);
      }
      res.status(201).send();
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllPeople = (req, res, next) => {
  try {
    peopleModel.getAllPeople((err, result) => {
      if (err) {
        next(err);
      }
      res.status(200).send(result);
    });
  } catch (err) {
    next(err);
  }
};
