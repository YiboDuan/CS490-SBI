var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Event = mongoose.model('Review');

router.get('/reviews', function (req, res) {
  Event.find(function (err, reviews){
    if(err){ return next(err); }

    res.json(reviews);
  });
});

router.post('/reviews', function (req, res, next) {
  var review = new Review(req.body);

  review.save(function (err, review){
    if(err){ return next(err); }

    res.json(review);
  });
});

module.exports = router;