const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: `Missing name or price`,
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: `success`,
    data: {
      results: tours.length,
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: `success`,
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  res.status(200).json({
    status: `Done`,
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: `success`,
    data: {
      tour: '<UPDATED TOUR>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: `success`,
    data: null,
  });
};
