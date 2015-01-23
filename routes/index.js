var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Review = mongoose.model('Review');
var User = mongoose.model('User');

router.get('/reviews', function (req, res) {
  Review.find(function (err, reviews){
    if(err){ return next(err); }

    res.json(reviews);
  });
});

router.post('/reviews/company', function (req, res, next) {
  Review.find({company: req.body.company}, function (err, reviews){
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
  });
});

router.post('/reviews/delete', function (req, res, next) {
  Review.remove({_id: req.body._id}, function(err, affected) {
  	console.log('deleted rows ' + affected);
  });
});

router.get('/users', function (req, res) {
  User.find(function (err, users){
    if(err){ return next(err); }

    res.json(users);
  });
});

router.post('/users/create', function (req, res, next) {
  var user = new User(req.body);

  user.save(function (err, user){
    if(err){ return next(err); }
    res.json(user);
  });
});

router.post('/users/login', function (req, res, next) {
  User.findOne({username: req.body.username, password: req.body.password}, function (err, user){
    if(err){ return next(err); }

    res.json(user);
  });
});

module.exports = router;