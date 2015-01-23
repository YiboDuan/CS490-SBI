var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  company: String,
  location: String,
  position: String,
  rating: String,
  notes: String,
  website: String,
  author: String,
  startDate: Date,
});

mongoose.model('Review', ReviewSchema);