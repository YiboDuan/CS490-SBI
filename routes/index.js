var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Event = mongoose.model('Event');

router.get('/events', function (req, res) {
  Event.find(function (err, events){
    if(err){ return next(err); }

    res.json(events);
  });
});

router.post('/events', function (req, res, next) {
  var evt = new Event(req.body);

  evt.save(function (err, evt){
    if(err){ return next(err); }

    res.json(evt);
  });
});

module.exports = router;