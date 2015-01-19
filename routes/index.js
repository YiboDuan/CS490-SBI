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

router.post('/reviews/create', function (req, res, next) {
  var review = new Review(req.body);

  review.save(function (err, review){
    if(err){ return next(err); }

    res.json(review);
  });
});

router.post('/reviews/update', function (req, res, next) {
  Review.update({_id: req.body._id}, req.body, function(err, affected) {
  	console.log('affected rows ' + affected);
  })
});

module.exports = router;