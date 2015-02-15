var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Review = mongoose.model('Review');
var User = mongoose.model('User');
var Profile = mongoose.model('Profile');

var SECRET = '!uWRx78thDH1Z1kBBq';

var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

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

router.post('/users/create', function (req, res, next) {
  var user = new User(req.body);

  user.save(function (err, user){
    if(err){ return next(err); }
    res.json(user);
  });
});

router.get('/profile', function (req, res, next) {
  Profile.find({id: req.body.id}, function (err, profile){
    if(err){ return next(err); }

    res.json(profile);
  });
});

router.post('/profile/add', function (req, res, next) {
  var profile = new Profile(req.body);

  profile.save(function (err, profile){
    if(err){ return next(err); }
    res.json(profile);
  });
});

router.post('/authenticate', function (req, res, next) {
  User.findOne({username: req.body.username, password: req.body.password}, function (err, user){
    if(err){ return next(err); }

    if(user) {
      var profile = {
        username: user.username,
        email: user.email,
        id: user.id
      };
    } else {
      res.send(401, 'Wrong user or password');
      return;
    }
    var token = jwt.sign(profile, SECRET, { expiresInMinutes: 60*5 });
    res.json({ token: token, user: user });
  });
});

module.exports = router;
