var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Event = mongoose.model('Event');

router.get('/reviews', function (req, res) {
  Event.find(function (err, reviews){
    if(err){ return next(err); }

    res.json(reviews);
  });
});

router.post('/reviews', function (req, res, next) {
  var evt = new Event(req.body);

  evt.save(function (err, evt){
    if(err){ return next(err); }

    res.json(evt);
  });
});

module.exports = router;