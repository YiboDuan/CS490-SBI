var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Review = mongoose.model('Review');

router.get('/reviews', function (req, res) {
  Review.find(function (err, reviews){
    if(err){ return next(err); }

    res.json(reviews);
  });
});

router.put('/reviews', function (req, res, next) {
  var review = new Review(req.body);

  review.save(function (err, review){
    if(err){ return next(err); }

    res.json(review);
  });
});

module.exports = router;