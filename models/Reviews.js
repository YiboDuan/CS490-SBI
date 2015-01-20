var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  company: String,
  location: String,
  rating: String,
  notes: String,
  website: String
});

mongoose.model('Review', ReviewSchema);